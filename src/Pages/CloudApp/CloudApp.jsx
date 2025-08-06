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
import usePageMeta from '../../hooks/usePageMeta';

const CloudApp = () => {
  usePageMeta({
        title: "Cloud App Development Services | Tech Zenon",
        description: "Build scalable, secure, and high-performance cloud applications with our expert cloud app development services. Start your digital transformation today."
      });
  return (
    <>
    <CustomSoftwareBanner/>
    <Partners/>
   

   

    <div className="services-section" style={{textAlign:'center'}}>
    <h2 className="section-title" style={{color:'#ffffff'}}>Our Cloud App Development Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-6.png" alt="vector-6"/>
          <h3>Custom Cloud Application Development</h3>
        </div>
        <p>We build custom cloud solutions tailored to your business goals, delivering seamless functionality across devices—from SaaS platforms to enterprise-grade apps.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-1.png" alt="vector-1"/>
          <h3>Cloud Migration Services</h3>
        </div>
        <p>Already have an on-premise app? We’ll migrate it smoothly to the cloud with minimal disruption while preserving data integrity and optimizing performance.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-2.png" alt="vector-2"/>
          <h3>Cloud-Native App Development</h3>
        </div>
        <p>Leverage the power of cloud-native architecture using microservices, containers (Docker/Kubernetes), and serverless technologies to maximize performance and scalability.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-3.png" alt="vector-3"/>
          <h3>Backend-as-a-Service (BaaS)</h3>
        </div>
        <p>We integrate third-party backend services or build robust cloud backends so your apps run efficiently and securely—reducing time to market and development overhead.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-4.png" alt="vector-4"/>
          <h3>Multi-Cloud & Hybrid Cloud Solutions</h3>
        </div>
        <p>Need flexibility? We build apps that run on AWS, Azure, GCP, or hybrid cloud setups—combining public and private clouds for maximum performance and control.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-5.png" alt="vector-5"/>
          <h3>API Development & Integration</h3>
        </div>
        <p>Enable seamless communication between your app and other systems with custom-built APIs. We ensure secure, scalable, and optimized API solutions for cloud apps.</p>
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

export default CloudApp;