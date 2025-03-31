import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  {
    period: 'High School (2010-2013)',
    skills: ['HTML', 'CSS', 'Basic JavaScript', 'XSS', 'Active Directory', 'Batch'],
  },
  {
    period: 'College Year 1 (2013-2014)',
    skills: ['C#', 'C++', 'Networking', 'Game Development', 'Procedural-Oriented Programming', 'Matrice'],
  },
  {
    period: 'College Year 2 (2014-2015)',
    skills: ['Game Design', 'Databases', 'Networking', 'Object Oriented Programming', 'HCI'],
  },
  {
    period: 'University Year 1 (2015-2016)',
    skills: ['Architecture and Operating Systems', 'Core Computing Concepts', 'Database System Development', 'Networks', 'Programming'],
  },
  {
    period: 'University Year 2 (2016-2017)',
    skills: ['Python', 'Network Design', 'Web Programming', 'Graphics and Computer Vision'],
  },
  {
    period: 'University Year 3 (2017-2018)',
    skills: ['3D Computer Graphics and Animation', 'Security and Cryptography'],
  },
  {
    period: 'SaaS Specialist - Lead Forensics - Part time (2018-2019)',
    skills: ['Communication', 'Analytical Skills'],
    details: ['Part-time role at Lead Forensics focusing on the USA market, enhancing communication and analytics skills.'],
  },
  {
    period: 'Lead Generation Specialist - Lead Forensics (2019-2020)',
    skills: ['Communication', 'Data analysis', 'Analytical Skills'],
    details: [
      'Generated most revenue for USA LinkedIn channel (07/2019 YTD).',
      'Contributed 14% of enquiries via LinkedIn USA (07/2019 YTD).',
    ],
  },
  {
    period: 'Marketing Executive - Webeo (2019)',
    skills: ['Communication', 'Analytical Skills'],
    details: [
      'Worked at Webeo (Jun-Sep 2019) on real-time B2B website personalization.',
      'Tailored website experiences based on company name, industry, location, and size.',
    ],
  },
  {
    period: 'IT Administrator - Lead Forensics (2020-2021)',
    skills: [
      'Interpersonal Skills',
      'Troubleshooting',
      'Microsoft 365',
      'Technical Support',
      'IT Service Management',
      'Windows 10',
	  'Intune',
    ],
    details: [
      '1st Line IT Administrator managing 500+ users across 3 UK and 2 USA offices.',
      'Handled helpdesk duties, on-prem support, and hardware (PCs, laptops, Macs, phones).',
      'Implemented new IT solutions to improve business operations.',
	  'Intune configuration and deployed during COVID period',
    ],
  },
  {
    period: 'Senior IT Systems Admin - Lead Forensics (2021-2022)',
    skills: [
      'Cybersecurity',
      'Microsoft Intune',
      'Powershell',
      'Process Automation',
      'Microsoft Azure',
      'Network Security',
    ],
    details: [
      'Led cybersecurity initiatives and Microsoft 365 administration.',
      'Automated processes and managed backups for system reliability.',
    ],
  },
  {
    period: 'Senior IT Systems Admin - Lead Forensics (2022-2023)',
    skills: [
      'Incident Management',
      'Powershell',
      'Information Security',
      'Backup & Recovery Systems',
      'Powershell',
      '3rd Line Support',
    ],
    details: [
      'Continued leadership in cybersecurity and system administration.',
      'Enhanced incident response and security patching processes.',
    ],
  },
  {
    period: 'Voluntary Work - Zambia (2022)',
    skills: ['Customer Service', 'Computer Repair', 'Technical Support'],
    details: [
      'Taught IT and repaired laptops at Ipalo Christian School (Sep 18-22, 2022).',
      'Installed eBook readers and educational resources on devices.',
    ],
  },
  {
    period: 'IT Support Projects Engineer - Lead Forensics (2023-2024)',
    skills: [
      'Project Management',
      'Microsoft Intune',
      'Microsoft Azure',
      'Automation',
      'Freshservice ITSM',
      'Network Security',
    ],
    details: [
      'Drove IT projects with Freshservice, Azure, and Intune.',
      'Managed MDM deployment and infrastructure improvements.',
    ],
  },
  {
    period: 'IT Support Projects Engineer - Lead Forensics (2024-2025)',
    skills: [
      'Powershell',
      'API Development',
      'Data Analytics',
      'Microsoft Graph API',
      'FortiNet',
      'Security Management',
    ],
    details: [
      'Focused on automation, API development, and advanced security.',
      'Implemented automated reports and outage management solutions.',
    ],
  },
];

const Timeline = () => {
  return (
    <div className="py-16 overflow-x-auto bg-gradient-to-b from-gray-900 to-black custom-scrollbar">
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
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;