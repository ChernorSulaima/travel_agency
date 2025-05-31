import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const citizenshipInfo = [
  {
    title: 'Basic Eligibility Requirements',
    requirements: [
      'Be at least 18 years old',
      'Be a lawful permanent resident (green card holder)',
      'Have continuous residence for 5 years (3 years if married to U.S. citizen)',
      'Be physically present in U.S. for at least 30 months',
      'Be able to read, write, and speak basic English',
      'Demonstrate knowledge of U.S. history and government',
      'Be of good moral character',
    ],
  },
  {
    title: 'Application Process',
    steps: [
      {
        name: 'Initial Assessment',
        details: [
          'Review eligibility requirements',
          'Gather necessary documents',
          'Calculate continuous residence',
          'Verify physical presence requirements',
        ],
      },
      {
        name: 'Application Preparation',
        details: [
          'Complete Form N-400',
          'Collect supporting documents',
          'Prepare application fee',
          'Review application package',
        ],
      },
      {
        name: 'USCIS Processing',
        details: [
          'Biometrics appointment',
          'Background check',
          'Interview scheduling',
          'Citizenship interview and test',
        ],
      },
      {
        name: 'Final Steps',
        details: [
          'Receive decision on application',
          'Attend naturalization ceremony',
          'Take Oath of Allegiance',
          'Receive Certificate of Naturalization',
        ],
      },
    ],
  },
  {
    title: 'Test Preparation',
    sections: [
      {
        name: 'English Test',
        components: [
          'Reading comprehension',
          'Writing skills',
          'Speaking ability',
          'Basic vocabulary and grammar',
        ],
      },
      {
        name: 'Civics Test',
        components: [
          '100 study questions',
          'American history topics',
          'U.S. government structure',
          'Rights and responsibilities',
        ],
      },
    ],
  },
];

export default function Citizenship() {
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
              U.S. Citizenship
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your journey to American citizenship starts here. We provide comprehensive guidance
              through the naturalization process.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Eligibility Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {citizenshipInfo[0].title}
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {citizenshipInfo[0].requirements.map((req) => (
                  <li key={req} className="flex items-start">
                    <span className="text-jcas-primary mr-2">•</span>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
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
              {citizenshipInfo[1].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {citizenshipInfo[1].steps.map((step, index) => (
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

          {/* Test Preparation Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {citizenshipInfo[2].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {citizenshipInfo[2].sections.map((section, index) => (
                <motion.div
                  key={section.name}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">{section.name}</h3>
                  <ul className="space-y-2">
                    {section.components.map((component) => (
                      <li key={component} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{component}</span>
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
              Ready to begin your journey to U.S. citizenship? Our experienced immigration attorneys
              will guide you through every step of the naturalization process.
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