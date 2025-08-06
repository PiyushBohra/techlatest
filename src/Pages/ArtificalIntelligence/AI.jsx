
import './AI.css';
import Partners from '../../components/Partners/partners';
import Contact from '../../components/Contactcard/contactcard';
import Poster from '../../components/Hero-2/poster'
import CustomSoftwareBanner from '../../components/CustomSoft/CustomSoftwareBanner'
import usePageMeta from '../../hooks/usePageMeta';


const AI = () => {
  usePageMeta({
        title: "AI Chatbot Development Services | Tech Zenon",
        description: "Boost customer engagement with our AI chatbot development services. We build custom, intelligent chatbots for websites, apps, and support platforms to automate conversations and improve user experience. Scalable, secure, and tailored to your needs"
      });
  return (
    <>
       <CustomSoftwareBanner/>
      <Partners />
       {/* card-section */}
       <div className="card">
      <div className="left-panel">
        <h2>Integrating our AI Expertise in AI Chatbot Development</h2>
        <p>We build custom AI chatbots tailored to your industry, audience, and goals. Our chatbot development services include design, integration, testing, and support for smarter automation.</p>
         <div className="chatbot-features">
      <div className="features-grid">
        <div className="feature-card">
          <h3>Consulting AI Chatbot Requirments</h3>
          <p>We help you define and plan your AI chatbot needs for smarter, efficient, and personalized solutions.</p>
        </div>
        <div className="feature-card">
          <h3>Chatbot Development & Integration</h3>
          <p>Custom chatbot development & seamless integration to boost engagement, automate tasks, and improve service.</p>
        </div>
        <div className="feature-card">
          <h3>Chatbot Development & Integration</h3>
          <p>Chatbots can wear different hats, such as GPT-based chatbots, social media chatbots, or transactional chatbots.</p>
        </div>
        <div className="feature-card">
          <h3>Deployment, Testing & Fine-Tuning</h3>
          <p>We deploy, test, and fine-tune your AI chatbot to ensure it runs smoothly and meets your business needs.</p>
        </div>
      </div>
    </div>
      </div>
      <div className="right-panel">
      </div>
    </div>
    {/* card-section */}
   
   
   {/* service-section */}
   <div className="services-section">
    <h2 className="section-title" style={{width:'100%',textAlign:'center',color:'#ffffff'}}>Our AI Chatbot Development Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-6.png" alt="vector-6"/>
          <h3>Strategy & Consultation</h3>
        </div>
        <p>We start by understanding your goals and audience, then help select platforms, set the chatbot’s tone, and design workflows that match your brand voice.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-1.png" alt="vector-1"/>
          <h3>Custom Chatbot Design</h3>
        </div>
        <p>We create natural, engaging chatbot flows—from FAQ bots to AI agents integrated with CRMs and databases—that deliver real value to users and businesses.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-2.png" alt="vector-2"/>
          <h3>Training & Testing</h3>
        </div>
        <p>We train chatbots on real datasets and perform thorough testing to guarantee accuracy, speed, and reliable performance for the best user experience.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-3.png" alt="vector-3"/>
          <h3>Deployment & Support</h3>
        </div>
        <p>Once live, we monitor chatbot performance, optimize conversations, and deliver ongoing maintenance and updates to keep your AI assistant running smoothly.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-4.png" alt="vector-4"/>
          <h3> Scalable and Secure</h3>
        </div>
        <p>Our AI chatbot solutions scale with your business and use robust security protocols to ensure your user data stays safe and protected at all times.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-5.png" alt="vector-5"/>
          <h3>Reduce Operational Costs</h3>
        </div>
        <p>Automate repetitive queries and free your team to handle complex tasks. Chatbots reduce customer service costs while boosting efficiency and support speed.</p>
      </div>
    </div>
    <div className="cta-button-container">
      <a href="/contact-us" class="cta-button-1">Need Free Consultation?</a>
    </div>
  </div>
   {/* service-section */}

{/* 
    <div className="chatbot-benefits">
      <div className="overlay">
        <div className="content">
          <h3>Hiring Apiorit chatbot developers allows you to:</h3>
          <ul>
            <li>Access a team of industry professionals</li>
            <li>Unlock new business opportunities with a cutting-edge solution</li>
            <li>Keep your sensitive data secure and private</li>
            <li>Personalize the customer experience</li>
          </ul>
        </div>
      </div>
    </div> */}


    <div className="services-section" style={{marginBottom:'40px'}}>
         <h2 className="section-title" style={{width:'100%',textAlign:'center',color:'#ffffff'}}>Our AI Chatbot Development Services</h2>
    {/* <p  style={{width:'100%',textAlign:'center',color:'#ffffff'}}>We provide the best AI chatbot development services for your needs</p> */}
    <div className="services-grid-1">
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-7.png" alt="vector-7"/>
          <h3>Chatbot Design And Development</h3>
        </div>
        <p>We specialize in chatbot design and development, creating intelligent, user-friendly bots that enhance customer engagement, automate tasks, and improve efficiency.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-8.png" alt="vector-8"/>
          <h3>AI Chatbot Integration</h3>
        </div>
        <p>Integrate intelligent AI chatbots seamlessly into your systems to enhance customer interactions, automate processes, and deliver personalized, 24/7 support.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-9.png" alt="vector-9"/>
          <h3>Intent-Based NLP Engine Chatbots</h3>
        </div>
        <p>Intent-based NLP engine chatbots understand user queries with precision, enabling accurate responses, personalized interactions, and seamless conversational experiences.</p>
      </div>
      <div className="service-card">
        <div className="card-header">
          <img src="/images/vector-10.png" alt="vector-10"/>
          <h3>Sentiment Analysis Solutions </h3>
        </div>
        <p>Our sentiment analysis solutions analyze customer emotions and opinions in real-time, helping businesses make data-driven decisions and enhance customer experiences.</p>
      </div>
     
      
    </div>
   
  </div>
  


      <Poster/>

       <div className="why-outsource-container">
      <div className="why-outsource-left">
        <h2>
          Why Outsource <strong>AI Chatbot Development</strong> Services To Tech Zenon?
        </h2>
        <p>
        Outsourcing AI chatbot development to Tech Zenon ensures access to cutting-edge technology, expert developers, and cost-effective solutions tailored to your business needs. With a strong focus on innovation, scalability, and seamless user experience, Tech Zenon delivers intelligent chatbot systems that enhance customer engagement, automate support, and drive operational efficiency. Partnering with Tech Zenon means faster time-to-market, continuous support, and a strategic edge in adopting AI-driven communication tools without the overhead of in-house development.  </p>
      </div>

      <div className="why-outsource-right">
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-20.png" alt="vector-20"/>
              <h3>Multilingual AI Chatbot</h3>
              <p>We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-21.png" alt="vector-21"/>
              <h3>LLM-Powered Chatbots</h3>
              <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-22.png" alt="vector-22"/>
              <h3>Conversational Flow Solutions</h3>
              <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-23.png" alt="vector-23"/>
              <h3>End Application Development</h3>
              <p>Our purpose is simple: to help brands succeed in the digital age. We’re passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-24.png" alt="vector-24"/>
              <h3>Hire AI Chatbot Developer</h3>
              <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src="./images/vector-25.png" alt="vector-25"/>
              <h3>Emotional Intelligence</h3>
              <p>Our purpose is simple: to help brands succeed in the digital age. We’re passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
      <Contact />
    </>
  );
};

export default AI;
