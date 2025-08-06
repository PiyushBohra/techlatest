import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./testimonials.css";

const testimonialsData = [

  {
    text: "The team of Tech Zenon is fantastic. They have significantly increased the organic traffic to and interaction on our business domain. Tech Zenon team work so hard to grow your business and rev local makes it easier for people to locate you. appreciate that they exclusively work with small businesses.",
    name: "AL Bafageeh",
    title: "CEO, E-Commerce",
    img: "/images/client-testi2.png",
    videoId: "WhDwJnecbrA",
    backimg: '/images/testimonials-back.png'
  },
    {
    text: "I would like to say a very big thank you to you guys of Tag Zena. Thank you so much once again for the great work you did on my website. To be sincere you under promised us and you over delivered. Your design was just mind-blowing and this video is to recommend you to any company or individual looking for a website designer. To get in touch with you and your team for your work is just incredible. Thank you once again from JBD Freight.",
    name: "Kojo",
    title: "CEO,Freight Services",
    img: "/images/client-testi3.jpg",
    videoId: "AASyu7MyFJw",
    backimg: '/images/testimonials-back.png'
  },
    {
    text: "TechZenon exceeded our expectations with their exceptional website development. Their team’s innovative approach and attention to detail transformed our online presence. The project was completed on time, and their support has been outstanding. Highly recommend them for any tech needs.",
    name: "Shahzad Azmi",
    title: "CEO, HR Consultants Company",
    img: "/images/client-testi.png",
    videoId: "ZQDYJUsEhvE",
    backimg: '/images/testimonials-back.png'
  },


];

const Testimonials = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const sectionRef = useRef();
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(0);
        } else {
          setVisibleIndex(null);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_, next) => setVisibleIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <h2>Clients' Contentment Is All We Strive For</h2>
      <p>
        Appreciations from 400+ clients enabled us to record top ratings & become a top mobile app development company.
      </p>

      <div className="video-client">
        <Slider {...settings}>
  {testimonialsData.map((item, index) => (
    <div
      key={index}
      className="testimonial-card"
      ref={(el) => (videoRefs.current[index] = el)}
    >
      <div className="testimonial-content">
        <img src="/images/quote.png" alt="quote" />
        <p>{item.text}</p>
        <div className="user-info">
          <img src={item.img} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <span>{item.title}</span>
          </div>
        </div>
      </div>

      
      <div className="testimonial-video-wrapper">
        <div className="phone-frame">
          
          {visibleIndex === index && (
            <iframe
              className="client-testi"
              src={`https://www.youtube.com/embed/${item.videoId}?mute=0&autoplay=0&controls=0`}
              title={`YouTube video of ${item.name}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}

          
          <img src={item.backimg} alt="Mobile Frame" className="mobile-frame" />
        </div>
      </div>
      
    </div>
  ))}
</Slider>
      </div>
    </section>
  );
};

export default Testimonials;
