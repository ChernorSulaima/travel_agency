import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  DocumentCheckIcon,
  ScaleIcon,
  GlobeAmericasIcon,
  DocumentTextIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import NewsSection from '../components/NewsSection';
import Testimonials from '../components/Testimonials';

const services = [
  {
    name: 'Visa Applications',
    description: 'Expert assistance with all types of visa applications and renewals.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Green Card Assistance',
    description: 'Comprehensive support for permanent residency applications.',
    icon: UserGroupIcon,
  },
  {
    name: 'U.S. Citizenship',
    description: 'Guidance through the naturalization process.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Deportation Defense',
    description: 'Strong legal representation in removal proceedings.',
    icon: ScaleIcon,
  },
  {
    name: 'Waivers',
    description: 'Assistance with various immigration waivers and appeals.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Appeals',
    description: 'Expert handling of immigration appeals and motions.',
    icon: ArrowPathIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-jcas-dark sm:text-6xl">
              Guiding You to the American Dream
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              JCAS Global Immigration Services LLC provides expert legal assistance for all your immigration needs.
              Let us help you navigate the complex immigration system with confidence.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-jcas-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-jcas-dark hover:text-jcas-primary"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive immigration services tailored to your needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="flex flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-jcas-dark">
                    <service.icon className="h-5 w-5 flex-none text-jcas-primary" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        to="/services"
                        className="text-sm font-semibold leading-6 text-jcas-primary hover:text-jcas-dark"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* News Section */}
      <NewsSection />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
} 