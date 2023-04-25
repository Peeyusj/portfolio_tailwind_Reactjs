import React from 'react'
import Screenshot4 from '../assets/Screenshot (4).png'
import Screenshot5 from '../assets/Screenshot (5).png'
import Screenshot6 from '../assets/Screenshot (6).png'
import Screenshot7 from '../assets/Screenshot (7).png'
import Screenshot8 from '../assets/Screenshot (8).png'
import Screenshot9 from '../assets/Screenshot (9).png'
import Screenshot10 from '../assets/Screenshot (10).png'
import Screenshot12 from '../assets/Screenshot (12).png'
import Screenshot13 from '../assets/Screenshot (13).png'
 

export const Portfolio = () => {
    let port=[
        {im:Screenshot4,
         txt:"Responsive/Reactjs",
         chref:"https://github.com/Peeyusj/foodx_reactjs" ,
         dfref:"https://peeyusj.github.io/foodx_reactjs/"
        },
        {im:Screenshot5,
            txt:"Not-Responsive/Reactjs",
            chref:"https://github.com/Peeyusj/neflixcln" ,
            dfref:"https://peeyusj.github.io/neflixcln/"
           },
           {im:Screenshot6,
            txt:"Not-Responsive/Reactjs",
            chref:"https://github.com/Peeyusj/Libmngapp" ,
            dfref:"https://peeyusj.github.io/Libmngapp/"
           },
           {im:Screenshot7,
            txt:"Responsive/JS",
            chref:"https://github.com/Peeyusj/library" ,
            dfref:"https://peeyusj.github.io/library/"
           },
           {im:Screenshot8,
            txt:"Responsive/JS",
            chref:"https://github.com/Peeyusj/Sps-Game" ,
            dfref:"https://peeyusj.github.io/Sps-Game/"
           },   
           {im:Screenshot9,
            txt:"NOT-Responsive/Reactjs",
            chref:"https://github.com/Peeyusj/Twitter_clone" ,
            dfref:"https://twitter-del.netlify.app/"
           },
           {im:Screenshot10,
            txt:"Responsive/JS",
            chref:"https://github.com/Peeyusj/Weather_c" ,
            dfref:"https://peeyusj.github.io/Weather_c/"
           },
           {im:Screenshot12,
            txt:"Responsive/Reactjs",
            chref:"https://github.com/Peeyusj/ShowbiZZimg" ,
            dfref:"https://movieimgd.netlify.app/"
           },
           {im:Screenshot13,
            txt:"Responsive/Reactjs",
            chref:"https://github.com/Peeyusj/TodoLisT",
            dfref:"https://todofirstly.netlify.app/"
           },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full min-h-full pb-12 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='  w-full flex flex-wrap h-full '>
            {port.map((item)=><div className=' relative group md:w-[30%] m-2 flex flex-col'>
                    <img className=' w-full rounded-t-sm hover:scale-105 duration-300 md:hover:opacity-60' src={item.im} alt="" />
                     <div className='absolute top-16 pr-2 text-3xl duration-200 text-white  hidden group-hover:block'>{item.txt}</div> 
                    <div className=' bg-gradient-to-b from-black to-gray-800 flex items-center w-full justify-around rounded-b-sm '>
                        <div className='p-2 w-1/2 md:hover:bg-gray-600  text-center'>
                        <a className=' w-full py-2 px-2 md:hover:bg-gray-600 cursor-pointer ' href={item.dfref} target='_blank' >Demo</a>
                        </div>
                        <div className='w-1/2 p-2 md:hover:bg-gray-600 text-center'>
                        <a className=' w-full py-2 px-2 cursor-pointer ' href={item.chref} target='_blank' >Code</a>
                        </div >
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}
