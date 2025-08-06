import React from 'react';
import './Portfolio.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaLongArrowAltUp } from "react-icons/fa";

// Portfolio data with multiple images per category
const portfolioData = [
  {
    title: 'Website Designs',
    images: [
      '/images/website-1.png',
      '/images/website-2.png',
      '/images/website-3.png',
      '/images/website-4.png',
      '/images/website-5.png',
      '/images/website-6.png',
      '/images/website-7.png',
      '/images/website-8.png',
      '/images/website-9.png',
      '/images/website-10.png',
      '/images/website-11.png',
      '/images/website-12.png',
    ],
    link: '/website-portfolio',
  },
  {
    title: 'App Development',
    images: [
      '/images/app-1.jpg',
      '/images/app-2.jpg',
      '/images/app-3.jpg'
    ],
    link: '/application-portfolio',
  },
  {
    title: 'SEO',
    images: [
      '/images/seo-2.jpg',
      '/images/seo-5.jpg',
      '/images/seo-4.jpg'
    ],
    link: '/seo-portfolio',
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>Our Portfolio</h2>
        <p>
          Our Comprehensive Solutions Have Supported Manufacturing, Automotive, FMCG, and Banking Sectors in Meeting Their Business and Shipping Requirements.
        </p>
      </div>
      <div className="portfolio-cards" style={{ maxWidth: '1200px', width: '100%', margin: 'auto' }}>
        {portfolioData.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{item.title}</h3>
            <a href={item.link}>
              <div className="portfolio-image-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {item.images.map((img, i) => (
                    <SwiperSlide key={i} className="portfolio-slide">
                      <img src={img} alt={`${item.title} ${i + 1}`} />
                      
                    </SwiperSlide>
                    
                  ))}
                </Swiper>
                <div className="arrow-icon">
                        <FaLongArrowAltUp />
                      </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
