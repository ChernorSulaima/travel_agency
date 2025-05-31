import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getImmigrationNews } from '../services/newsService';
import type { NewsArticle } from '../services/newsService';
import ArticleModal from './ArticleModal';

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await getImmigrationNews();
        setNews(articles);
      } catch (err) {
        setError('Failed to load immigration news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    // Refresh news every hour
    const interval = setInterval(fetchNews, 3600000);
    return () => clearInterval(interval);
  }, []);

  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-jcas-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-gray-600">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-jcas-dark sm:text-4xl">
            Latest Immigration News
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay informed about the latest updates in immigration policies and news
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article, index) => (
            <motion.article
              key={article.url}
              className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleArticleClick(article)}
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime={new Date(article.publishedAt).toISOString()} className="text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                  <span className="text-jcas-primary">{article.source.name}</span>
                </div>
                <h3 className="text-lg font-semibold text-jcas-dark mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {article.description}
                </p>
                <span className="text-jcas-primary hover:text-jcas-dark font-semibold">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
} 