import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '/public/images/icon.png'
import img2 from '/public/images/icon2.png'
import img3 from '/public/images/au.png'
import img4 from '/public/images/xdj.png'

const RecognitionSlider = () => {
  const sliderRef = useRef(null);

  const recognitions = [
    {
      title: 'Top Mobile App Developers',
      year: '2020',
      img: img1,
    },
    {
      title: 'App Development Company Of The Year',
      year: '2020',
      img: img2,
    },
    {
      title: 'Fastest-Growing Company',
      year: '2025',
      img: img3,
    },
    {
      title: 'Fastest Growing Technology Company',
      year: '2024-2023',
      img: img4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', color: '#fff', padding: '40px', fontFamily: 'sans-serif' ,maxWidth:'1200px',width:'100%',margin:'auto'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '24px' }}>Recognitions Gained For Our Software Development Efforts </h2>
          <p style={{ fontSize: '15px', marginTop: '10px', maxWidth: '600px' }}>
           Our unwavering dedication to innovation and quality has been recognized through numerous industry accolades. These achievements highlight our commitment to providing cutting-edge software solutions that empower businesses to achieve exceptional growth and success.
          </p>
        </div>
        <div>
          <button onClick={() => sliderRef.current.slickPrev()} style={navButtonStyle}>
            &#8592;
          </button>
          <button onClick={() => sliderRef.current.slickNext()} style={navButtonStyle}>
            &#8594;
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {recognitions.map((item, index) => (
          <div key={index} style={{ padding: '0 8px', boxSizing: 'border-box' }}>
            <div
              style={{
                background: '#1a1a1a',
                borderRadius: '12px',
                padding: '20px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <img src={item.img} alt={item.title} style={{ width: '120px', marginBottom: '10px' }} />
              <p style={{ fontSize: '12px', color: '#ccc' }}>{item.year}</p>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const navButtonStyle = {
  background: 'transparent',
  border: '1px solid #fff',
  borderRadius: '50%',
  color: '#fff',
  width: '32px',
  height: '32px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default RecognitionSlider;