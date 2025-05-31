import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { NewsArticle } from '../services/newsService';

interface ArticleModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {article.urlToImage && (
                  <div className="relative h-64 w-full mb-6">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="h-full w-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                )}

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-jcas-dark mb-4"
                >
                  {article.title}
                </Dialog.Title>

                <div className="flex items-center gap-x-4 text-sm mb-6">
                  <time dateTime={new Date(article.publishedAt).toISOString()} className="text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                  <span className="text-jcas-primary font-semibold">{article.source.name}</span>
                </div>

                <div className="mt-2">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {article.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-md bg-jcas-primary px-4 py-2 text-sm font-semibold text-white hover:bg-jcas-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-jcas-primary focus-visible:ring-offset-2 transition-colors duration-200"
                  >
                    Read Full Article
                  </a>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-jcas-dark font-medium"
                    onClick={onClose}
                  >
                    Close Preview
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 