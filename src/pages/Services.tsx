import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import {
  UserGroupIcon,
  DocumentCheckIcon,
  ScaleIcon,
  GlobeAmericasIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Visa Applications',
    description: 'Expert assistance with all types of visa applications and renewals.',
    icon: DocumentCheckIcon,
    details: [
      'Family-based visas',
      'Employment-based visas',
      'Student visas',
      'Tourist visas',
      'Business visas',
      'Fiancé(e) visas',
    ],
    longDescription: `Our experienced team provides comprehensive assistance with all types of visa applications. We handle the entire process from initial consultation to final approval, ensuring all documentation is properly prepared and submitted. Our expertise covers family-based visas, employment visas, student visas, and more.`,
  },
  {
    name: 'Green Card Assistance',
    description: 'Comprehensive support for permanent residency applications.',
    icon: UserGroupIcon,
    details: [
      'Family-based green cards',
      'Employment-based green cards',
      'Marriage-based green cards',
      'Diversity visa lottery',
      'Adjustment of status',
      'Consular processing',
    ],
    longDescription: `We guide you through every step of the green card application process, whether you're applying through family sponsorship, employment, or other eligible categories. Our team ensures accurate documentation, timely filing, and proper representation throughout the process.`,
  },
  {
    name: 'U.S. Citizenship',
    description: 'Guidance through the naturalization process.',
    icon: GlobeAmericasIcon,
    details: [
      'Naturalization applications',
      'Citizenship eligibility assessment',
      'Interview preparation',
      'Citizenship test preparation',
      'Document review',
      'Application support',
    ],
    longDescription: `Our citizenship services help you navigate the naturalization process with confidence. We assess your eligibility, prepare your application, and provide comprehensive support including interview preparation and citizenship test guidance.`,
  },
  {
    name: 'Deportation Defense',
    description: 'Strong legal representation in removal proceedings.',
    icon: ScaleIcon,
    details: [
      'Removal defense',
      'Bond hearings',
      'Asylum applications',
      'Cancellation of removal',
      'Appeals',
      'Stay of removal',
    ],
    longDescription: `We provide aggressive defense against deportation and removal proceedings. Our experienced attorneys will fight to protect your rights and explore all available options to help you remain in the United States legally.`,
  },
  {
    name: 'Waivers',
    description: 'Assistance with various immigration waivers and appeals.',
    icon: DocumentTextIcon,
    details: [
      'Unlawful presence waivers',
      'Criminal waivers',
      'Fraud waivers',
      'Hardship waivers',
      'Waiver applications',
      'Appeal support',
    ],
    longDescription: `We help you navigate complex waiver applications, including unlawful presence waivers, criminal waivers, and hardship waivers. Our team will build a strong case to support your waiver application and increase your chances of approval.`,
  },
  {
    name: 'Appeals',
    description: 'Expert handling of immigration appeals and motions.',
    icon: ArrowPathIcon,
    details: [
      'BIA appeals',
      'Federal court appeals',
      'Motion to reopen',
      'Motion to reconsider',
      'Administrative appeals',
      'Judicial review',
    ],
    longDescription: `When faced with an unfavorable decision, our experienced attorneys can help you navigate the appeals process. We handle appeals at all levels, from the Board of Immigration Appeals to federal courts.`,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-x-3">
                  <service.icon className="h-8 w-8 flex-none text-jcas-primary" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-jcas-dark">{service.name}</h2>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.details.slice(0, 3).map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-sm font-semibold text-jcas-primary">
                  Click to learn more
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog
        as="div"
        className="relative z-50"
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-2xl rounded-2xl bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  {selectedService && (
                    <>
                      <selectedService.icon
                        className="h-8 w-8 flex-none text-jcas-primary"
                        aria-hidden="true"
                      />
                      <Dialog.Title className="text-2xl font-semibold text-jcas-dark">
                        {selectedService.name}
                      </Dialog.Title>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setSelectedService(null)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              {selectedService && (
                <div className="mt-6">
                  <p className="text-gray-600">{selectedService.longDescription}</p>
                  <h3 className="mt-8 text-lg font-semibold text-jcas-dark">What We Offer:</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-4">
                    {selectedService.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-jcas-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      className="rounded-full bg-jcas-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
                      onClick={() => setSelectedService(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
} 