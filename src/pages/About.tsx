import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Jessie C.A. Samura, Esq.',
    role: 'Founder & Managing Attorney',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'With over a decade of experience in immigration law, Jessie leads our team with expertise and compassion.',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Immigration Attorney',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Specializing in family-based immigration and naturalization cases with 5+ years of experience.',
  },
  {
    name: 'David Chen',
    role: 'Immigration Attorney',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Expert in business immigration, employment visas, and complex immigration matters.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Paralegal',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Dedicated to assisting clients through every step of their immigration journey.',
  },
  {
    name: 'Michael Lee',
    role: 'Case Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Ensures smooth case processing and excellent client communication.',
  },
  {
    name: 'Lisa Patel',
    role: 'Client Relations Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    bio: 'Dedicated to providing exceptional client service and support.',
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-jcas-light py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-jcas-dark sm:text-6xl">About JCAS</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              JCAS Global Immigration Services LLC is dedicated to helping individuals and families
              achieve their immigration goals with expert legal guidance and personalized support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
                  Meet Our Founder
                </h2>
                <h3 className="mt-2 text-lg font-semibold text-jcas-primary">
                  Jessie C.A. Samura, Esq.
                </h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  With years of experience in immigration law, Jessie C.A. Samura has helped countless
                  individuals and families navigate the complex U.S. immigration system. Her passion
                  for immigration law stems from a deep understanding of the challenges immigrants face
                  and a commitment to helping them achieve their American dream.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative">
                    <dt className="font-semibold text-jcas-dark">Education</dt>
                    <dd className="mt-2">
                      Juris Doctor with focus on Immigration Law
                      <br />
                      Licensed to practice in multiple states
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="font-semibold text-jcas-dark">Experience</dt>
                    <dd className="mt-2">
                      Over a decade of experience in immigration law
                      <br />
                      Successful track record in complex immigration cases
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="font-semibold text-jcas-dark">Professional Memberships</dt>
                    <dd className="mt-2">
                      American Immigration Lawyers Association (AILA)
                      <br />
                      State Bar Associations
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-full max-w-none rounded-2xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated team of legal professionals is committed to providing exceptional service
              and expert guidance throughout your immigration journey.
            </p>
          </div>
          <motion.ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.slice(1).map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl bg-gray-200">
                  <img
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    src={person.image}
                    alt={person.name}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-jcas-dark">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-jcas-primary">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-jcas-light py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At JCAS Global Immigration Services LLC, our mission is to provide exceptional legal
              representation while treating each client with the respect, attention, and dedication
              they deserve. We believe in making the immigration process as smooth and stress-free
              as possible while achieving the best possible outcomes for our clients.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="rounded-full bg-jcas-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 