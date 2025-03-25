import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import datingevent from "../assets/datingevent.jpg";

interface BlogContent {
  content_title: string;
  text: string;
  image: string;
}
interface BlogProps {
  title: string;
  blogimage: string;
}

const Blog: React.FC<BlogProps> = ({ title, blogimage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;
  const posts: BlogContent[] = [
    {
      content_title: "Tanışma Etkinliği",
      text: "Denizli Coders olarak ilk etkinliğimi düzenledik,Mert bey engin bilgilerini bize aktardı. ",
      image: datingevent,
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the second blog post. It contains even more interesting information.",
      image: "image2.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the third blog post. It contains the most interesting information.",
      image: "image3.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the fourth blog post. It contains even more interesting information.",
      image: "image4.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the fifth blog post. It contains even more interesting information.",
      image: "image5.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the sixth blog post. It contains even more interesting information.",
      image: "image6.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the seventh blog post. It contains even more interesting information.",
      image: "image7.jpg",
    },
    {
      content_title: "Lorem Ipsum",
      text: "This is the eighth blog post. It contains even more interesting information.",
      image: "image8.jpg",
    },
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const changePage = (page: number) => {
    setCurrentPage(page);
  }

  const startIndex = currentPage * postsPerPage;
  const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4 
  w-full h-auto sm:w-[1440px] sm:h-[891px] 
  top-0 left-0 sm:top-[-2520px] sm:left-[8052px]">
      <motion.img
        src={blogimage}
        alt="Blogimages"
        className="w-[350px] h-[350px] -top-[100px] left-[1003px] mx-auto md:absolute md:right-0 md:top-580 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="w-[127px] h-[77px] top-[100px] left-[657px] text-4xl md:text-4xl font-bold text-[64px] line-height:1 text-blue-900 my-8 text-center "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      <AnimatePresence mode="wait">
        <motion.section
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {selectedPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-[#D9D9D9] w-full max-w-[433px] h-[450px] rounded-[20px] flex flex-col items-center shadow-lg relative overflow-hidden object-cover"
            >
              <div
                className="w-full h-full bg-cover rounded-t-[20px]"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>

              <div className="bg-white w-full h-[156px] flex flex-col items-center justify-center text-center p-4 rounded-b-[20px]">
                <h2 className="text-2xl md:text-2xl font-bold text-[#002566] mb-2">
                  {post.content_title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  {post.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </AnimatePresence>

      <motion.div
        className="w-[240px] min-h-[36px] flex items-center justify-center space-x-2 mt-6 bg-[#D9D9D9] rounded-[20px] p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => changePage(index)}
            className={`w-5 h-5 flex items-center justify-center rounded-full transition-all ${
              currentPage === index ? "bg-white" : "bg-gray-200"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;