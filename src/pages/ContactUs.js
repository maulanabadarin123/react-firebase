import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang telah diambil dari setiap inputan
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <div className="mt-[100px] container md:container-lg p-4">
      <div className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-wrap sm:-mx-4">
            <div className="px-4 sm:w-1/2 md:w-2/3">
              <h2 className="text-2xl font-medium text-slate-200 mb-3">Send Us A Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="mt-1">
                    <input
                      placeholder="Input Your Name"
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      className="text-black shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm rounded-md"
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-1">
                    <input
                      placeholder="Input Your Email"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="text-black shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-yellow-300 rounded-md"
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-1">
                    <textarea
                      placeholder="Write Your Message Here"
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="text-black  shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-yellow-300 rounded-md"
                      onChange={handleMessageChange}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/3 text-slate-200">
              <h2 className="text-lg font-medium mb-3">Message Info</h2>
              <p className="leading-relaxed">
                {name}
              </p>
              <p className="leading-relaxed mt-2">{email}</p>
              <p className="leading-relaxed mt-2">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
