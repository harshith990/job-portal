import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions – JOBDEKLO</h1>

        <p className="mb-4 text-sm">
          By using <strong>JOBDEKLO</strong> at <strong>www.jobdeklo.com</strong>, you agree to follow the terms outlined below.
        </p>

        <h2 className="font-semibold text-base mb-2">1. Use of Platform</h2>
        <p className="mb-4 text-sm">
          JOBDEKLO is for lawful job-seeking and hiring activities only. Do not misuse the site or violate any local laws.
        </p>

        <h2 className="font-semibold text-base mb-2">2. Changes to Terms</h2>
        <p className="mb-4 text-sm">
          We may revise these terms anytime. Continued use of our site means you accept the updated terms.
        </p>

        <h2 className="font-semibold text-base mb-2">3. Intellectual Property</h2>
        <p className="mb-4 text-sm">
          All content belongs to JOBDEKLO. Do not copy or redistribute without permission.
        </p>

        <h2 className="font-semibold text-base mb-2">4. Limitation of Liability</h2>
        <p className="mb-4 text-sm">
          We don’t guarantee complete accuracy of content. Use the platform at your own risk.
        </p>

        <h2 className="font-semibold text-base mb-2">5. Legal Jurisdiction</h2>
        <p className="mb-4 text-sm">
          Governed by Indian law. Disputes will be handled in Thane, Maharashtra.
        </p>

        <h2 className="font-semibold text-base mb-2">6. Contact Us</h2>
        <p className="text-sm">
          Email us at <strong>jobdeklo2025@gmail.com</strong> with any questions.
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default TermsOfService;
