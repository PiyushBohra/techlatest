import React from 'react';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import CounterWeb from '../../components/WebDev/CounterWeb';
import Processgrid from '../../components/WebDev/Processgrid';
import Contactcard from '../../components/Contactcard/contactcard';
import usePageMeta from '../../hooks/usePageMeta';
 
import './websitedev.css';
 
const industries = [
  {
    title: 'Healthcare',
    description: 'Our healthcare web solutions enhance user experience and convenience, ensuring seamless interaction and accessibility to vital services.',
    image: '/images/Healthcare.png',
  },
  {
    title: 'eCommerce',
    description: 'Robust eCommerce platforms that increase conversion, support secure transactions, and deliver a seamless customer shopping experience.',
    image: '/images/Ecommerce-1.png',
  },
  {
    title: 'Logistics',
    description: 'Optimize supply chain and delivery tracking with our smart logistics solutions tailored to improve real-time operations.',
    image: '/images/Logistics.png',
  },
  {
    title: 'Finance',
    description: 'Secure and scalable fintech applications that enable seamless transactions, fraud detection, and real-time analytics.',
    image: '/images/business.png',
  },
  {
    title: 'Education',
    description: 'E-learning platforms that are interactive, user-friendly, and support rich content delivery to enhance online education.',
    image: '/images/Education.png',
  },
  {
    title: 'Travel',
    description: 'Custom travel portals with features like booking engines, itinerary planning, and location-based services.',
    image: '/images/Travel.png',
  },
];
 
const WebsiteDevelopment = () => {
   usePageMeta({
      title: "Website Development & Design Portfolio by Tech Zenon",
      description: "Tech Zenon’s Website Development & Design Portfolio highlights creative, functional, and visually striking projects crafted to elevate your online presence."
    });
  return (
    <div>
      <InnerBanner />
 
      <div style={{ maxWidth: '1200px', margin: 'auto', width: '100%' }} class="blockweb">
        <h2 style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          Why choose us for your design and development?
        </h2>
        <p style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          Your website is the hub for all your marketing efforts across a variety of platforms. It works as the final step to convert the curious and potential lead into a quality customer.
        </p>
        <p style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          At Tech Zenon, our website design will ensure that your website becomes the core of your digital strategy, converting visitors into customers. We tailor each project to keep your customers coming back by providing an attractive and curated design, easy to navigate UI, prompt style, and a great first impression.
        </p>
      </div>
 
 
      <div style={{ maxWidth: '1200px', margin: 'auto', width: '100%',marginTop:'50px' }} class="blockweb">
        <h2 style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>Our Projects on Website Development</h2>
        <p style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>Discover our innovative website solutions with the latest technology and interactive design to enhance lives and elevate user experience.</p>
 
        <div class="blockweb" style={{maxWidth:'1100px',width:'100%',margin:'auto',display:'flex',background:'linear-gradient(45deg, #000000, #377dff)',borderRadius:'30px',padding:'30px'}}>
 
       
                <div style={{maxWidth:'500px',width:'100%',margin:'auto'}}>
 
          <img src='/images/website-23.png' style={{width:'100%'}}/>
        </div>
        <div style={{maxWidth:'500px',width:'100%',margin:'auto'}}>
          <img src='/images/website-24.png' style={{width:'100%'}}/>
        </div>
 
        </div>
      </div>
 
 
 
 
           <div className="services-section">
    <h2 className="section-title" style={{width:'100%',textAlign:'center',color:'#ffffff',marginBottom:'0px'}}>Our AI Chatbot Development Services</h2>
    <div className="services-grid" style={{paddingTop:'0px'}}>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-6.png" alt="vector-6"/>
          <h3>Custom AI Software Development</h3>
        </div>
        <p>We build intelligent applications tailored to your specific requirements. From natural language processing and computer vision to predictive analytics and recommendation engines.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-1.png" alt="vector-1"/>
          <h3>Machine Learning Model Development</h3>
        </div>
        <p>Our data scientists design, train, and deploy ML models that learn from data to make smart decisions using advanced algorithms for classification, forecasting and more.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-2.png" alt="vector-2"/>
          <h3>AI Consulting & Strategy</h3>
        </div>
        <p>Not sure where to start with AI? Our experts help identify opportunities, assess readiness, and create a clear roadmap to align AI with your goals and boost ROI.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-3.png" alt="vector-3"/>
          <h3>Computer Vision</h3>
        </div>
        <p>Our computer vision solutions enable machines to interpret and process visual data. From image recognition and object detection to facial analysis and video analytics.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-4.png" alt="vector-4"/>
          <h3>AI Integration & Deployment</h3>
        </div>
        <p>We ensure that your AI solutions are production-ready. Our team handles model integration, cloud deployment,and continuous learning to keep your AI system adaptive and efficient.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-5.png" alt="vector-5"/>
          <h3>Natural Language Processing</h3>
        </div>
        <p>We create AI systems that understand, interpret, and generate human language. Applications include chatbots, sentiment analysis, automated content moderation, and document summarization.</p>
      </div>
    </div>
    <div className="cta-button-container" style={{textAlign:'center'}}>
      <a href="/contact-us" class="cta-button">Need Free Consultation?</a>
    </div>
  </div>
 
 
 
 
      {/* Expandable Cards Section */}
      <div style={{ maxWidth: '1200px', margin: 'auto', width: '100%' }} class="blockweb">
       <h2 style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          Industries We Serve
        </h2>
        <p style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          As a pioneer in website development, we create innovative and robust solutions across all leading industries.
        </p>
        </div>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="industry-card"
            style={{ backgroundImage: `url(${industry.image})` }}
          >
            <div className="industry-overlay">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* planning */}
 
      <CounterWeb/>
       <div style={{ maxWidth: '1200px', marginLeft: 'auto',marginRight: 'auto', width: '100%',marginTop:'100px' }} class="blockweb">
       <h2 style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          Industries We Serve
        </h2>
        <p style={{ color: '#ffffff', width: '100%', textAlign: 'left' }}>
          As a pioneer in website development, we create innovative and robust solutions across all leading industries.
        </p>
        </div>
      <Processgrid/>
    <Contactcard/>
 
 
 
 
    </div>
  );
};
 
export default WebsiteDevelopment;