import React from 'react';
import t2 from './assets/t2.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">About Me</h2>
        
       

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! My name is <span className="font-bold text-white">Bhagya Patel</span>, and I am an enthusiastic Computer Science Engineering student with a passion for solving complex problems and building innovative solutions. I have a strong foundation in programming languages such as <span className="text-blue-400">Java</span> and <span className="text-blue-400">Python</span> and hands-on experience in web development using <span className="text-purple-400">React.js</span> to create responsive, real-time applications. My background in machine learning includes developing predictive models with frameworks like <span className="text-green-400">scikit-learn</span> and <span className="text-green-400">TensorFlow</span>. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I have demonstrated my problem-solving skills by solving over <span className="font-bold text-white">500 problems on LeetCode</span> and earned an <span className="font-bold text-white">All India Rank of 553</span> in the National Level Science Talent Search Examination.
            </p>
            
            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>

              {/* Skill Categories */}
              <div className="space-y-4">
                {/* Programming Languages */}
                <div>
                  <h4 className="text-gray-400 mb-2">Programming Languages:</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Java', 'Python'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Web Development */}
                <div>
                  <h4 className="text-gray-400 mb-2">Web Development:</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'HTML',
                      'CSS',
                      'JavaScript',
                      'React.js',
                      'Angular.js',
                      'TypeScript',
                      'Sass (CSS)',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Machine Learning */}
                <div>
                  <h4 className="text-gray-400 mb-2">Machine Learning:</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Machine Learning', 'Deep Learning'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
