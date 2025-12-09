import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpenIcon, SearchIcon, XIcon } from 'lucide-react';
import { healthArticles } from '../../utils/mockData';
const HealthArticles: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const currentLanguage = i18n.language;
  // Get all unique categories
  const categories = Array.from(new Set(healthArticles.map(article => article.category)));
  // Filter articles based on search and category
  const filteredArticles = healthArticles.filter(article => {
    const title = currentLanguage === 'od' ? article.title_od : currentLanguage === 'hi' ? article.title_hi : article.title;
    const summary = currentLanguage === 'od' ? article.summary_od : currentLanguage === 'hi' ? article.summary_hi : article.summary;
    const matchesSearch = searchTerm === '' || title.toLowerCase().includes(searchTerm.toLowerCase()) || summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const closeArticle = () => {
    setSelectedArticle(null);
  };
  const getLocalizedContent = (article: any) => {
    if (currentLanguage === 'od') {
      return {
        title: article.title_od,
        summary: article.summary_od,
        content: article.content_od
      };
    } else if (currentLanguage === 'hi') {
      return {
        title: article.title_hi,
        summary: article.summary_hi,
        content: article.content_hi
      };
    } else {
      return {
        title: article.title,
        summary: article.summary,
        content: article.content
      };
    }
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-indigo-100 text-indigo-800 p-4 flex items-center">
        <BookOpenIcon className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">Health Articles</h3>
      </div>
      <div className="p-4">
        {selectedArticle ? <div className="article-detail">
            <button onClick={closeArticle} className="mb-4 flex items-center text-sm text-indigo-600 hover:text-indigo-800">
              <XIcon className="h-4 w-4 mr-1" /> Back to articles
            </button>
            <img src={selectedArticle.image} alt={getLocalizedContent(selectedArticle).title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="mb-2">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                {selectedArticle.category}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-3">
              {getLocalizedContent(selectedArticle).title}
            </h2>
            <p className="text-gray-600 italic mb-6">
              {getLocalizedContent(selectedArticle).summary}
            </p>
            <div className="space-y-4">
              {getLocalizedContent(selectedArticle).content.map((paragraph: string, idx: number) => <p key={idx} className="text-gray-700">
                    {paragraph}
                  </p>)}
            </div>
          </div> : <>
            <div className="mb-4">
              <div className="relative">
                <input type="text" placeholder="Search articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              <button onClick={() => setSelectedCategory(null)} className={`text-xs px-3 py-1 rounded-full ${selectedCategory === null ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                All
              </button>
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`text-xs px-3 py-1 rounded-full ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  {category}
                </button>)}
            </div>
            {filteredArticles.length === 0 ? <div className="text-center py-8 text-gray-500">
                <BookOpenIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <p>No articles found matching your search</p>
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.map(article => {
            const localizedContent = getLocalizedContent(article);
            return <div key={article.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleArticleClick(article)}>
                      <img src={article.image} alt={localizedContent.title} className="w-full h-36 object-cover" />
                      <div className="p-3">
                        <div className="mb-2">
                          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                        <h4 className="font-medium mb-1 line-clamp-2">
                          {localizedContent.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {localizedContent.summary}
                        </p>
                      </div>
                    </div>;
          })}
              </div>}
          </>}
      </div>
    </div>;
};
export default HealthArticles;