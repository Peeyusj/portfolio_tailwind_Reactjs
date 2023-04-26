import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import sql from '../assets/sqlp.png'
import tailwind from '../assets/tailwind.png'
import Mongodb from '../assets/Mongodb.png'


const Skills = () => {
    let skill=[
        {
            im:css,
            txt:"Intermediate 1-Y+"
        },
        {
            im:html,
            txt:"Intermediate 1-Y+"
        },  {
            im:javascript,
            txt:"Intermediate 1-Y+"
        },  {
            im:github,
            txt:"Beginner 6m+" 
        },  {
            im:react,
            txt:"Intermediate 6m+"
        },  {
            im:sql,
            txt:"Intermediate 5m+"
        },  {
            im:tailwind,
            txt:"Beginner"
        },
        {
            im:Mongodb,
            txt:"Beginner"
        },
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-full  pb-40 text-white md:h-screen pt-[12rem]'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
            <p className='py-6'>Check out my skills right here</p>
        </div>
        <div className='  w-full flex flex-wrap h-full '>
        {skill.map((item)=><div className=' relative group md:w-[21%] w-1/3 m-3 flex flex-col '>
                <img className=' w-3/4 rounded-t-sm hover:scale-105 duration-300 hover:opacity-60  ' src={item.im} alt="" />
                 <div className='absolute top-1 pr-2 text-3xl duration-200 text-white  hidden group-hover:block'>{item.txt}</div> 
            </div>)}
        </div>
    </div>
</div>
  )
}

export default Skills