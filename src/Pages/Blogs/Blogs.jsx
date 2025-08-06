import React from 'react';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import usePageMeta from '../../hooks/usePageMeta';
import './Blogs.css';


const Blogs = () => {
  usePageMeta({
    title: 'Blogs | Tech Zenon',
    description: 'Read our latest blogs about SEO, AI, website development, and more.',
  });

  const truncateWords = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  const blogs = [
    {
      id: 1,
      title: 'How to Configure WordPress Integration in SEO.AI',
      date: 'July 6, 2025',
      image: '/images/blogcard-1.jpg',
      description:
        'Integrating WordPress with SEO.AI is an excellent way to enhance your content creation and optimization workflow. SEO.AI is a powerful AI-driven tool designed to help marketers, bloggers, and website owners create SEO-friendly content efficiently.',
      link:'/blogs/blog1',
    },
    {
      id: 2,
      title: 'How to Build the PERFECT Website Using AI',
      date: 'July 7, 2025',
      image: '/images/blogcard-2.jpg',
      description:
        'Building a website used to be a complex and time-consuming process, requiring expertise in coding, design, and user experience. However, with the rise of Artificial Intelligence (AI), creating a professional, efficient, and visually appealing website has become accessible to everyone—even if you don’t have a technical background. In this blog, we’ll explore how you can leverage AI tools and technologies to build the perfect website quickly and effectively.',
      link:'/blogs/blog2',
    },
  ];

  return (
    <>
      <InnerBanner/>
      <div className="blog-page-1">
        <div className="blog-list-1">
          {blogs.map((blog) => (
            <div className="blog-card-1" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image-1" />
              <div className="blog-content-1">
                <h2><a href={blog.link}>{blog.title}</a></h2>
                <p className="blog-date-1">{blog.date}</p>
                <p className="blog-description-1">{truncateWords(blog.description, 20)}</p>
                <button className="read-more-2"><a href={blog.link} >Read More</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
