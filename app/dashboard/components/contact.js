"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the email
    console.log({ subject, message });
  };

  return (
    
    <div className="flex justify-center mt-16  p-6">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-white mb-2">Subject</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-800 text-white"
            placeholder="Enter the subject"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md p-2 w-full bg-gray-800 text-white"
            placeholder="Write your message"
            rows="4"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;