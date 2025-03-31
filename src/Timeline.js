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
    skills: ['Java', 'Python', '3D Modelling', 'Database Design', 'Network Design', 'Cryptography',],
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
    <div className="py-12 overflow-x-auto">
      <div className="flex space-x-8 px-8 min-w-max">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="w-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 flex-shrink-0 shadow-xl border border-gray-600/30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, type: 'spring', stiffness: 80 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          >
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mb-6 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: index * 0.5, ease: 'easeOut' }}
            />
            <h2 className="text-2xl font-bold text-center mb-4 text-teal-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {item.period}
            </h2>
            <div className="space-y-3">
              {item.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-900 text-teal-300 text-sm font-medium px-4 py-2 rounded-full text-center shadow-md"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', bounce: 0.3 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#2dd4bf', color: '#1f2937' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            {item.details && (
              <motion.div
                className="mt-6 text-sm text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              >
                <ul className="list-none space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;