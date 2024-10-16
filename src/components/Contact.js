import React from 'react';

const Contact = () => {
  return (
    <section className="fade">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-4">You can reach me at:</p>
      <ul className="list-none">
        <li>Email: <a href="mailto:your.email@example.com" className="text-blue-400">your.email@example.com</a></li>
        <li>Phone: <span className="text-gray-300">+123456789</span></li>
      </ul>
    </section>
  );
};

export default Contact;
