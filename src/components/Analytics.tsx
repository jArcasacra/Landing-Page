import React from 'react'
import Community from '../assets/community.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto my-8 grid md:grid-cols-2 object-center'>
            <img className='w-[350px] mx-2 h-full ' src={Community} alt={'Together'} />
            <div className='flex flex-col mt-8 justify-center'>
                <p className='text-[#735EEB] font-bold'> Aiming to change the world by creating an unique community</p>
                <h1 className='md:4xl sm:text-3xl text-2xl font-bold py-2 '>Who are we?</h1>
                <p>We are an ethical partnership who seeks to be the change we wish to see in society, creating a creative community where everyone can give it's 2 cents towards a better world. 
                  Some of our unrelenting ethical values are:
                </p>
                <ul className='py-2 ml-8 list-disc'>
                  <li>Privacy is a beloved treasure and we respect that fully</li>
                  <li>Not tolerate any form of discrimination, gender gap or slavery</li>
                  <li>Be gentle with mother nature and keep the carbon footprint to a minimum</li>
                </ul>
                <button className="bg-[#735EEB] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">Check EthicArts</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics