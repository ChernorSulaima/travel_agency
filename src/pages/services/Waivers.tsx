import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const waiverInfo = [
  {
    title: 'Types of Waivers',
    options: [
      {
        name: 'Unlawful Presence Waiver (I-601A)',
        requirements: [
          'Qualifying U.S. citizen or LPR relative',
          'Proof of extreme hardship to qualifying relative',
          'Clean criminal record',
          'Positive discretionary factors',
        ],
      },
      {
        name: 'Criminal Inadmissibility Waiver (I-601)',
        requirements: [
          'Qualifying U.S. citizen or LPR relative',
          'Proof of rehabilitation',
          'Evidence of good moral character',
          'Demonstration of hardship',
        ],
      },
      {
        name: 'Fraud or Misrepresentation Waiver',
        requirements: [
          'Qualifying U.S. citizen or LPR spouse or parent',
          'Evidence of extreme hardship',
          'Full disclosure of misrepresentation',
          'Positive equities outweigh negative factors',
        ],
      },
    ],
  },
  {
    title: 'Application Process',
    steps: [
      {
        name: 'Initial Consultation',
        details: [
          'Review of immigration history',
          'Assessment of eligibility',
          'Identification of qualifying relatives',
          'Strategy development',
        ],
      },
      {
        name: 'Evidence Collection',
        details: [
          'Gathering hardship documentation',
          'Obtaining supporting affidavits',
          'Medical records if applicable',
          'Financial documentation',
        ],
      },
      {
        name: 'Waiver Preparation',
        details: [
          'Drafting detailed hardship analysis',
          'Organizing supporting evidence',
          'Preparing client declaration',
          'Legal brief preparation',
        ],
      },
      {
        name: 'Post-Filing Support',
        details: [
          'Response to USCIS inquiries',
          'Additional evidence submission',
          'Status monitoring',
          'Interview preparation if required',
        ],
      },
    ],
  },
  {
    title: 'Hardship Factors',
    factors: [
      {
        category: 'Financial Hardship',
        examples: [
          'Loss of employment opportunities',
          'Cost of relocation',
          'Property and asset loss',
          'Educational expenses',
        ],
      },
      {
        category: 'Medical Hardship',
        examples: [
          'Ongoing medical treatment',
          'Mental health concerns',
          'Healthcare availability abroad',
          'Special needs care',
        ],
      },
      {
        category: 'Family Hardship',
        examples: [
          'Separation from children',
          'Elderly parent care',
          'Educational disruption',
          'Family ties in U.S.',
        ],
      },
    ],
  },
];

export default function Waivers() {
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
              Immigration Waivers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert assistance with immigration waivers to overcome inadmissibility issues and reunite
              families. We help you build the strongest possible case.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Types of Waivers Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {waiverInfo[0].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {waiverInfo[0].options.map((option, index) => (
                <motion.div
                  key={option.name}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">{option.name}</h3>
                  <ul className="space-y-2">
                    {option.requirements.map((req) => (
                      <li key={req} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Process Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {waiverInfo[1].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {waiverInfo[1].steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">
                    {index + 1}. {step.name}
                  </h3>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hardship Factors Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {waiverInfo[2].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {waiverInfo[2].factors.map((factor, index) => (
                <motion.div
                  key={factor.category}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">{factor.category}</h3>
                  <ul className="space-y-2">
                    {factor.examples.map((example) => (
                      <li key={example} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-8">
              Need help with an immigration waiver? Our experienced attorneys will evaluate your case
              and help you build the strongest possible application.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-jcas-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 