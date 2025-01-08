import React from 'react';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import Header from "../components/Header.js";
import CounsellorCard from "../components/CounsellorCard.js";
import Footer from "../components/Footer.js";
import counselorsData from '../data/counselorsData.js'; 


const Counselors = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200">
        <section className="bg-gradient-to-r from-[#00ADEF] to-[#00C853] text-white text-center py-24">
          <motion.h1 
            className="text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Meet Our World-Class Counselors
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Connecting you with experts to support your mental wellness journey.
          </motion.p>
          <Link to="/about">
            <motion.button 
              className="bg-[#2F4F4F] text-[#F0F0F0] px-4 py-2 rounded-lg hover:bg-[#008080] transition duration-150 ease-in-out"
              whileHover={{ scale: 1.1 }}
            >
              Explore More
            </motion.button>
          </Link>
        </section>

        <section className="container mx-auto px-12 py-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">Our Counselors</h2>
              <p className="text-gray-600">Choose from our team of certified professionals.</p>
            </div>
            <div>
              <select className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:border-indigo-600 transition">
                <option value="">Sort by Specialty</option>
                <option value="trauma">Trauma</option>
                <option value="anxiety">Anxiety</option>
                <option value="grief">Grief</option>
                <option value="family">Family Therapy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {counselorsData.map(counselor => (
              <CounsellorCard key={counselor.id} counselor={counselor} />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-20 px-12">
          <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">What Clients Are Saying</h2>
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["My experience with counseling changed my life.", 
              "The support I received was incredible.", 
              "I found a counselor who truly understood me."
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg text-gray-700 mb-4">"{testimonial}"</p>
                <p className="text-right font-semibold text-gray-800">- Client {String.fromCharCode(65 + index)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-indigo-600 text-white py-16 text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
          >
            Need Help Choosing a Counselor?
          </motion.h2>
          <p className="mb-8">Contact our team for personalized assistance in finding the right counselor for your needs.</p>   
          <Link to="/contact">
            <motion.button 
              aria-label="Get support now"
              className="bg-[#008080] text-[#F0F0F0] px-8 py-4 rounded-full hover:bg-[#273125] transition duration-150 ease-in"
              whileHover={{ scale: 1.1 }}
            >
              Get Support Now
            </motion.button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Counselors;
