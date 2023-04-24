import React from 'react'
import envelope from "../assets/envelope.png"
import github1 from "../assets/github1.png"
import linkedin from "../assets/linkedin.png"
import user from "../assets/user.png"
import { FaArrowDown } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className='top-[35%] flex flex-col left-0 fixed w-1/12 text-white'>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300' ><a href="https://www.linkedin.com/in/piyush-rai-9a87471aa/" className='flex justify-between items-center'><span>LinkedIn</span><img src={linkedin} className='w-9 py-3 pr-2' alt="" /></a></div>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300'><a href="https://github.com/Peeyusj" className='flex justify-between items-center'><span>Github</span><img src={github1} className='w-9 py-3 px-2' alt="" /></a></div>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300'><a href="mailto:piyushrairai124@gmail.com" className='flex justify-between items-center'><span>Gmail</span><img src={envelope} className='w-9 py-3 px-2' alt="" /></a></div>
      <div className='my-3 pl-2 bg-gray-600 ml-[-100px] hover:ml-[-1px] hover:rounded-r-md w-40 duration-300'><a href="./PiyushRai_resume.pdf" download={true} className='flex justify-between items-center'><span>Resume <FaArrowDown/> </span><img src={user} className='w-9 py-3 px-2' alt="" /></a></div>
    </div>
  )
}

export default SocialIcons