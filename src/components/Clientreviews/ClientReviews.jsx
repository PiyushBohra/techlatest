import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ClientReviews.css';

const reviews = [
   {
    platform: 'Google',
    logo: '/images/client-review1.png',
    stars: 5,
    text: 'As a holistic therapist based in Valencia,Spain, I was going through a moment of doubt and disappointment with my previous IT providers. That’s when I received Bittu’s introduction email – and honestly, it felt like perfect timing.',
    name: 'Therapist in Valencia,Spain',
    title: 'Designation: Founder at Jessica Mangue Spain',
    photo: '/images/profile.png',
  },
  {
    platform: 'Google',
    logo: '/images/client-review1.png',
    stars: 5,
    text: 'Tech Zenon IT Solutions team, has been really outstanding. They created our website and SEO. The team is really helpful and efficient. I highly recommend them.',
    name: 'Olatunde Hameed',
    title: 'Designation: CEO, Logistics',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Google',
    logo: '/images/trust-review1.png',
    stars: 5,
    text: 'His team was good about iterating on improvements after we had the big picture set up. I also appreciate that they listened to my concerns about my each products – this was important to get our brand looking great. I would definitely recommend Tech Zenon!',
    name: 'Jimmy',
    title: 'Designation: CEO, E-Commerce',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Google',
    logo: '/images/client-review1.png',
    stars: 5,
    text: 'It been a real pleasure working with Bittu. Communication is always speedy, friendly and helpful and we have achieved great SEO results. I feel like they really understand my business and how to help grow it. Would highly recommend!',
    name: 'Vikas Singh ',
    title: 'Designation: Founder, Cleaning Website',
    photo: '/images/client-review1.png',
  },
  {
    platform: 'Clutch',
    logo: '/images/client-review1.png',
    stars: 5,
    text: 'Great service and professional. Their SEO work is top notch and will have your website ranking in no time at all! They know all the tricks to make sure your website stays in the top results. It does not matter if you have a brand new website or an existing one....',
    name: 'Sujit Kumar',
    title: 'Designation: Managing Partner',
    photo: '/images/client-review1.png',
  },
  
];

const ClientReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>Client Reviews</h2>
        <p>
          Our Best Rewards Are Our Client's Feedback And Positive Reviews Which Keeps Our Team Motivated
        </p>
      </div>
      <Slider {...settings} className="reviews-slider">
        {reviews.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">
              {'★'.repeat(review.stars)}
            </div>
            <img src={review.logo} alt={review.platform} className="review-logo" style={{marginLeft:'10px',width:'80px',height:'auto'}}/>
            <p className="review-text" style={{color:'#000'}}>{review.text}</p>
            <div className="review-user">
              {/* {review.photo && <img src={review.photo} alt={review.name} />} */}
              <div>
                <span className="reviewname">{review.name}</span>
                <p>{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientReviews;
