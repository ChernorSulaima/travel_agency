import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Understanding the U.S. Immigration Process',
    description: 'A comprehensive guide to navigating the complex U.S. immigration system and its various pathways to legal status.',
    date: 'March 15, 2024',
    category: 'Immigration Guide',
    author: 'Jessie C.A. Samura, Esq.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Recent Changes in Immigration Policy',
    description: 'Stay informed about the latest updates and changes in U.S. immigration policy and how they might affect your case.',
    date: 'March 10, 2024',
    category: 'Policy Updates',
    author: 'Legal Team',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Success Story: From Visa to Citizenship',
    description: 'Read about how one of our clients successfully navigated the path from temporary visa to full U.S. citizenship.',
    date: 'March 5, 2024',
    category: 'Success Stories',
    author: 'Client Relations Team',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Common Immigration Mistakes to Avoid',
    description: 'Learn about the most common mistakes people make during the immigration process and how to avoid them.',
    date: 'February 28, 2024',
    category: 'Tips & Advice',
    author: 'Jessie C.A. Samura, Esq.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1590087986431-72b0f33b8e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Family-Based Immigration: What You Need to Know',
    description: 'A detailed guide to family-based immigration, including eligibility requirements and application processes.',
    date: 'February 20, 2024',
    category: 'Immigration Guide',
    author: 'Legal Team',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Preparing for Your Immigration Interview',
    description: 'Essential tips and guidance on how to prepare for your immigration interview and increase your chances of success.',
    date: 'February 15, 2024',
    category: 'Tips & Advice',
    author: 'Jessie C.A. Samura, Esq.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Blog() {
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
              Immigration Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay informed with the latest immigration news, updates, and expert insights from our
              legal team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-jcas-accent px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-jcas-dark">
                    <Link to={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-jcas-dark">{post.author}</p>
                    <p className="text-gray-600">{post.readTime}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 