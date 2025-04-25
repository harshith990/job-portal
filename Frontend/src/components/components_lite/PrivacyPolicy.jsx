import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy – JOBDEKLO</h1>

        <p className="mb-4">
          JOBDEKLO respects your privacy. This policy explains how we collect,
          use, and protect your information.
        </p>

        <h2 className="font-semibold mb-2">What We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-sm">
          <li>Name, Email, Phone, Resume</li>
          <li>IP, Browser info, Pages visited</li>
        </ul>

        <h2 className="font-semibold mb-2">Why We Collect</h2>
        <ul className="list-disc list-inside mb-4 text-sm">
          <li>Improve our platform</li>
          <li>Notify updates or support</li>
          <li>Prevent fraud or abuse</li>
        </ul>

        <h2 className="font-semibold mb-2">Data Sharing</h2>
        <p className="mb-4 text-sm">
          We don’t sell your data. Info is shared only with trusted providers or
          legal authorities when required.
        </p>

        <h2 className="font-semibold mb-2">Your Rights</h2>
        <ul className="list-disc list-inside mb-4 text-sm">
          <li>View or edit your info</li>
          <li>Request data deletion</li>
        </ul>

        <h2 className="font-semibold mb-2">Contact</h2>
        <p className="text-sm">
          For queries, reach us at <strong>jobdeklo2025@gmail.com</strong>
        </p>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
