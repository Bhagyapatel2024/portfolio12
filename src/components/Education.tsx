import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  // bg-gray-900
  return (
    <section id="education" className="py-20 bg-black ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12">Education & Achievements</h2>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Computer Science Engineering
                </h3>
                <p className="text-gray-400 mb-2">Gujarat Technological University</p>
                <p className="text-gray-500">2022 - 2026</p>
                <p className="text-gray-300 mt-4">
                Course Work: Data Structures and Algorithms, Probability and Statistics, Database Management Systems, Operating Systems, Object-Oriented Programming, Computer Architecture, Data Communication.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                National Level Science Talent Search Examination - 2021 (NSTSE)
                </h3>
                <p className="text-gray-400 mb-2">Secured a position in the top 1% among thousands of participants across India, highlighting exceptional problem-solving skills and a strong foundation in scientific concepts. Achieving a State Rank of 37 further emphasizes my strong performance in a highly competitive environment.</p>
                <p className="text-gray-500">Dec 2021</p>
                <p className="text-gray-300 mt-4">
                All India Rank : 553 , State Rank : 37 
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Award className="text-blue-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Competitive Programming
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400">LeetCode</p>
                    <p className="text-gray-300">
                      500+ problems solved | Top 2% globally
                    </p>
                  </div>
                 
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}