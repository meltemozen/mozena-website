import React, { useState } from 'react';

interface BlogCardProps {
  title: string;
  tags: string[];
  content: string;
  onClick: () => void;
}

interface BlogSectionProps {
  heading: string;
  cards: {
    title: string;
    tags: string[];
    content: string;
  }[];
}

const BlogCard: React.FC<BlogCardProps> = ({ title, tags, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden w-full flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-4 text-gray-800">{title}</h3>
        <div className="flex-grow mb-2 sm:mb-4">
          <div className="bg-gray-100 h-24 sm:h-32 md:h-40 rounded-md transition-colors duration-300 hover:bg-gray-200"></div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${
                index % 2 === 0
                  ? "bg-gray-100 text-gray-700"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC<BlogSectionProps> = ({ heading, cards }) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="bg-blue-600 py-8 sm:py-12 md:py-16 w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">{heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <BlogCard
              key={index}
              title={card.title}
              tags={card.tags}
              content={card.content}
              onClick={() => setActiveModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-xs sm:max-w-md md:max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{cards[activeModal].title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-100 h-32 sm:h-40 md:h-48 rounded-md mb-4" />
              <div className="text-xs sm:text-sm md:text-base text-gray-700 space-y-2">
                <p>{cards[activeModal].content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-xs sm:text-sm md:text-base mb-2">Etiketler:</h3>
                <div className="flex flex-wrap gap-2">
                  {cards[activeModal].tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs sm:text-sm rounded-full ${
                        index % 2 === 0
                          ? "bg-gray-100 text-gray-700"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Örnek kullanım
const blogData = {
  heading: "Blog",
  cards: [
    {
      title: "Just Get The Premium Version Now!",
      tags: ["Lorem ipsum", "UX", "ADD"],
      content: "Bu blog yazısında premium versiyonun neden önemli olduğunu açıklıyoruz..."
    },
    {
      title: "Responsive Design Trends for 2025",
      tags: ["Design", "UI", "Trends"],
      content: "2025'te öne çıkacak duyarlı tasarım trendlerine göz atıyoruz..."
    },
    {
      title: "Speed Up Your Workflow",
      tags: ["Productivity", "Tools"],
      content: "Günlük işlerinizi hızlandıracak ipuçları ve araçları derledik."
    },
  
  ]
};

const Blog = () => {
  return <BlogSection heading={blogData.heading} cards={blogData.cards} />;
};

export default Blog;