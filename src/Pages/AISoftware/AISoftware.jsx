import React from 'react'
import "./AISoftware.css"
import Partners from '../../components/Partners/partners'
import Contact from '../../components/Contactcard/contactcard'
import AISoftwareBanner from '../../components/AISoft/AISoftwareBanner'
import TabSection from '../../components/AISoft/TabSection/TabSection'
import SliderContent from '../../components/AISoft/SliderContent/SliderContent'
import ClientSliderContent from '../../components/AISoft/ClientSliderContent/ClientSliderContent'
import WhyChoose from '../../components/AISoft/WhyChoose/WhyChoose'
import WhyChooseSecond from '../../components/AISoft/WhyChooseSecond/WhyChooseSecond'
import AIBuiltSection from '../../components/AIBuiltSection/AIBuiltSection'
import usePageMeta from '../../hooks/usePageMeta';

const AISoftware = () => {
  usePageMeta({
      title: "AI Software Development Services | Custom AI Solutions for Business",
      description: "Accelerate your business with tailored AI software development services. We build intelligent, scalable AI solutions to drive innovation and efficiency."
    });
  return (
    <>
    <AISoftwareBanner/>
    <Partners/>
     <WhyChoose/>
        <div className="services-section">
    <h2 className="section-title" style={{width:'100%',textAlign:'center',color:'#ffffff',marginBottom:'0px'}}>Our AI Chatbot Development Services</h2>
    <div className="services-grid">
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
   <AIBuiltSection/>

    <Contact/>
    </>
  )
}

export default AISoftware;