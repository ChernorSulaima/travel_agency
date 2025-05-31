import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const greenCardTypes = [
  {
    title: 'Family-Based Green Card',
    eligibility: [
      'Immediate relatives of U.S. citizens',
      'Family preference categories',
      'Spouse of U.S. citizen or permanent resident',
      'Parents of U.S. citizens',
      'Siblings of U.S. citizens',
    ],
    requirements: [
      'Proof of qualifying relationship',
      'Affidavit of Support (Form I-864)',
      'Birth certificates and marriage certificates',
      'Valid passport',
      'Medical examination',
      'Police clearances',
    ],
    process: [
      'File petition (Form I-130)',
      'Wait for priority date (if applicable)',
      'File adjustment of status or consular processing',
      'Attend biometrics appointment',
      'Attend interview',
      'Receive decision',
    ],
  },
  {
    title: 'Employment-Based Green Card',
    eligibility: [
      'Priority workers (EB-1)',
      'Advanced degree professionals (EB-2)',
      'Skilled workers and professionals (EB-3)',
      'Special immigrants (EB-4)',
      'Investors (EB-5)',
    ],
    requirements: [
      'Job offer from U.S. employer (most categories)',
      'Labor certification (most categories)',
      'Evidence of qualifications',
      'Valid passport',
      'Medical examination',
      'Police clearances',
    ],
    process: [
      'Employer files PERM (if required)',
      'File immigrant petition',
      'Wait for priority date',
      'File adjustment of status or consular processing',
      'Attend biometrics appointment',
      'Attend interview',
    ],
  },
  {
    title: 'Diversity Visa (Green Card Lottery)',
    eligibility: [
      'Born in eligible country',
      'High school education or equivalent',
      'Two years of qualifying work experience',
    ],
    requirements: [
      'Valid passport',
      'Educational documents',
      'Birth certificate',
      'Police certificates',
      'Medical examination',
      'Proof of financial support',
    ],
    process: [
      'Enter DV lottery during registration period',
      'Check results online',
      'Submit DS-260 if selected',
      'Gather and submit required documents',
      'Attend visa interview',
      'Receive decision',
    ],
  },
];

export default function GreenCard() {
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
              Green Card Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive support for permanent residency applications. Learn about different paths
              to obtaining a Green Card and their requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Green Card Types Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
              Paths to Permanent Residency
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              There are several ways to obtain a Green Card. Explore the different categories and
              their requirements below.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {greenCardTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-jcas-dark mb-6">{type.title}</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-jcas-primary mb-4">Eligibility</h4>
                      <ul className="space-y-2">
                        {type.eligibility.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="text-jcas-primary mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-jcas-primary mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req) => (
                          <li key={req} className="flex items-start">
                            <span className="text-jcas-primary mr-2">•</span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-jcas-primary mb-4">Process</h4>
                      <ol className="space-y-2">
                        {type.process.map((step, stepIndex) => (
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
              Ready to start your journey to permanent residency? Our experienced immigration attorneys
              will guide you through every step of the process.
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