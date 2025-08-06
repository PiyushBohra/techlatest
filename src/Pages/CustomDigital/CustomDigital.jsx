import React from 'react'
import "./CustomDigital.css"
import Partners from '../../components/Partners/partners'
import Contact from '../../components/Contactcard/contactcard'
import CustomSoftwareBanner from '../../components/CustomSoft/CustomSoftwareBanner'
import TabSection from '../../components/CustomSoft/TabSection/TabSection'
import SliderContent from '../../components/CustomSoft/SliderContent/SliderContent'
import ClientSliderContent from '../../components/CustomSoft/ClientSliderContent/ClientSliderContent'
import WhyChoose from '../../components/CustomSoft/WhyChoose/WhyChoose'
import WhyChooseSecond from '../../components/CustomSoft/WhyChooseSecond/WhyChooseSecond'
import Poster from '../../components/Hero-2/poster'

const CustomDigital = () => {
  return (
    <>
    <CustomSoftwareBanner/>
    <Partners/>
    <TabSection/>

    <div className="services-section" style={{textAlign:'center'}}>
    <h2 className="section-title" style={{color:'#ffffff'}}>Our Digital Product Development Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-6.png" alt="vector-6"/>
          <h3>Chatbot Design And Development</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-1.png" alt="vector-1"/>
          <h3>AI Chatbot Integration</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-2.png" alt="vector-2"/>
          <h3>Intent-Based NLP Engine Chatbots</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-3.png" alt="vector-3"/>
          <h3>Sentiment Analysis Solutions</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-4.png" alt="vector-4"/>
          <h3>Enterprise Chatbot Solutions</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-5.png" alt="vector-5"/>
          <h3>AI Chatbot Consultancy</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an it to make book.</p>
      </div>
    </div>
    <div className="cta-button-container">
      <a href="/contact-us" class="cta-button">Need Free Consultation?</a>
    </div>
  </div>


<div style={{padding:'40px 0px'}}>
<Poster/>
</div>
    
    <WhyChoose/>
    
    <Contact/>
    </>
  )
}

export default CustomDigital;