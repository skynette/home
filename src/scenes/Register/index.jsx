import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { HiLockClosed, HiUser } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Register = () => {
    const iconClasses = "absolute top-3 left-[90%] sm:left-[85%] lg:left-[90%] h-6 w-6 text-body-500"
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className='bg-body-400 h-screen flex flex-col justify-center items-center font-main p-6 md:p-10'>

            {/* background */}
            <div className='bg-body-300 w-full h-full shadow-md rounded-lg sm:w-[65vw] sm:h-auto lg:w-[60vw]'>
                <div className='flex w-[100%] justify-center border-b border-body-400 mt-2 mr-2'>
                    <div className='ml-2 w-[50%] text-center px-2 py-6 bg-body-400 rounded-t-md hover:cursor-pointer font-bold mr-2' onClick={handleClick}>Login</div>
                    <div className='ml-2 w-[50%] text-center px-2 py-6  hover:cursor-pointer font-bold' >Register</div>
                </div>

                {/* main content */}
                <div className='flex justify-around'>

                    {/* left side */}
                    <img src="src/assets/joel-filipe-RFDP7_80v5A-unsplash.jpg" className='w-[40%] mx-6 my-4 ml-9 rounded-lg hidden sm:block object-cover' />

                    {/* right side */}
                    <div className='mx-6 my-4 w-[100%] sm:w-[45%]'>
                        <h2 className='font-bold text-cblue-500'>Register</h2>
                        <div className='flex my-5 border border-cblue-500 text-cblue-500 fill-cblue-500 rounded-lg py-3 w-[100%] hover:bg-cblue-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300 px-4'>
                            <FaFacebookF className='h-6 w-6 flex-shrink-0' />
                            <p className='flex-grow text-center'>Login with Facebook</p>
                        </div>
                        <div className='flex my-5 border border-cred-500 text-cred-500 fill-cred-500 rounded-lg py-3 w-[100%] hover:bg-cred-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300 px-4'>
                            <FaGoogle className='h-6 w-6 flex-shrink-0' />
                            <p className='flex-grow text-center'>Login with Google</p>
                        </div>
                        <div className='bg-body-300 relative left-[50%] inline text-body-500'>or</div>
                        <hr />
                        <form action="/">
                            <div className='relative'>
                                <HiUser className={iconClasses} />
                                <input name="name" type='text' placeholder=' User Name' className='block my-5 w-full py-3 px-2 rounded-lg outline-none border border-body-400 text-sm' required />
                            </div>

                            <div className='relative'>
                                <MdEmail className={iconClasses} />
                                <input name="email" type='email' placeholder='Email' className='block my-3 w-full py-3 px-2 rounded-lg !outline-none border border-body-400 text-sm' required />
                            </div>

                            <div className='relative'>
                                <HiLockClosed className={iconClasses} />
                                <input name="password" type='password' placeholder='Password' className='block my-5 w-full py-3 px-2 rounded-lg outline-none border border-body-400 text-sm' required />
                            </div>

                            <div className='relative'>
                                <HiLockClosed className={iconClasses} />
                                <input name="password" type='password' placeholder='Re Enter Password' className='block my-5 w-full py-3 px-2 rounded-lg outline-none border border-body-400 text-sm' required />
                            </div>

                            <div className="relative">
                                <select name="modes" id="modes" className="block my-3 w-full py-3 px-2 rounded-lg text-body-500 outline-none border border-body-400 text-sm" required>
                                    <option value="">Select the mode of use</option>
                                    <option value="Single User">Single User</option>
                                    <option value="Agent">Agent</option>
                                    <option value="Multi User">Multi User</option>
                                </select>
                                <AiOutlineCaretDown className={iconClasses}/>
                            </div>

                            <div className='flex justify-between'>
                                <label className="flex items-center" htmlFor="terms"><input id='terms' name="terms" type='checkbox' className='accent-cred-500 appearance-none h-4 w-4 cursor-pointer border border-body-400 rounded-md' required /><svg className="absolute h-4 w-4 opacity-0 check-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                </svg><span className='text-sm ml-2'> I have accepeted the Terms and Privacy Policy</span></label>
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className='py-2 text-body-300 bg-cred-500 w-[100%] rounded-lg border-2 border-cred-500 my-4 hover:bg-body-300 hover:text-cred-500'>Sign Up</button>
                            </div>
                        </form>
                        <div className='flex justify-center pb-2'>
                            <p className='text-sm'>Already have an account? <a href='/' className='text-cred-500'>Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register