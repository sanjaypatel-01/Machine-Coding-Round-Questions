import React from 'react'

// Here we learn form handling, how to prevent our form from browser loading

const FormHandling = () => {
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <div className='bg-white rounded-xl p-6 w-96'>
          <form className='flex flex-col items-center gap-2'>
            <h3 className='text-[28px] text-black font-bold mb-4'>Create an Account</h3>
            <input className='border-2 border-grey-200 px-4 py-2 text-md rounded w-full mb-2' type="text" placeholder='Enter Name here'/>
            <input className='border-2 border-grey-200 px-4 py-2 text-md rounded w-full mb-2' type="email" placeholder='Enter Your Email' />
            <input className='border-2 border-grey-200 px-4 py-2 text-md rounded w-full mb-2' type="password" placeholder='Enter Password' />
            <input className='border-2 border-grey-200 px-4 py-2 text-md rounded w-full mb-2' type="password" placeholder='Enter Confirm Password' />
            <button className='text-xl px-4 py-2 rounded bg-indigo-600 font-semibold mt-5 w-full text-white'>Submit</button>
          </form>
          <p className='text-xs text-gray-600 mt-4 text-center'>By registering, you agree to our <span className='text-indigo-600'>Terms & Conditions</span> and <span className='text-indigo-600'>Privacy Policy.</span></p>
      </div>
    </div>
  )
}

export default FormHandling;