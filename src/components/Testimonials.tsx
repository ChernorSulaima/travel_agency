import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type Testimony = {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  date: string;
};

type TestimonyForm = {
  name: string;
  role: string;
  message: string;
  rating: number;
};

// This would typically come from your backend
const initialTestimonials: Testimony[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Green Card Recipient',
    message: 'JCAS helped me navigate the complex immigration process with ease. Their expertise and dedication made my dream of living in the US a reality.',
    rating: 5,
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Miguel Rodriguez',
    role: 'Citizenship Applicant',
    message: 'The team at JCAS was incredibly supportive throughout my citizenship application. They made a complicated process feel manageable.',
    rating: 5,
    date: '2024-03-10'
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimony[]>(initialTestimonials);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonyForm>();

  const onSubmit = (data: TestimonyForm) => {
    const newTestimony: Testimony = {
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials([newTestimony, ...testimonials]);
    setIsFormOpen(false);
    reset();
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Read what our clients say about their experience with JCAS Global Immigration Services
          </p>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="mt-8 rounded-full bg-jcas-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
          >
            Share Your Story
          </button>
        </div>

        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 mx-auto max-w-xl bg-white p-6 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-jcas-primary focus:ring-jcas-primary"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Service Received
                </label>
                <input
                  type="text"
                  {...register('role', { required: 'Service is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-jcas-primary focus:ring-jcas-primary"
                  placeholder="e.g., Visa Application, Green Card, etc."
                />
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Story
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-jcas-primary focus:ring-jcas-primary"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  {...register('rating', {
                    required: 'Rating is required',
                    min: { value: 1, message: 'Rating must be at least 1' },
                    max: { value: 5, message: 'Rating must be at most 5' }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-jcas-primary focus:ring-jcas-primary"
                  min="1"
                  max="5"
                />
                {errors.rating && (
                  <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-jcas-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimony, index) => (
            <motion.article
              key={testimony.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <div className="text-lg font-semibold leading-6 text-jcas-dark">
                    {testimony.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimony.date}
                  </div>
                </div>
                <div className="mt-1 text-sm text-jcas-primary">
                  {testimony.role}
                </div>
                <div className="mt-4 text-sm leading-6 text-gray-600">
                  {testimony.message}
                </div>
              </div>
              <div className="mt-6 flex items-center">
                {[...Array(testimony.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.934l-6.18 3.25 1.18-6.88L.5 7.934l6.9-1 3.1-6.28 3.1 6.28 6.9 1-4.5 4.37 1.18 6.88z"
                    />
                  </svg>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 