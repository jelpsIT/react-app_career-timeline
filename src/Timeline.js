import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCogs, FaCloud, FaLaptopCode, FaHandsHelping } from 'react-icons/fa';

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
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const handleWheel = (e) => {
      e.preventDefault();
      if (window.innerWidth >= 768) {
        container.scrollLeft += e.deltaY * 1.5;
      }
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="py-6 sm:py-12 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center relative min-h-screen">
      {/* Header */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-8 tracking-wide px-4 text-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Career Timeline
      </motion.h1>

      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 pointer-events-none sm:bg-gradient-to-r sm:from-blue-900/10 sm:to-blue-900/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Timeline Container */}
      <div
  ref={scrollRef}
  className="overflow-x-auto overflow-y-auto custom-scrollbar w-full px-2 sm:px-4"
		>
        <div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-600 to-blue-400 opacity-10 sm:opacity-20 md:block hidden"
          style={{
            transform: 'translateY(-50%)',
            backgroundImage: 'repeating-linear-gradient(to right, #2563eb 0, #2563eb 4px, transparent 4px, transparent 8px)',
          }}
        />
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`w-full max-w-[90%] sm:max-w-[300px] md:max-w-[360px] mx-auto bg-gray-800/80 backdrop-blur-md rounded-xl p-3 sm:p-5 flex-shrink-0 shadow-xl border ${index === 0 ? 'border-blue-600/50' : 'border-gray-700/50 hover:border-blue-500/50'} transition-colors duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}
            >
              <motion.div
                className="h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-3 sm:mb-5 mx-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              />
              <h2
                className={`text-base sm:text-lg md:text-xl font-extrabold text-center mb-2 sm:mb-4 ${index === 0 ? 'text-blue-200' : 'text-blue-300'} tracking-tight`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.period}
              </h2>
              <div className="space-y-1 sm:space-y-2">
                {item.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-center bg-gray-700/50 text-blue-400 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-inner border border-gray-600/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      borderColor: '#60a5fa',
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill === 'Cybersecurity' && <FaShieldAlt className="mr-1 text-blue-300" />}
                    {skill === 'Automation' && <FaCogs className="mr-1 text-blue-300" />}
                    {skill === 'Microsoft Azure' && <FaCloud className="mr-1 text-blue-300" />}
                    {skill === 'C#' && <FaLaptopCode className="mr-1 text-blue-300" />}
                    {skill === 'Technical Support' && <FaHandsHelping className="mr-1 text-blue-300" />}
                    {skill}
                  </motion.div>
                ))}
              </div>
              {item.details && (
                <motion.div
                  className="mt-3 sm:mt-5 text-xs sm:text-sm text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
                >
                  <ul className="list-none space-y-1 sm:space-y-2">
                    {item.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-2 mt-1 sm:mt-2 flex-shrink-0"></span>
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

      {/* Buttons */}
      <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
        <motion.a
          href="https://www.linkedin.com/in/josh-dobson-/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg border border-blue-700/50 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(37, 99, 235, 0.7)', transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/jelpsIT"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg border border-blue-700/50 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(37, 99, 235, 0.7)', transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="mailto:dobsonj@leadforensics.com"
          className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg border border-blue-700/50 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(37, 99, 235, 0.7)', transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
};

export default Timeline;