import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-gray-300 flex sm:mt-10 sm:flex-row flex-col justify-center items-center gap-4 sm:gap-16 px-7 py-10 text-gray-700'>
        <div className='flex flex-col gap-3 justify-center items-center max-w-2xl'>
            <h1>Mlbsl</h1>
            <p className='text-justify leading-8'>I design highly scalable and responsive web applications using MongoDB , Express , React and Nodejs.I have 2 years of experience of working as a Full Stack Developer and instructor</p>

        </div>

        <div>
            <h1 className='text-center'>Social Contacts</h1>
            <div className='flex gap-4 text-xl sm:text-2xl py-4 text-blue-500'>
                <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
                <a href="https://www.github.com/"><FaGithub/></a>
                <a href="https://www.linkedin.com/"><FaLinkedin/></a>
                <a href="https://www.twitter.com/"><FaTwitter/></a>
            </div>
        </div>

        <div>
            <p>@ All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
