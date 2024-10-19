import React from 'react';
import { useRouter } from 'next/navigation';

const Discovery = () => {
  const router = useRouter();

  const articles = [
    {
      title: "How to Protect Your Wallet",
      imageUrl: "https://via.placeholder.com/150", // Placeholder image
      link: "/articles/how-to-protect-your-wallet"
    },
    {
      title: "Our Security Model",
      imageUrl: "https://via.placeholder.com/150", // Placeholder image
      link: "/articles/our-security-model"
    },
    {
      title: "How to Use the Order Book",
      imageUrl: "https://via.placeholder.com/150", // Placeholder image
      link: "/articles/how-to-use-order-book"
    },
  ];

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(article.link)}
            className="cursor-pointer border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;