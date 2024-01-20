import React from 'react'

const ContactForm = () => {
  return (
    <section className='py-10 px-10 md:px-32 lg:py-20 lg:px-52'>
        <form className="flex flex-col items-center w-full bg-tangerine px-10 py-7 rounded-3xl text-white">
        <h1 className='text-2xl md:text-3xl font-semibold'>Leave us a message</h1>
        <div className="w-full lg:flex lg:justify-between lg:gap-x-4">
            <div className="w-full lg:w-1/2 mt-5 ">
                <label>First Name*</label>
                <input
                    type="text"
                    name="firstNameInput"
                    id="firstNameInput"
                    className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 focus:outline-periwinkle w-full placeholder:uppercase"
                />
            </div>
            <div className="w-full lg:w-1/2 mt-5 ">
                <label>Last Name*</label>
                <input
                    type="text"
                    name="lastNameInput"
                    id="lastNameInput"
                    className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 focus:outline-periwinkle w-full placeholder:uppercase"
                />
            </div>
            </div>

            <div className='w-full mt-5'>
                <label>Email*</label>
                <input
                    type="text"
                    name="emailInput"
                    id="emailInput"
                    className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 focus:outline-periwinkle w-full placeholder:uppercase"
                />
            </div>

            <div className='w-full mt-5'>
                <label>Mobile*</label>
                <input
                    type="text"
                    name="mobileInput"
                    id="mobileInput"
                    className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 focus:outline-periwinkle w-full placeholder:uppercase"
                />
            </div>

            <div className='w-full mt-5'>
                <label>Message*</label>
                <textarea
                    id="messageInput"
                    rows="5"
                    type="text"
                    name="messageInput"
                    className="block text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 focus:outline-periwinkle w-full tracking-wide"
                    placeholder='What would you like to say...'
                />
            </div>

            <button
                type="submit"
                className="border-2 border-apricot bg-apricot rounded-3xl px-5 py-2 mt-8 mb-2 w-32 text-white font-semibold text-base md:text-lg"
            >
                Send
            </button>
        </form>
    </section>
  )
}

export default ContactForm