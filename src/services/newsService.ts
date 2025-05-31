const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

export type NewsArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export async function getImmigrationNews(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      `${NEWS_API_BASE_URL}/everything?` +
      'q=(immigration OR visa OR "green card" OR citizenship)' +
      '&language=en' +
      '&sortBy=publishedAt' +
      '&pageSize=6' +
      `&apiKey=${NEWS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching immigration news:', error);
    return [];
  }
} 