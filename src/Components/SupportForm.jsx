import React from 'react'
import Footer from './Footer'
function SupportForm() {
  return (
    <>
    <div className="flex items-center justify-center bg-gray-50">
      <form className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div className="mb-4">
          <input
            id="businessName"
            type="text"
            placeholder="Business Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div className="mb-4">
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div className="mb-4">
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md h-24 text-lg"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-[150px] h-[50px] bg-orange-500 text-white py-2 rounded-[5px] hover:bg-orange-600 transition duration-200"
          >
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default SupportForm