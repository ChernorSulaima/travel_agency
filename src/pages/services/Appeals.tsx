import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const appealsInfo = [
  {
    title: 'Types of Appeals',
    options: [
      {
        name: 'Board of Immigration Appeals (BIA)',
        description: 'Appeals of Immigration Judge decisions',
        cases: [
          'Removal orders',
          'Denial of relief from removal',
          'Denial of bond redetermination',
          'Denial of motions to reopen/reconsider',
        ],
      },
      {
        name: 'Administrative Appeals Office (AAO)',
        description: 'Appeals of USCIS decisions',
        cases: [
          'Employment-based petitions',
          'Certain family-based petitions',
          'Temporary protected status',
          'Naturalization denials',
        ],
      },
      {
        name: 'Federal Court Appeals',
        description: 'Appeals to Circuit Courts',
        cases: [
          'Review of BIA decisions',
          'Constitutional claims',
          'Questions of law',
          'Abuse of discretion claims',
        ],
      },
    ],
  },
  {
    title: 'Appeal Process',
    steps: [
      {
        name: 'Case Evaluation',
        details: [
          'Review of initial decision',
          'Identification of legal errors',
          'Assessment of success probability',
          'Strategy development',
        ],
      },
      {
        name: 'Notice of Appeal',
        details: [
          'Timely filing of appeal notice',
          'Payment of filing fees',
          'Preliminary statement of issues',
          'Request for stay if needed',
        ],
      },
      {
        name: 'Brief Preparation',
        details: [
          'Legal research and analysis',
          'Evidence compilation',
          'Argument development',
          'Citation to relevant cases',
        ],
      },
      {
        name: 'Post-Filing Support',
        details: [
          'Response to government briefs',
          'Oral argument preparation',
          'Motion practice',
          'Implementation of decisions',
        ],
      },
    ],
  },
  {
    title: 'Common Grounds for Appeal',
    grounds: [
      {
        category: 'Legal Errors',
        examples: [
          'Incorrect legal standard applied',
          'Due process violations',
          'Improper evidence consideration',
          'Jurisdictional issues',
        ],
      },
      {
        category: 'Factual Errors',
        examples: [
          'Misinterpretation of evidence',
          'Overlooked crucial evidence',
          'Credibility determination issues',
          'Clear error in findings',
        ],
      },
      {
        category: 'Procedural Errors',
        examples: [
          'Inadequate hearing opportunity',
          'Improper notice',
          'Bias or prejudice',
          'Denial of right to counsel',
        ],
      },
    ],
  },
];

export default function Appeals() {
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
              Immigration Appeals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert representation for immigration appeals at all levels. We fight to overturn
              unfavorable decisions and protect your rights.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Types of Appeals Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {appealsInfo[0].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appealsInfo[0].options.map((option, index) => (
                <motion.div
                  key={option.name}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-2">{option.name}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.cases.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Appeal Process Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {appealsInfo[1].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {appealsInfo[1].steps.map((step, index) => (
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

          {/* Common Grounds Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {appealsInfo[2].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {appealsInfo[2].grounds.map((ground, index) => (
                <motion.div
                  key={ground.category}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">{ground.category}</h3>
                  <ul className="space-y-2">
                    {ground.examples.map((example) => (
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
              Facing an unfavorable immigration decision? Our experienced attorneys can help you
              navigate the appeals process and fight for a positive outcome.
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