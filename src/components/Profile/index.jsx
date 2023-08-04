import React from 'react'
import { useState, useRef } from 'react'
import { BsUpload } from 'react-icons/bs';
import Copyright from '../Copyright';

const Profile = () => {
  const profilePicRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleProfilePic = (e) => {
    const files = e.target.files;
    const readerPromises = (files) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(files);
      });
    };

    readerPromises(files[0]).then((result) => {
      setImage(result);
    });
  }

  return (
    <>
      <div className='p-4 md:p-20 md:pt-10 md:pr-4 font-main'>
        <div className='mb-6'>
          <h3 className='text-3xl font-semibold text-body-800 md:mt-10'>My Profile</h3>
          <p className='text-sm font-thin text-body-800'>We are glad to see you again!</p>
        </div>
        <div className='bg-body-300 p-6 pb-14 rounded-md'>
          <h4 className='text-body-800 font-semibold text-lg mb-4'>Profile Information</h4>
          <div
            className='w-[250px] h-[300px] relative rounded-md mb-6'>
            <img src={image} className='w-full h-full object-center object-cover rounded-md' />
            <input className='absolute opacity-0'
              style={{ display: "none" }}
              type='file'
              ref={profilePicRef}
              onChange={handleProfilePic}
            />
            <div
              onClick={() => { profilePicRef.current.click(); }}
              className='p-2 pl-4 absolute flex gap-2 items-center bg-body-300 bottom-4 left-4 rounded-md cursor-pointer'>
              <BsUpload className='inline text-cred-500' />
              <h5 className='font-thin text-sm'>Upload Photo</h5>
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='username'>Username</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='username' name='username' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='email'>Email</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='email' name='email' type='text' />
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='firstname'>First Name</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='firstname' name='firstname' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='lastname'>Last Name</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='lastname' name='lastname' type='text' />
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='phone'>Phone</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='phone' name='phone' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='companyname'>Company Name</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='companyname' name='companyname' type='text' />
            </div>

          </div>
          <label className='block text-body-800 my-2 mt-6' htmlFor='aboutme'>About Me</label>
          <textarea id='aboutme' name='aboutme' className='w-full h-40 rounded-md outline-none px-4 pt-4 border border-body-400' />

          <div className='mt-8'>
            <button className='py-3 px-10 text-body-300 bg-cred-500 border border-cred-500 hover:bg-body-300 hover:text-cred-500 rounded-md' type='submit'>Update Profile</button>
          </div>
        </div>
        <div className='bg-body-300 p-6 pb-14 rounded-md mt-6'>
          <h4 className='text-body-800 font-semibold text-lg mb-4'>Social Media</h4>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='zoom'>Zoom</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='zoom' name='zoom' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='website'>Website</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='website' name='website' type='text' />
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='facebook'>Facebook</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='facebook' name='facebook' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='x'>X</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='x' name='x' type='text' />
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='linkedin'>Linkedin</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='linkedin' name='linkedin' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='instagram'>Instagram</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='instagram' name='instagram' type='text' />
            </div>

          </div>
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='youtube'>Youtube</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='youtube' name='youtube' type='text' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='pinterest'>Pinterest</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='pinterest' name='pinterest' type='text' />
            </div>

          </div>
          <div className='mt-8'>
            <button className='py-3 px-10 text-body-300 bg-cred-500 border border-cred-500 hover:bg-body-300 hover:text-cred-500 rounded-md' type='submit'>Update Profile</button>
          </div>
        </div>
        <div className='bg-body-300 p-6 pb-14 rounded-md mt-6'>
          <h4 className='text-body-800 font-semibold text-lg mb-4'>Change Password</h4>
          <label className='block text-body-800 my-2' htmlFor='oldpass'>Old Password</label>
          <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='oldpass' name='oldpass' type='password' />
          <div className='md:flex md:gap-4'>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='newpass'>New Password</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='newpass' name='newpass' type='password' />
            </div>
            <div className='w-full'>
              <label className='block text-body-800 my-2' htmlFor='confirmnewpass'>Confirm New Password</label>
              <input className='w-full h-12 rounded-md outline-none px-4 text-body-800 border border-body-400' id='confirmnewpass' name='confirmnewpass' type='password' />
            </div>

          </div>
          <div className='mt-8'>
            <button className='py-3 px-10 text-body-300 bg-cred-500 border border-cred-500 hover:bg-body-300 hover:text-cred-500 rounded-md' type='submit'>Change Password</button>
          </div>
        </div>

      </div>
      <Copyright />
    </>
  )
}

export default Profile