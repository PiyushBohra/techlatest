import React from "react";
import "./Websiteportfolio.css";
import usePageMeta from '../../hooks/usePageMeta';

const projects = [
  
  //  {
  //   id: 1,
  //   image: "/images/leinster.jpg",
  //   alt: "Dog",
  //   link: " https://leinstercanines.ie/"
  // },
   {
    id: 2,
    image: "/images/website-15.png",
    alt: "Sports",
    link: "https://ashishnehracricketacademy.in/"
  },
 {
    id: 3,
    image: "/images/website-16.png",
    alt: "Health Care",
    link: "https://greenlinehealthcare.co.uk/"
  },
  {
    id: 4,
    image: "/images/amazing.png",
    alt: "Travel & Tourism",
    link: "https://amazingarctic.com/"

  },
   {
    id: 5,
    image: "/images/tilkin.png",
    alt: "Securities Industry",
    link: "https://tilkingroup.com/"

  },
  {
    id: 6,
    image: "/images/jbd.png",
    alt: "Freight Services",
    link: "https://jbdfreight.com/"

  },
 {
    id: 7,
    image: "/images/website-14.png",
    alt: "Education",
    link: "https://indusvalleynoida.in/"
  },
 
  {
    id: 8,
    image: "/images/website-4.png",
    alt: "Dermatography",
    link: "https://thedermatographyclinic.com/"
  },
  {
    id: 9,
    image: "/images/website-5.png",
    alt: "Real Estate Law",
    link: "https://homesandlegal.com/"
  },
  {
    id: 10,
    image: "/images/website-6.png",
    alt: "Electric Bike",
    link: "https://electricbikeuae.com/"
  },
  {
    id: 11,
    image: "/images/website-8.png",
    alt: "Auto Transport",
    link: "https://proconnie.com/"
  },
  {
    id: 12,
    image: "/images/website-9.png",
    alt: "Auto Transport",
    link: "https://royalautoship.com/"
  },
  {
    id: 13,
    image: "/images/website-10.png",
    alt: "E-Commerce",
    link: "https://zorgklomp.nl/"
  },
  {
    id: 14,
    image: "/images/website-11.png",
    alt: "Commercial",
    link: "https://vpgraphic.in/"
  },
  
 
  
   {
    id: 15,
    image: "/images/website-1.png",
    alt: "Education",
    link: "https://adhyayanamacademy.com/"
  },
 
  {
    id: 16,
    image: "/images/website-17.png",
    alt: "Auto Transport",
    link: "https://fastcarship.com/"
  },
  {
    id: 17,
    image: "/images/website-18.png",
    alt: "E-Commerce ",
    link: "https://bali-chains.com/"
  },
  {
    id: 18,
    image: "/images/website-19.png",
    alt: "Commercial",
    link: "https://aspinholding.com/"
  },
  {
    id: 19,
    image: "/images/website-20.png",
    alt: "Auto Transport",
    link: "https://carshipgroup.com/"
  },
  {
    id: 20,
    image: "/images/website-21.png",
    alt: "Education",
    link: "https://nspublicschool.in/"
  },
  {
    id: 21,
    image: "/images/website-22.png",
    alt: "E-Commerce",
    link: "https://vehicle-accessories.net/"
  },
  
  {
    id: 22,
    image: "/images/website-12.png",
    alt: "Logistics",
    link: "https://t-doclogistics.com/"
  },
 {
    id: 23,
    image: "/images/website-13.png",
    alt: "Auto Transport",
    link: "https://stateautoship.com/"
  },
 
];

const Websiteportfolio = () => {
  usePageMeta({
        title: "Website Development & Design Portfolio by Tech Zenon",
        description: "Tech Zenon’s Website Development & Design Portfolio highlights creative, functional, and visually striking projects crafted to elevate your online presence."
      });
  return (
    <div className="portfolio-section">
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <img src={project.image} alt={project.alt} />
            <div className="portfolio-overlay">
              <h3>{project.alt}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
               {project.link.replace(/^https?:\/\//, 'www.').replace(/\/$/, '')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Websiteportfolio;
