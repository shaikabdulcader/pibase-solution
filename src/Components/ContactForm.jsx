import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto p-8 mt-10 rounded-lg ">
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-1/2 p-2 border border-gray-300 rounded text-[1.1rem]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-1/2 p-2 border border-gray-300 rounded text-[1.1rem]"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center w-1/2">
            <span className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-l text-[1.1rem]">
              +91
            </span>
            <input
              type="tel"
              placeholder="Your Phone"
              className="p-2 w-full border  rounded-r text-[1.1rem]"
            />
          </div>
          <select className="w-1/2 p-2 border border-gray-300 rounded text-[1.1rem]">
            <option>India (भारत)</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border border-gray-300 rounded text-[1.1rem]"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32 text-[1.1rem]"
        ></textarea>
        <button
          type="submit"
          className="w-[40%] h-[50px] p-2 bg-[#FF8C00] text-white rounded hover:bg-orange-600"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
