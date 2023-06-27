import dotenv  from 'dotenv';
dotenv.config();
import express, { urlencoded, json } from 'express';
import cors from 'cors';
// import { logger } from './middleware/logEvents';
// import errorHandler from './middleware/errorHandler';
// import { verifyJWT } from './middleware/verifyJWT';
import cookieParser from 'cookie-parser';
import credentials from './middleware/credentials.js';
import mongoose from 'mongoose';
import connectDB from './config/dbConn.js';
import {corsOptions} from './config/corsOptions.js';
import userRoute from './routes/userRoute.js';

const PORT = 3500;
const app = express();

// connect to database
connectDB();

// custom middleware logger
// app.use(logger);

// custom middleware to set credentials
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(urlencoded({ extended: false }));

// built-in middleware for json 
app.use(json());

// middleware to parse cookies
app.use(cookieParser());

//serve static files
// app.use('/', express.static(join(__dirname, '/public')));

// routes
// app.use('/', require('./routes/root'));
// app.use('/register', require('./routes/register'));
// app.use('/login', require('./routes/auth'));
// app.use('/refresh', require('./routes/refresh'));
// app.use('/logout', require('./routes/logout'));

// protected routes
// app.use(verifyJWT)
// app.use('/users', require('./routes/api/users'));
// app.use('/employees', require('./routes/api/employees'));

app.use(userRoute);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});



// app.use(errorHandler);
mongoose.connection.once('open', () => {
    console.log('[+] Connected to database');
    app.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`));
})
