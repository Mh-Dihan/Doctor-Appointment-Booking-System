import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*----------Left Side----------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>This appointment confirmation is generated as part of our healthcare scheduling system. The details provided herein serve as
                     a reference for your upcoming consultation. Please ensure 
                     timely arrival and bring any necessary medical documents for review. Our clinic has 
                     been committed to patient care and service excellence for decades, maintaining consistent standards to support your well-being. For any changes or inquiries regarding your appointment, kindly contact our support desk.</p>
            </div>

            {/*----------Center Side----------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/*----------Right Side----------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*----------Copyright Text----------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
} 

export default Footer