import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const visaTypes = [
  {
    title: 'Tourist/Business Visa (B1/B2)',
    requirements: [
      'Valid passport',
      'Completed DS-160 form',
      'Proof of ties to home country',
      'Financial documents',
      'Travel itinerary',
      'Proof of business purpose (for B1)',
    ],
    process: [
      'Complete DS-160 form',
      'Pay visa fee',
      'Schedule visa interview',
      'Attend interview at U.S. Embassy',
      'Wait for visa processing',
    ],
  },
  {
    title: 'Student Visa (F1)',
    requirements: [
      'Acceptance letter from U.S. school',
      'Form I-20 from school',
      'Proof of financial support',
      'Valid passport',
      'Academic transcripts',
      'English proficiency test results',
    ],
    process: [
      'Get accepted to U.S. school',
      'Receive I-20 form',
      'Pay SEVIS fee',
      'Complete DS-160',
      'Attend visa interview',
    ],
  },
  {
    title: 'Work Visa (H-1B)',
    requirements: [
      'Job offer from U.S. employer',
      'Bachelor\'s degree or equivalent',
      'Employer sponsorship',
      'Labor Condition Application (LCA)',
      'Relevant work experience',
    ],
    process: [
      'Employer files LCA',
      'Employer files H-1B petition',
      'Wait for USCIS approval',
      'Apply for visa at U.S. Embassy',
      'Attend visa interview',
    ],
  },
];

export default function VisaApplications() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-jcas-light py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-jcas-dark sm:text-6xl">
              Visa Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert assistance with all types of visa applications and renewals. Learn about the requirements
              and process for different visa types.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Visa Types Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
              Types of Visas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We assist with various types of visas. Select a visa type to learn more about its requirements
              and application process.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-jcas-dark mb-6">{visa.title}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-jcas-primary mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {visa.requirements.map((req) => (
                          <li key={req} className="flex items-start">
                            <span className="text-jcas-primary mr-2">•</span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-jcas-primary mb-4">Application Process</h4>
                      <ol className="space-y-2">
                        {visa.process.map((step, stepIndex) => (
                          <li key={step} className="flex items-start">
                            <span className="text-jcas-primary mr-2">{stepIndex + 1}.</span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Need help with your visa application? Our experienced immigration attorneys are here to guide you
              through the process.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-jcas-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 