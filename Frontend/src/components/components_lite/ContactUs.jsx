import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const faqData = [
  {
    question: 'How do I create an account on JobDeklo?',
    answer: 'Click on the "Register" button in the navbar, fill in your details, choose your role (Student or Recruiter), and submit the form.',
  },
  {
    question: 'How do I log in?',
    answer: 'Go to the "Login" page from the navbar, enter your email and password, then click on "Login".',
  },
  {
    question: 'How can I apply for a job?',
    answer: 'After logging in as a Student, go to the "Jobs" page, search for a job, and click on "Apply Now" on the job card.',
  },
  {
    question: 'How do I update my profile?',
    answer: 'Navigate to your "Profile" page and click on "Edit Profile" to update your details, resume, or contact info.',
  },
  {
    question: 'I forgot my password. How can I reset it?',
    answer: 'On the login page, click on "Forgot Password" and follow the instructions to reset your password via email.',
  },
  {
    question: 'Where can I check the status of my job application?',
    answer: 'Go to the "Profile" section and scroll down to view all the jobs you’ve applied for and their current status.',
  },
  {
    question: 'How do I post a job as a recruiter?',
    answer: 'If you’re logged in as a recruiter, you’ll see the "Post Jobs" link in the navbar. Fill in the job details and click "Post".',
  },
  {
    question: 'How do I contact support?',
    answer: 'For any assistance, email us at jobdeklo2025@gmail.com and we’ll get back to you within 24 hours.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 min-h-screen font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>

          {faqData.map((item, index) => (
            <div key={index} className="mb-5 border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg font-semibold text-blue-700 hover:text-blue-900 transition duration-300"
              >
                {item.question}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-700 text-base bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
