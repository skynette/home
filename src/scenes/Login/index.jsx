import React from 'react'

const Login = () => {
  return (
    <div className='bg-body-400 grid justify-center items-center h-screen w-screen font-main'> 
      <div className='bg-body-300 w-[100vw] h-[100vh] shadow-md rounded-lg sm:w-[65vw] sm:h-auto lg:w-[60vw]'>
        <div className='flex w-[100%] justify-center border-b border-body-400 mt-2 mr-2'>
          <div className='ml-2 w-[50%] text-center px-2 py-6 hover:cursor-pointer font-bold'>Login</div>
          <div className='ml-2 w-[50%] text-center px-2 py-6 bg-body-400 hover:cursor-pointer font-bold mr-2'>Register</div>
        </div>
        <div className='flex justify-between'>
            <img src="src/assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg" className='w-[40%] mx-6 my-4 ml-9 rounded-lg hidden sm:block'/>
          <div className='mx-6 my-4 w-[100%] sm:w-[45%]'>
            <h2 className='font-bold text-cblue-500'>Login</h2>
            <div className='flex justify-around my-5 border border-cblue-500 text-cblue-500 fill-cblue-500 rounded-lg py-3 w-[100%] hover:bg-cblue-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300'>
            <svg  className="fill-inherit" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/></svg>
            <p>Login with Facebook</p>
            </div>
            <div className='flex justify-around my-5 border border-cred-500 text-cred-500 fill-cred-500 rounded-lg py-3 w-[100%] hover:bg-cred-500 hover:cursor-pointer hover:fill-body-300 hover:text-body-300'>
            <svg className="fill-inherit" fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M128,228A100,100,0,1,1,198.71069,57.28906,12.0001,12.0001,0,1,1,181.74,74.25977,75.99547,75.99547,0,1,0,203.05371,140H128a12,12,0,0,1,0-24h88a12,12,0,0,1,12,12A100.11332,100.11332,0,0,1,128,228Z"/>
</svg>       <p>Login with Google</p>
            </div>
            <div className='bg-body-300 relative left-[50%] inline text-body-500'>or</div>
            <hr />
            <form action="/">
              <input name="name" type='text' placeholder=' User Name Or Email' className='block my-5 w-[90%] py-3 px-2 rounded-lg !outline-none border border-body-400 text-sm'/>
              <input name="password" type='password' placeholder=' Password' className='block my-5 w-[90%] py-3 px-2 rounded-lg !outline-none border border-body-400 text-sm' />
              <div className='flex justify-between'>
                <label htmlFor="remember"><input id='remember' name="Remember" type='checkbox' className='accent-cred-500'/><span className='text-sm'> Remember me</span></label>
                <a href='/'  className="text-cblue-500 text-sm">Lost Your Password?</a>
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