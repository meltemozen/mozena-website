import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogContent {
  content_title: string;
  text: string;
  image: string;
}

interface BlogProps {
  title: string;
  blogimage: string;
  posts: BlogContent[];
}

const Blog: React.FC<BlogProps> = ({ title, blogimage, posts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;
 
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const changePage = (page: number) => {
    setCurrentPage(page);
  }
  const startIndex = currentPage * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center  ">
      <motion.img
        src={blogimage}
        alt="Blogimages"
        className="w-[250px] h-[250px] mx-auto md:w-[350px] md:h-[350px] md:absolute md:right-0 md:top-690  md:left-[900px] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      

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
              key={index}
              className="bg-[#D9D9D9] w-full max-w-[300px] mx-auto sm:max-w-[433px] h-[350px] sm:h-[400px] rounded-[20px] flex flex-col shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 } 
              }}
            >
              <div
                className="w-full h-[60%] flex items-center justify-center overflow-hidden rounded-t-[20px]"
              >
                <img 
                  src={post.image}
                  alt={post.content_title}
                  className="w-full h-full object-fill "
                />
              </div>
              <div className="bg-white w-full h-[40%] flex flex-col items-center justify-center text-center p-3 md:p-4 rounded-b-[20px]">
                <h2 className="text-lg md:text-2xl font-bold text-[#002566] mb-1 md:mb-2 line-clamp-1">
                  {post.content_title}
                </h2>
                <p className="text-gray-700 text-xs md:text-base line-clamp-3 overflow-hidden">
                  {post.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </AnimatePresence>
      
      <motion.div
        className="w-[240px] min-h-[36px] flex items-center justify-center space-x-3 mt-6 bg-[#D9D9D9] rounded-[20px] p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => changePage(index)}
            className={`w-6 h-6 flex items-center justify-center rounded-full transition-all ${
              currentPage === index ? "bg-white shadow-sm" : "bg-gray-200"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;