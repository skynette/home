import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/register")
    }
    return (
        <div className='bg-body-400 h-screen flex flex-col justify-center items-center font-main p-6 md:p-10'>
            <div className='bg-body-300 w-full h-full shadow-md rounded-lg sm:w-[65vw] sm:h-auto lg:w-[60vw]'>
                <div className='flex w-[100%] justify-center items-center border-b border-body-400 mt-2 mr-2'>
                    <div className='ml-2 w-[50%] text-center px-2 py-6 hover:cursor-pointer font-bold'>Login</div>
                    <div className='ml-2 w-[50%] text-center px-2 py-6 bg-body-400 rounded-t-lg hover:cursor-pointer font-bold mr-2' onClick={handleClick}>Register</div>
                </div>

                {/* main content */}
                <div className='flex justify-between'>
                    
                    {/* left side */}
                    <img src="src/assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg" style={{ objectFit: 'cover' }} className='w-[40%] mx-6 my-4 ml-9 rounded-lg hidden sm:block' />
                    
                    {/* right side */}
                    <div className='mx-6 my-4 w-[100%] sm:w-[45%]'>
                        <h2 className='font-bold text-cblue-500'>Login</h2>
                        <div className='flex justify-around my-5 border border-cblue-500 text-cblue-500 fill-cblue-500 rounded-lg py-3 w-[100%] hover:bg-cblue-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300'>
                            <svg className="fill-inherit" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></svg>
                            <p>Login with Facebook</p>
                        </div>
                        <div className='flex justify-around my-5 border border-cred-500 text-cred-500 fill-cred-500 rounded-lg py-3 w-[100%] hover:bg-cred-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300'>
                            <svg className="fill-inherit" fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,228A100,100,0,1,1,198.71069,57.28906,12.0001,12.0001,0,1,1,181.74,74.25977,75.99547,75.99547,0,1,0,203.05371,140H128a12,12,0,0,1,0-24h88a12,12,0,0,1,12,12A100.11332,100.11332,0,0,1,128,228Z" />
                            </svg>       <p>Login with Google</p>
                        </div>
                        <div className='bg-body-300 relative left-[50%] inline text-body-500'>or</div>
                        <hr />
                        <form action="/">
                            <div className='relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute fill-body-500 top-3 left-[80%]">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                                <input name="name" type='text' placeholder=' User Name Or Email' className='block my-5 w-[90%] py-3 px-2 rounded-lg !outline-none border border-body-400 text-sm' required />
                            </div>
                            <div className='relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute fill-body-500 top-3 left-[80%]">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                </svg>
                                <input name="password" type='password' placeholder=' Password' className='block my-5 w-[90%] py-3 px-2 rounded-lg !outline-none border border-body-400 text-sm' required />
                            </div>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="remember" className='flex items-center'><input id='remember' name="Remember" type='checkbox' className='accent-cred-500 appearance-none h-4 w-4 cursor-pointer border border-body-400 rounded-md' /><svg className="absolute h-4 w-4 opacity-0 check-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                </svg>
                                    <span className='text-sm ml-2'> Remember me</span></label>
                                <a href='/' className="text-cblue-500 text-sm">Lost Your Password?</a>
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className='py-2 text-body-300 bg-cred-500 w-[100%] rounded-lg border-2 border-cred-500 my-4 hover:bg-body-300 hover:text-cred-500'>Log In</button>
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <p className='text-sm'>Dont have an account? <a href='/register' className='text-cred-500'>Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login