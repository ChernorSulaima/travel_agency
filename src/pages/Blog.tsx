import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getImmigrationNews } from '../services/newsService';
import type { NewsArticle } from '../services/newsService';
import Testimonials from '../components/Testimonials';

export default function Blog() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getImmigrationNews();
        setNews(articles);
        if (articles && articles.length > 0 && articles[0]) {
          setSelectedArticle(articles[0]); // Show first article by default
        }
      } catch (err) {
        setError('Failed to load immigration news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-jcas-light">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-jcas-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-jcas-light">
        <div className="text-center py-12 text-gray-600">
          {error}
        </div>
      </div>
    );
  }

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

      {/* News Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="lg:flex lg:gap-x-12">
          {/* Article List Sidebar */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-jcas-dark mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {news.map((article, index) => (
                <motion.article
                  key={article.url}
                  className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
                    selectedArticle?.url === article.url
                      ? 'bg-jcas-accent'
                      : 'hover:bg-jcas-light'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedArticle(article)}
                >
                  <h3 className="font-semibold text-jcas-dark mb-2">{article.title}</h3>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={new Date(article.publishedAt).toISOString()} className="text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </time>
                    <span className="text-jcas-primary">{article.source.name}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Selected Article Content */}
          {selectedArticle && (
            <motion.div
              className="lg:w-2/3 mt-12 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={selectedArticle.url}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-jcas-dark mb-6">{selectedArticle.title}</h2>
                {selectedArticle.urlToImage && (
                  <img
                    src={selectedArticle.urlToImage}
                    alt={selectedArticle.title}
                    className="w-full h-[400px] object-cover rounded-2xl mb-8"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                )}
                <div className="flex items-center gap-x-4 text-sm mb-8">
                  <time dateTime={new Date(selectedArticle.publishedAt).toISOString()} className="text-gray-500">
                    {new Date(selectedArticle.publishedAt).toLocaleDateString()}
                  </time>
                  <span className="text-jcas-primary">{selectedArticle.source.name}</span>
                </div>
                <p className="text-gray-600 mb-6">{selectedArticle.description}</p>
                {selectedArticle.url && (
                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-jcas-primary hover:text-jcas-dark font-semibold"
                  >
                    Read full article on {selectedArticle.source.name} →
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
} 