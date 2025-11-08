"use client";

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Services() {
  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactNo: '',
    serviceName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryFormData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      toast({
        title: 'Success!',
        description: 'Your inquiry has been submitted successfully.',
      });

      setInquiryFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12">
      {/* ===== Inquiry Form ===== */}
      <div className="max-w-5xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
        <div className="border-b border-gray-300 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Inquiry Form</h2>
        </div>

        <form onSubmit={handleInquirySubmit} className="px-6 py-6 grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Here"
              value={inquiryFormData.name}
              onChange={(e) => setInquiryFormData({ ...inquiryFormData, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Mobile No. <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Here"
              value={inquiryFormData.mobile}
              onChange={(e) => setInquiryFormData({ ...inquiryFormData, mobile: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter Here"
              value={inquiryFormData.email}
              onChange={(e) => setInquiryFormData({ ...inquiryFormData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">
              Your Message <span className="text-red-600">*</span>
            </label>
            <textarea
              placeholder="Enter Here"
              rows={3}
              value={inquiryFormData.message}
              onChange={(e) => setInquiryFormData({ ...inquiryFormData, message: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="border border-black text-black px-6 py-1.5 rounded-md font-semibold hover:bg-black hover:text-white transition-all disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* ===== Our Services Section ===== */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            VALUE AND BELIEFS
          </h3>

          <p className="text-gray-700 leading-relaxed mb-3">
            We believe in adding value to our clients. We attempt to identify
            candidates that meet our clients requirements to the best of our
            ability. We attempt to enhance the effectiveness of our client’s
            recruitment operations by providing the most appropriate referrals
            and support with information in line with their requirements.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3">
            We believe in conducting our business with honesty and professional
            integrity. We never solicit candidates from our clients, we dont
            refer candidates with doubtful integrity, and we conduct our
            business with utmost transparency. We work closely with companies
            that appreciate our values.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We take equal care in recommending candidates to our clients; only
            when we are convinced that the candidate will align with our
            client’s culture and systems do we refer them.
          </p>
        </div>

        {/* Right Image */}
  <div className="flex justify-center w-full h-72 md:h-96">
  <img
    src="/service.jpg"
    alt="Value and Beliefs"
    className="rounded-lg shadow-lg w-full max-w-md h-full object-cover"
  />
</div>


      </div>

      {/* ===== Placement Services Section ===== */}
<div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 border-b-4 border-blue-500 inline-block">
    PLACEMENT SERVICES
  </h2>

  <div className="space-y-10 text-justify leading-relaxed">
    {/* --- Section 1 --- */}
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">
        A PERMANENT STAFFING SOLUTION
      </h3>
      <p className="mb-4">
        Getting the right candidates at the right time is every HR Manager dream. 
        At <span className="font-semibold text-blue-700">KPMS</span>, we work towards achieving that dream for you. 
        We have considerable expertise in providing permanent staffing across various levels and sectors. 
        Our streamlined system ensures we understand your requirements and select candidates who match your needs — both technically and culturally.
      </p>
      <p className="font-semibold text-gray-900">
        Our permanent staffing process is divided into the following four stages:
      </p>
    </div>

    {/* --- Stages --- */}
    <div className="space-y-8 border-l-4 border-blue-400 pl-6">
      <div>
        <h4 className="font-semibold text-lg mb-2">1️⃣ Job Definition</h4>
        <p>
          We start by understanding your organization, culture, objectives, and values. 
          Together, we define the position, create an ideal candidate profile, 
          and suggest a realistic compensation package based on market conditions.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">2️⃣ Search</h4>
        <p>
          We target relevant companies and institutions through our extensive database, 
          online networks, advertising, and personal contacts. 
          We then shortlist potential candidates whose profiles best fit your needs.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">3️⃣ Presentation</h4>
        <p>
          A shortlist of top candidates is presented with detailed resumes and 
          assessment reports. We also arrange and coordinate interviews.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">4️⃣ Overview</h4>
        <p>
          Our Executive Search Business focuses on senior-level recruitment, 
          managerial assessments, and HR research. With over five years of experience, 
          <span className="font-semibold text-blue-700">KPMS</span> has built a reputation 
          for delivering high-performing talent across multiple industries and leadership levels.
        </p>
      </div>
    </div>

    {/* --- Offerings --- */}
    <div>
      <h4 className="font-semibold text-xl mb-3 text-blue-700">Our Offerings</h4>
      <p className="mb-3">
        Our Executive Search team combines diverse industry experience with a deep understanding of market dynamics. 
        Using a matrix structure by geography and industry practice, we deliver talent solutions with speed, 
        precision, and a strong focus on communication.
      </p>
      <p>
        This structure allows us to maintain excellent client relationships, 
        ensure smooth project flow, and consistently deliver the best resources in the industry.
      </p>
    </div>

    {/* --- Industries --- */}
    <div>
      <h4 className="font-semibold text-xl mb-3 text-blue-700">
        Some of the industries we specialize in:
      </h4>
      <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
        <li>Manufacturing</li>
        <li>Automotive / Auto Ancillaries</li>
        <li>Consumer Durables</li>
        <li>Engineering</li>
        <li>Process Industry (Oil & Gas)</li>
        <li>Power & Infrastructure</li>
        <li>Fertilizer / Chemicals / Petrochemicals</li>
        <li>FMCG / Retail</li>
        <li>Banking & Financial Services</li>
        <li>Information Technology & ITES</li>
      </ul>
    </div>

    {/* --- Final Steps --- */}
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold text-xl mb-2 text-blue-700">Role Articulation</h4>
        <p>
          Together with clients, we define the required skills, responsibilities, 
          experience, and success criteria for the ideal candidate to ensure the perfect fit.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-2 text-blue-700">Preparation of Search Brief</h4>
        <p>
          We prepare a detailed Search Brief outlining responsibilities, qualifications, 
          experience, and criteria for success — ensuring clarity for both clients and our internal teams.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-2 text-blue-700">
          Drawing the Search Plan & Search Team
        </h4>
        <p>
          Based on the Search Brief, we map potential candidates across industries. 
          With teams in 15 locations across India, each assignment is handled by 
          3 consultants and 1 research analyst with domain expertise.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-2 text-blue-700">Search – Research</h4>
        <p>
          Our search team leverages databases, industry networks, and online sources 
          to identify and approach prospective candidates efficiently and confidentially.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ===== Our Services Form ===== */}
          <div className="max-w-6xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-100 rounded-t-md">
              <h2 className="text-lg font-semibold text-gray-800">
                Our Services Form
              </h2>
            </div>

            <form onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              try {
                const response = await fetch('http://localhost:3001/api/service-request', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(serviceFormData),
                });

                if (!response.ok) throw new Error('Failed to submit form');

                toast({
                  title: 'Success!',
                  description: 'Your service request has been submitted successfully.',
                });

                setServiceFormData({
                  name: '',
                  address: '',
                  city: '',
                  state: '',
                  pincode: '',
                  contactNo: '',
                  serviceName: '',
                  email: '',
                  message: '',
                });
              } catch (error) {
                console.error('Error submitting service request:', error);
                toast({
                  title: 'Error',
                  description: 'Failed to submit form. Please try again.',
                  variant: 'destructive',
                });
              } finally {
                setLoading(false);
              }
            }} className="px-6 py-8 grid md:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Name <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.name}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, name: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Address <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.address}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, address: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* City */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  City <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.city}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, city: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* State */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  State <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.state}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, state: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Pincode <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.pincode}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, pincode: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Contact no. <span className="text-red-600">★</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter Here"
                  value={serviceFormData.contactNo}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, contactNo: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Service Name */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Service name <span className="text-red-600">★</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Here"
                  value={serviceFormData.serviceName}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, serviceName: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Here"
                  value={serviceFormData.email}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-3">
                <label className="block font-medium text-gray-800 mb-1">
                  Your Message <span className="text-red-600">★</span>
                </label>
                <textarea
                  placeholder="Enter Here"
                  rows={3}
                  value={serviceFormData.message}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, message: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="md:col-span-3 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
          
       
    
    </section>
  );
}
