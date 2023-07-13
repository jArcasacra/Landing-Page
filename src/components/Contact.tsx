import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 w-full'>
            <div className='lg:col-span-2 my-4 md:mr-12'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Join the Arcasacra Community</h1>
                <p>Sign up for our newsletter to stay up-to-date with the latest trends in ethical living, exclusive offers, and inspiring stories of positive change. Follow us on social media to connect with like-minded individuals and join the movement towards a more sustainable and equitable world.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                    <button className="bg-secondary w-[200px] rounded-md font-medium md:ml-4 my-6 mx-auto px-6 py-3 text-white">Subscribe</button>
                </div>
                <p>We care bout the protection of your data. Read our <span className='text-[#dbd9f1] font-semibold'><a href="#">Privacy Policy</a></span>.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Contact;