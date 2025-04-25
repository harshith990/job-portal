import React from 'react';
import Navbar from '../components_lite/Navbar';
import { FaWhatsapp, FaTelegram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import aboutus from './aboutus.jpg';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={aboutus} alt="Logo" className="h-20" />
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">About Us</h1>

        {/* Share icons */}
        <div className="mb-6 text-lg text-gray-700">
          <span className="font-semibold">Share :</span>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-green-600 text-2xl"><FaWhatsapp /></a>
            <a href="#" className="text-blue-400 text-2xl"><FaTelegram /></a>
            <a href="#" className="text-blue-600 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-blue-700 text-2xl"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-600 text-2xl"><FaEnvelope /></a>
          </div>
        </div>

        {/* About Paragraphs */}
        <div className="text-gray-700 text-lg space-y-5 leading-relaxed">
          <p>
            Welcome to our job portal <span className="text-purple-600 font-semibold">JobDeklo.com</span>, your go-to destination for the latest job updates, career advice, and professional growth resources. We aim to empower job seekers by keeping them informed and prepared for success in today’s competitive job market.
          </p>

          <p>
            Our portal is built using the modern MERN stack (MongoDB, Express.js, React.js, and Node.js) to ensure a seamless and efficient user experience. Whether you're a fresher or an experienced professional, our platform is designed to support your journey to land the perfect job.
          </p>

          <p>
            We offer valuable content on resume writing, interview preparation, trending career paths, and industry-specific news. Our mission is to provide actionable and real-time information to help you make smarter career decisions.
          </p>

          <p>
            With our easy-to-use interface and regularly updated job listings, JobDeklo.com is your reliable companion in your job hunt. We’re committed to maintaining a platform that is helpful, trustworthy, and always evolving with your needs.
          </p>

          <p>
            Thank you for being a part of our journey. For any queries or suggestions, feel free to contact us. We’re here to help you grow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
