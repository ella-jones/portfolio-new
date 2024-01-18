import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className='bg-tangerine text-white flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-10 lg:py-5 text-center w-full py-3 absolute bottom-0 '>
        <div className='flex justify-around px-32 lg:px-0 lg:w-1/5 '>
            <a href="https://www.instagram.com/ella.jones__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} />
            </a>
            <a href="github.com/ella-jones" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ella-jones-082b47208/" target="_blank" rel="noopener noreferrer">
                <ImLinkedin size={28} />
            </a>
        </div>
        <h1 className='mt-4 lg:mt-0'>©copyright Ella Jones 2023</h1>
    </div>
  )
}

export default Footer