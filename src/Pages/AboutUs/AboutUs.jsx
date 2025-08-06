import React from 'react'
import "./CustomDigital.css"
import { Helmet } from "react-helmet";
import Partners from '../../components/Partners/partners'
import Contact from '../../components/Contactcard/contactcard'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import About from '../../components/About/about'
import seoimg from '/public/images/contact-card.png';
import seoimg1 from '/public/images/ourvision.jpg';
import usePageMeta from '../../hooks/usePageMeta';


const AboutUs = () => {
  usePageMeta({
    title: 'Best SEO Services Company in Noida | Book SEO Company in India',
    description: 'Tech Zenon a leading SEO company in Noida India, In offers comprehensive and cutting-edge SEO services in Greater Noida at competitive rates. Boost your online presence with the best SEO firm in Noida.'
  });
  return (
  
    <>
  
    <InnerBanner/>
    <Partners/>
     <About/>



        <div className="contact-card" style={{maxWidth:'1200px',width:'100%',marginLeft:'auto',marginRight:'auto',background:'#000000',border:'1px solid #dcdcdc30'}}>
       
         <div className="left-panel" style={{background:'#000000',paddingTop:'0px',paddingBottom:'0px'}}>
           <h2>Our <span>Mission</span></h2>
           <p style={{fontSize:'15px',lineHeight:'22px',textAlign:'justify'}}>Our mission at Tech Zenon is to empower businesses by delivering innovative technology solutions that drive growth and efficiency. We strive to create custom software and mobile applications tailored to each client’s unique needs, ensuring seamless user experiences and robust performance. By leveraging the latest technologies and industry best practices, we aim to transform ideas into impactful digital products that help our clients stay ahead in a rapidly evolving market. </p>
           <p style={{fontSize:'15px',lineHeight:'22px',textAlign:'justify'}}>In addition to technology development, we are committed to providing cutting-edge digital marketing services that amplify brand visibility and engagement. Our goal is to build long-term partnerships based on trust, transparency, and excellence. We focus on delivering measurable results through creative strategies and data-driven insights, helping businesses reach their target audiences and achieve sustainable success. At Tech Zenon, your growth is our purpose. </p>
          
         </div>

          <div className="right-panel-1" style={{border:'5px solid #000000',background:'none'}}>
           <img src={seoimg} style={{borderRadius:'40px',height:'350px',objectFit:'cover'}}/>
         </div>
       
       </div>

           <div className="contact-card" style={{maxWidth:'1200px',width:'100%',marginLeft:'auto',marginRight:'auto',background:'#000000',border:'1px solid #dcdcdc30'}}>
        <div className="right-panel-1" style={{border:'5px solid #000000',background:'none'}}>
           <img src={seoimg1} style={{borderRadius:'40px',height:'350px',objectFit:'cover'}}/>
         </div>
         <div className="left-panel" style={{background:'#000000',paddingTop:'0px',paddingBottom:'0px'}}>
           <h2>Our <span>Vision</span></h2>
           <p style={{fontSize:'15px',lineHeight:'22px',textAlign:'justify'}}>Our vision at Tech Zenon is to be a global leader in technology and digital marketing, recognized for transforming businesses through innovative solutions and exceptional service. We aspire to create a future where technology seamlessly integrates with business goals, driving growth, efficiency, and meaningful customer experiences. </p>
           <p style={{fontSize:'15px',lineHeight:'22px',textAlign:'justify'}}>We envision empowering organizations of all sizes to harness the full potential of digital transformation. By continuously evolving and embracing cutting-edge technologies, we aim to inspire progress, foster creativity, and build lasting partnerships that make a positive impact on industries worldwide. </p>
          
         </div>
       
       </div>

   

   
    <Contact/>
    </>
  )
}

export default AboutUs;