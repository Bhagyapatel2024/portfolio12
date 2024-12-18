import React, { useState, useEffect } from 'react';
import { Linkedin, Code2 } from 'lucide-react';

const Hero = () => {
  const fullText =
    "I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.";
  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Set a fixed delay for typing effect (50ms per character)
      return () => clearTimeout(timer); // Clear the timeout to avoid overlapping
    }
  }, [index, fullText]);

  return (
    <div className="relative h-screen flex items-center bg-black">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">I'm Bhagya Patel</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Software Engineer</h2>
          <p className="text-xl text-gray-400 mb-12">Crafting elegant solutions to complex problems</p>

          {/* Typewriter effect */}
          <p className="text-xl text-gray-400 mb-12">{displayText}</p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/bhagyapatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://leetcode.com/u/Bhagya_patel_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <Code2 size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
