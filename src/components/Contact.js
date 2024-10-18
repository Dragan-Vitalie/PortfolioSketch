import React from 'react';

const Contact = () => {
  return (
    <section className="section-content">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <div>
        <p className="text-gray-300 mb-2">
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='hover:border-sky-800 hover:border p-2 -ml-2 rounded-md' target='_blank' rel="noopener noreferrer"> dragan-vitali@mail.com</a>
        </p>
        <p className="text-gray-300 mb-2 ">07562690128</p>
      </div>
      <form className="mt-10 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-300 mb-1">First Name</label>
            <input
              type="text"
              className="w-full h-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-300 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full h-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full h-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full h-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Company</label>
          <input
            type="text"
            className="w-full h-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Company"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-600 bg-gray-800 text-white"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-green-500 text-white w-60 px-4 py-2 rounded-md hover:bg-green-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact