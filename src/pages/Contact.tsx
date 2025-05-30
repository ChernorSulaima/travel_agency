import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    name: 'Email',
    value: 'info@jcasglobal.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Phone',
    value: '(555) 123-4567',
    icon: PhoneIcon,
  },
  {
    name: 'Office',
    value: '123 Immigration Ave, Suite 100, City, State 12345',
    icon: MapPinIcon,
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Here you would typically send the form data to your backend
    console.log(data);
    alert('Thank you for your message. We will get back to you soon!');
    reset();
  };

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
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our team of immigration experts. We're here to help you achieve your
              immigration goals.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            className="mx-auto max-w-xl lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark">Get in Touch</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Have questions about your immigration case? Our experienced team is ready to help.
              Contact us today to schedule a consultation.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-6 text-jcas-primary" aria-hidden="true" />
                  </dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-jcas-dark">Office Hours</h3>
              <dl className="mt-4 space-y-1 text-sm leading-6 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="w-24">Monday-Friday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="w-24">Saturday</dt>
                  <dd>10:00 AM - 2:00 PM</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="w-24">Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="mx-auto max-w-xl lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-jcas-dark"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register('firstName', { required: true })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">First name is required</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6 text-jcas-dark"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register('lastName', { required: true })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">Last name is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-jcas-dark"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">Valid email is required</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-jcas-dark"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">Phone number is required</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-jcas-dark"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    {...register('subject', { required: true })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">Subject is required</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-jcas-dark"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-jcas-primary sm:text-sm sm:leading-6"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">Message is required</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-jcas-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 