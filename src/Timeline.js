import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    period: 'High School (2015-2018)',
    skills: ['HTML', 'CSS', 'Basic JavaScript', 'XSS', 'Active Directory', 'Batch'],
  },
  {
    period: 'College (2018-2020)',
    skills: ['C#', 'C++', 'HTML5', 'Networking', 'Databases', 'Game Development'],
  },
  {
    period: 'University (2020-2023)',
    skills: ['Java', 'Python', '3D Modelling', 'Database Design', 'Network Design', 'Cryptography'],
  },
  {
    period: 'Career (2018-2025)',
    skills: [
      'Project Management',
      'Microsoft 365',
      'Python',
      'Intune Deployment/Configuration',
      'Network Security',
      'Automation',
      'IT Support',
    ],
    details: [
      'SaaS Specialist (2018-2019): Early role at Lead Forensics focusing on communication and analytics.',
      'Lead Generation Specialist (2019-2020): Generated top revenue for USA LinkedIn channel.',
      'IT Administrator (2020-2021): Managed 500+ users across UK/US offices with helpdesk and hardware support.',
      'Senior IT Systems Admin (2021-2023): Led cybersecurity, Microsoft 365, and process automation.',
      'IT Support Projects Engineer (2023-Present): Driving IT projects with Freshservice, Azure, and Intune.',
      'Voluntary Work (2022): Taught IT and repaired laptops in Zambia.',
    ],
  },
];

const Timeline = () => {
  return (
    <div className="py-16 overflow-x-auto bg-gradient-to-b from-gray-900 to-black">
      <div className="flex space-x-10 px-10 min-w-max">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="w-96 bg-gray-900/80 backdrop-blur-md rounded-xl p-6 flex-shrink-0 shadow-2xl border border-gray-800/50 hover:border-indigo-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -15, scale: 1.02, rotate: 1, boxShadow: '0 25px 50px rgba(99, 102, 241, 0.2)' }}
          >
            <motion.div
              className="h-1 w-28 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 mx-auto"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.4, ease: 'easeOut' }}
            />
            <h2
              className="text-2xl font-extrabold text-center mb-5 text-indigo-300 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.period}
            </h2>
            <div className="space-y-2">
              {item.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800/50 text-indigo-400 text-sm font-semibold px-4 py-2 rounded-lg text-center shadow-inner border border-gray-700/50"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', bounce: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    borderColor: '#818cf8',
                    transition: { duration: 0.2 },
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            {item.details && (
              <motion.div
                className="mt-6 text-sm text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              >
                <ul className="list-none space-y-3">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                {/* Note: Fixed closing tag from </li> to </motion.li> */}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;