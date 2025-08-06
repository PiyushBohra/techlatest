import React from 'react';
import "./CustomDigital.css";
import Partners from '../../components/Partners/partners';
import Contact from '../../components/Contactcard/contactcard';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import TabSection from '../../components/CustomSoft/TabSection/TabSection';
import usePageMeta from '../../hooks/usePageMeta';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";


const DigitalMarketing = () => {
   usePageMeta({
      title: 'SMO Services | Best Social Media Optimization Company',
      description: 'Tech Zenon offers top SMO services to boost your brand visibility, drive traffic, and grow engagement across all social media platforms.'
    });
  return (
    <>
      <InnerBanner />
      <Partners />

      <div className="container-image">
        <img src="/images/Social-Media-Marketing-2nd-banner.jpg" alt="Social Media Marketing Banner" />
      </div>

      <h2 className="heading-key">The Key To Successful Social Media Management</h2>

      <div className="why-outsource-container">
        <div className="why-outsource-left why-digital-techzenon">
          <h2>
            Social <strong> Media Marketing Services</strong>
          </h2>
          <p>
            Social media has become an essential part of our daily lives, and that’s no overstatement. It connects us to a wide variety of people and brands, sharing stories and experiences that were once unheard of. In today’s world, social media holds a vital place in how we communicate and engage.
          </p>
          <p>
            There was a time when brands were limited to sharing their stories through banners, hoardings, and billboards. Today, social media offers limitless opportunities for brands to engage with audiences using diverse formats like images, videos, and audio. When it comes to managing your social media marketing, who better to trust than the best in the business — Tech Zenon?
          </p>
          <p>
            At Tech Zenon, we bring your brand to life through expert social media marketing. Our professional services help you effectively manage your Instagram, Snapchat, and Facebook profiles to maximize impact. With unique storytelling campaigns, creative designs, and strategic audience targeting, we ensure your brand stands out and reaches the right people.
          </p>
          <p>
            Tech Zenon stands out as a leading Social Media Marketing company by fully owning your brand’s presence on social platforms. We connect your brand with the right audience through creative thinking, innovative campaigns, and compelling ideas that truly tell your brand’s story.
          </p>
          <p>
            We stay ahead of the latest trends to help you attract the widest audience possible. Our team of experts understands the algorithms across all social media platforms and leverages this insight to maximize the visibility and engagement of every post.
          </p>
        </div>

        <div className="why-outsource-right">
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-20.png" alt="vector-20" />
                <h3>Planning</h3>
                <p>We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-21.png" alt="vector-21" />
                <h3>Executing</h3>
                <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-22.png" alt="vector-22" />
                <h3>Analysing</h3>
                <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-23.png" alt="vector-23" />
                <h3>Modifying</h3>
                <p>Our purpose is simple: to help brands succeed in the digital age. We’re passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-24.png" alt="vector-24" />
                <h3>Progressing</h3>
                <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <img src="./images/vector-25.png" alt="vector-25" />
                <h3>Emotional Intelligence</h3>
                <p>Our purpose is simple: to help brands succeed in the digital age. We’re passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <h2>THE PLATFORMS</h2>

      <div className="services-section" style={{ textAlign: 'center' }}>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-header">
              <FaFacebookF size={24} />
              <h3>Facebook</h3>
            </div>
            <p>"The Bread & Butter"<br />Best for B2C</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FaInstagram size={24} />
              <h3>Instagram</h3>
            </div>
            <p>"Millennial Market"<br />Best for B2C</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FaTwitter size={24} />
              <h3>Twitter</h3>
            </div>
            <p>"The Opinion Platform"<br />Best for B2B & B2C</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FaLinkedinIn size={24} />
              <h3>Linkedin</h3>
            </div>
            <p>"For the Professionals"<br />Best for B2B</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FaYoutube size={24} />
              <h3>Youtube</h3>
            </div>
            <p>"The Visual Portfolio"<br />Best for B2B & B2C</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <FaPinterestP size={24} />
              <h3>Pinterest</h3>
            </div>
            <p>"Inspiration Station"<br />Best for B2C</p>
          </div>
        </div>

        <div className="cta-button-container">
          <a href="/contact-us" className="cta-button">Need Free Consultation?</a>
        </div>
      </div>

      <TabSection/>

      <div className="services-section">
        <h2 className="section-title">Why Does Your Business Need Social Media Marketing Services?</h2>
        <p>Top social media marketing services provide a wide range of benefits to businesses. They help organizations boost their online presence, connect with their desired audience, and accomplish their marketing objectives efficiently.</p>
        <div className="services-grid-1">
          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-7.png" alt="vector-7" />
              <h3>Improved Version</h3>
            </div>
            <p>Leading social media marketing services boost online visibility, foster audience engagement, and drive business growth by effectively achieving targeted marketing goals</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-4.png" alt="vector-8" />
              <h3>Improving Customer Engagement</h3>
            </div>
            <p>Improving customer engagement involves creating meaningful interactions, building trust, and fostering loyalty through personalized content, active communication, and consistent brand presence.</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-9.png" alt="vector-9" />
              <h3>Increased Website Traffic</h3>
            </div>
            <p> Increased website traffic is achieved through targeted social media strategies, engaging content, and optimized campaigns that drive users to visit your site.
</p>
          </div>
          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-10.png" alt="vector-10" />
              <h3>Lead Generation</h3>
            </div>
            <p>Lead generation involves attracting and converting potential customers through strategic social media campaigns, valuable content, and compelling calls-to-action.</p>
          </div>

          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-6.png" alt="vector-10" />
              <h3>Cost Effective Advertising</h3>
            </div>
            <p>Cost-effective advertising leverages social media platforms to reach a targeted audience with minimal spend, maximizing ROI through precise and scalable campaigns.</p>
          </div>

          <div className="service-card">
            <div className="card-header">
              <img src="/images/vector-5.png" alt="vector-10" />
              <h3>Analytics and Data</h3>
            </div>
            <p>Analytics and data provide valuable insights into campaign performance, audience behavior, and engagement metrics, enabling data-driven decisions for better marketing outcomes.</p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}

export default DigitalMarketing;
