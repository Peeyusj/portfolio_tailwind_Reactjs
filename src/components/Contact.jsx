import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 text-white w-full h-screen mx-auto flex items-center flex-col justify-center'>
        <div className=' text-left w-3/4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me-</p>
        </div>
        <div className='w-3/4'>
            <form action="https://getform.io/f/755207af-25bb-4a26-a310-a37478cf33ea" method='POST' className='flex items-center justify-center flex-col w-full'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 mb-4 md:w-1/2 w-3/4 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
                <input type="email" name='email' placeholder='Enter your email' className='p-2 mb-4 md:w-1/2 w-3/4 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
                <textarea name="message" placeholder='Enter your message...'  rows="10" className=' resize-none p-2 mb-4 bg-transparent border-2 rounded-md md:w-3/4 w-full text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from bg-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
    </div>
  )
}

export default Contact