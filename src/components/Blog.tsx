<<<<<<< HEAD
import React from 'react';
import { ArrowRight } from 'lucide-react';
=======

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> af5b28026f13fa8a7fda967d86b1a0aa5deb10b8

interface BlogCardProps {
  title: string;
  tags: string[];
}

<<<<<<< HEAD
interface BlogSectionProps {
  heading: string;
  cards: BlogCardProps[];
}

const BlogCard: React.FC<BlogCardProps> = ({ title, tags }) => {
  const handleClick = () => {
    console.log(`Blog tıklandı: ${title}`);
    alert(`"${title}" blog yazısı açılıyor`);
  };
=======
const Blog: React.FC<BlogProps> = ({ title,  posts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;
>>>>>>> af5b28026f13fa8a7fda967d86b1a0aa5deb10b8
 
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:max-w-xs flex flex-col">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">{title}</h3>
        <div className="flex-grow mb-2 sm:mb-4">
          <div className="bg-gray-50 h-24 sm:h-32 rounded-md"></div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Blog yazısını görüntüle"
          >
            <ArrowRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
=======
    <div className="bg-white min-h-screen flex flex-col items-center  ">
     
      

      <motion.h1
        className="w-full px-4 text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 my-4 md:my-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      
      <AnimatePresence mode="wait">
        <motion.section
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full max-w-[1200px] px-4 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {selectedPosts.map((post, index) => (
            <motion.div
>>>>>>> af5b28026f13fa8a7fda967d86b1a0aa5deb10b8
              key={index}
              className={`px-2 sm:px-3 py-1 text-xs rounded-full ${
                index % 2 === 0
                  ? "bg-gray-100"
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
  return (
    <div className="bg-blue-600 py-8 sm:py-12 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">{heading}</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <BlogCard key={index} title={card.title} tags={card.tags} />
          ))}
        </div>
      </div>
    </div>
  );
};

const blogData = {
  heading: "Blog",
  cards: [
    {
      title: "Just Get The Premium Version Now!",
      tags: ["Lorem ipsum", "UX", "ADD"]
    },
    {
      title: "Just Get The Premium Version Now!",
      tags: ["Lorem ipsum", "ADD", "UX"]
    },
    {
      title: "Just Get The Premium Version Now!",
      tags: ["UX", "ADD", "Lorem ipsum"]
    },
   

    
  ]
};

const Blog = () => {
  return (
    <div>
      <BlogSection heading={blogData.heading} cards={blogData.cards} />
    </div>
  );
};

export default Blog;