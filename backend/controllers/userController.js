import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../model/User.js';


// User registration controller
export const registerUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'error': 'Missing user or password' });

    // check for duplicate usernames in the database
    const duplicate = await UserModel.findOne({ username: user }).exec();
    if (duplicate) return res.status(409).json({ 'error': 'Username already exists' });
    try {
        // hash the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // create and add the new user to the database
        const result = await UserModel.create({
            username: user,
            password: hashedPwd
        });
        console.log(result);
        res.status(201).json({ 'success': `New user ${user} created` });

    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
}


// User login controller
export const loginUser = async (req, res) => {
    const cookies = req.cookies
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'error': 'Missing user or password' });

    // find the user in the database
    const foundUser = await UserModel.findOne({ username: user }).exec();
    if (!foundUser) return res.status(401).json({ 'error': 'Invalid username or password' });

    // compare the password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (!match) return res.status(401).json({ 'error': 'Invalid username or password' });

    const roles = Object.values(foundUser.roles)
    // create a jwt tokens
    const accessToken = jwt.sign(
        {
            UserInfo: {
                username: foundUser.username,
                roles: roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '600s' }
    )
    const newRefreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    let newRefreshTokenArray = !cookies?.jwt
        ? foundUser.refreshToken
        : foundUser.refreshToken.filter(token => token !== cookies.jwt);

    if (cookies?.jwt) {
        const refreshToken = cookies.jwt;
        const foundToken = await UserModel.findOne({ refreshToken }).exec();

        if (!foundToken) {
            console.log("attempted refresh token reuse at login");
            // clear out all previouse refresh tokens
            newRefreshTokenArray = [];
        }
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    }

    // save the refresh token with the current user in the database
    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    await foundUser.save();

    // create secure cookie
    res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'None', secure: true });
    res.json({ accessToken });
}

export const userLogout = async (req, res) => {
	// on client, also delete the access token

	const cookies = req.cookies
	if (!cookies?.jwt) return res.sendStatus(204) // no content
	const refreshToken = cookies.jwt;

	// is refresh token in the database?
	const foundUser = await UserModel.findOne({ refreshToken: refreshToken }).exec();
	if (!foundUser) {
		res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
		return res.sendStatus(204); // no content
	}

	// delete refresh token from database
	foundUser.refreshToken = foundUser.refreshToken.filter(token => token !== refreshToken);
	await foundUser.save();
	res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure: true
	res.sendStatus(204); // no content
}
