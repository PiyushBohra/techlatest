import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '/public/images/image1.jpg';
import img2 from '/public/images/image2.jpg';
import img3 from '/public/images/image3.jpg';


const CustomSoftwareCarousel = () => {
  const slides = [
    {
      title: 'Bespoke Software Development',
      img: img1,
      desc: '',
    },
    {
      title: 'End-To-End Software Development',
      img: img2,
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
      title: 'Legacy Software Modernization',
      img: img3,
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
    },
    {
      title: 'Cloud Integration Services',
      img: img1,
      desc: 'Seamlessly integrate your legacy systems with modern cloud platforms.',
    },
    {
      title: 'API Development & Integration',
      img: img1,
      desc: 'Build robust APIs to enhance interconnectivity across platforms.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', color: '#fff', padding: '40px', fontFamily: 'sans-serif', maxWidth:'1200px',width:'100%',margin:'auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>
        Our Custom Software Development Services
      </h2>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              padding: '0 8px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                overflow: 'hidden',
                borderRadius: '12px',
                backgroundImage: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                }}
              >
                <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{slide.title}</h3>
                {slide.desc && <p style={{ fontSize: '15px', marginTop: '8px' }}>{slide.desc}</p>}
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom right, rgba(59,130,246,0.6), rgba(0,0,0,0.4))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="hover-gradient"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .hover-gradient:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default CustomSoftwareCarousel;
