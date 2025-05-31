import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  DocumentCheckIcon,
  ScaleIcon,
  GlobeAmericasIcon,
  DocumentTextIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Visa Applications',
    description: 'Expert assistance with all types of visa applications and renewals.',
    icon: DocumentCheckIcon,
    path: '/services/visa-applications',
    details: [
      'Tourist visas',
      'Student visas',
      'Work visas',
      'Family visas',
      'Business visas',
      'Visa renewals',
    ],
  },
  {
    name: 'Green Card Assistance',
    description: 'Comprehensive support for permanent residency applications.',
    icon: UserGroupIcon,
    path: '/services/green-card',
    details: [
      'Family-based petitions',
      'Employment-based applications',
      'Investment visas',
      'Adjustment of status',
      'Consular processing',
      'Priority dates monitoring',
    ],
  },
  {
    name: 'U.S. Citizenship',
    description: 'Guidance through the naturalization process.',
    icon: GlobeAmericasIcon,
    path: '/services/citizenship',
    details: [
      'Naturalization applications',
      'Citizenship eligibility assessment',
      'Interview preparation',
      'Citizenship test preparation',
      'Document review',
      'Application support',
    ],
  },
  {
    name: 'Deportation Defense',
    description: 'Strong legal representation in removal proceedings.',
    icon: ScaleIcon,
    path: '/services/deportation-defense',
    details: [
      'Removal defense',
      'Bond hearings',
      'Asylum applications',
      'Cancellation of removal',
      'Appeals',
      'Stay of removal',
    ],
  },
  {
    name: 'Waivers',
    description: 'Assistance with various immigration waivers and appeals.',
    icon: DocumentTextIcon,
    path: '/services/waivers',
    details: [
      'Unlawful presence waivers',
      'Criminal waivers',
      'Fraud waivers',
      'Hardship waivers',
      'Waiver applications',
      'Appeal support',
    ],
  },
  {
    name: 'Appeals',
    description: 'Expert handling of immigration appeals and motions.',
    icon: ArrowPathIcon,
    path: '/services/appeals',
    details: [
      'BIA appeals',
      'Federal court appeals',
      'Motion to reopen',
      'Motion to reconsider',
      'Administrative appeals',
      'Judicial review',
    ],
  },
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive immigration services tailored to your needs. Click on any service to learn more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-x-3">
                  <service.icon
                    className="h-8 w-8 flex-none text-jcas-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold leading-8 text-jcas-dark">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
                <ul role="list" className="mt-6 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-sm leading-6 text-gray-600">
                      • {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-sm font-semibold text-jcas-primary">
                  Learn more <span aria-hidden="true" className="ml-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 