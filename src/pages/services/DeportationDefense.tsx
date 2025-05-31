import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const deportationInfo = [
  {
    title: 'Types of Relief',
    options: [
      {
        name: 'Cancellation of Removal',
        requirements: [
          'Physical presence in U.S. for 10 years or more',
          'Good moral character',
          'No disqualifying criminal convictions',
          'Exceptional hardship to qualifying U.S. relative',
        ],
      },
      {
        name: 'Asylum',
        requirements: [
          'Fear of persecution in home country',
          'Based on race, religion, nationality, political opinion, or social group',
          'Filed within one year of arrival (with exceptions)',
          'Credible testimony and supporting evidence',
        ],
      },
      {
        name: 'Adjustment of Status',
        requirements: [
          'Immediate relative petition approved',
          'Entry with inspection',
          'No inadmissibility grounds',
          'Visa immediately available',
        ],
      },
      {
        name: 'Voluntary Departure',
        requirements: [
          'Physical presence at all hearings',
          'Good moral character',
          'Means and intention to depart',
          'No serious criminal history',
        ],
      },
    ],
  },
  {
    title: 'Our Defense Strategy',
    steps: [
      {
        name: 'Initial Case Review',
        details: [
          'Comprehensive review of immigration history',
          'Analysis of removal charges',
          'Identification of potential relief options',
          'Development of defense strategy',
        ],
      },
      {
        name: 'Evidence Gathering',
        details: [
          'Collection of supporting documents',
          'Witness statements and declarations',
          'Expert testimony if needed',
          'Country conditions research',
        ],
      },
      {
        name: 'Court Representation',
        details: [
          'Master calendar hearing preparation',
          'Individual hearing representation',
          'Motion practice and briefing',
          'Appeals if necessary',
        ],
      },
      {
        name: 'Post-Hearing Support',
        details: [
          'Implementation of court orders',
          'Status adjustment assistance',
          'Appeals process guidance',
          'Compliance monitoring',
        ],
      },
    ],
  },
  {
    title: 'Emergency Services',
    services: [
      {
        name: 'Bond Hearings',
        features: [
          'Quick response to detention',
          'Evidence of community ties',
          'Financial documentation preparation',
          'Release strategy development',
        ],
      },
      {
        name: 'Stay of Removal',
        features: [
          'Emergency motion filing',
          'Last-minute legal interventions',
          'Temporary relief requests',
          'Administrative appeals',
        ],
      },
    ],
  },
];

export default function DeportationDefense() {
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
              Deportation Defense
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strong legal representation when you need it most. We fight to protect your rights
              and keep families together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Types of Relief Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {deportationInfo[0].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deportationInfo[0].options.map((option, index) => (
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

          {/* Defense Strategy Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {deportationInfo[1].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deportationInfo[1].steps.map((step, index) => (
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

          {/* Emergency Services Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl mb-8">
              {deportationInfo[2].title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deportationInfo[2].services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-jcas-primary mb-4">{service.name}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-jcas-primary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
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
              Facing deportation proceedings? Don't wait. Our experienced immigration attorneys
              are ready to fight for your rights and help you stay in the United States.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-jcas-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
            >
              Schedule Emergency Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 