import React from 'react';
import '/public/css/custom.css';
import usePageMeta from '../../hooks/usePageMeta';
import './AppPortfolio.css';
const GuideBanner = () => {
   usePageMeta({
          title: "Web & Mobile Application Portfolio by Tech Zenon",
          description: "Tech Zenon’s Web & Mobile Application Portfolio features innovative, user-centric solutions designed to deliver seamless performance and exceptional user experiences."
        });
  return (
    <div className="responsive-layout" style={{background:'#ffffff', paddingTop:'20px',
        paddingBottom:'20px'}}>


    <div
      style={{
        backgroundColor: '#e5effa',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth:'1140px',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
       


      }}
        class="block-app"
 
    >
      {/* Left Section */}
      <div style={{ maxWidth: '50%' }} class="blocks-div">
        <div style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>
          Mapping Software
        </div>
        <h2 style={{ color: '#0a1f44', fontSize: '28px', margin: '0 0 10px' }}>
        Mapping
        </h2>
        <p style={{ color: '#4b4b4b', fontSize: '18px', margin: '0 0 30px' ,lineHeight:'30px'}}>
          Designed with advanced technology, it provides real-time navigation, interactive maps, and detailed location information to enhance decision-making and operational efficiency. Whether you need route optimization, site analysis, or custom geospatial data integration, our application delivers accurate and actionable insights tailored to your specific requirements.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      

          <button
            style={{
              backgroundColor: '#0a1f44',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '100px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={()=>{window.location.href='/contact-us'}}
          >
            Read the Guide
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ maxWidth: '45%' }} class="blocks-div">
        <img
          src="/images/app1.webp"
          alt="Mobile App"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>

     <div
      style={{
        backgroundColor: '#ff663429',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth:'1140px',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'20px',
        marginBottom:'20px'


      }}
        class="block-app"
 
    >
        {/* Right Section */}
      <div style={{ maxWidth: '45%' }} class="blocks-div">
        <img
          src="/images/app2.png"
          alt="Mobile App"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      {/* Left Section */}
      <div style={{ maxWidth: '50%' }} class="blocks-div">
        <div style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>
          
School ERP
        </div>
        <h2 style={{ color: '#0a1f44', fontSize: '28px', margin: '0 0 10px' }}>
        Edutronx
        </h2>
        <p style={{ color: '#4b4b4b', fontSize: '18px', margin: '0 0 30px' ,lineHeight:'30px'}}>
         Our School ERP application streamlines and enhances the management of educational institutions with a comprehensive suite of tools. Designed to automate and simplify administrative tasks, it integrates key functions such as student enrollment, attendance tracking, grade management, and scheduling into a unified platform.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
         

          <button
            style={{
              backgroundColor: '#0a1f44',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '100px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={()=>{window.location.href='/contact-us'}}
          >
            Read the Guide
          </button>
        </div>
      </div>

    
    </div>

      
    <div
      style={{
        backgroundColor: '#fbc1535c',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth:'1140px',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'20px',
        marginBottom:'20px'


      }}
        class="block-app"
 
    >
      {/* Left Section */}
      <div style={{ maxWidth: '50%' }} class="blocks-div">
        <div style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>
          
Music App
        </div>
        <h2 style={{ color: '#0a1f44', fontSize: '28px', margin: '0 0 10px' }}>
        Listener
        </h2>
        <p style={{ color: '#4b4b4b', fontSize: '18px', margin: '0 0 30px' ,lineHeight:'30px'}}>
      Enjoy seamless streaming, offline playback, and high-quality audio that brings every note to life. Features like advanced search, artist profiles, and social sharing enhance your musical journey, while intuitive controls and customizable settings ensure a personalized and immersive experience. Whether you’re discovering new tracks or enjoying timeless classics.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
         

          <button
            style={{
              backgroundColor: '#0a1f44',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '100px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={()=>{window.location.href='/contact-us'}}
          >
            Read the Guide
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ maxWidth: '45%' }} class="blocks-div">
        <img
          src="/images/app3.png"
          alt="Mobile App"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>

     <div
      style={{
        backgroundColor: '#e5effa',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth:'1140px',
        width:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'20px',
        marginBottom:'20px'


      }}
        class="block-app"
 
    >
        {/* Right Section */}
      <div style={{ maxWidth: '45%' }} class="blocks-div">
        <img
          src="/images/app4.webp"
          alt="Mobile App"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      {/* Left Section */}
      <div style={{ maxWidth: '50%' }} class="blocks-div">
        <div style={{ color: '#0070f3', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>
          Food Delivery
        </div>
        <h2 style={{ color: '#0a1f44', fontSize: '28px', margin: '0 0 10px' }}>
        Food Delivery
        </h2>
        <p style={{ color: '#4b4b4b', fontSize: '18px', margin: '0 0 30px' ,lineHeight:'30px'}}>
   A food delivery app revolutionizes the way we enjoy our favorite meals, bringing culinary delights right to our doorstep with just a few taps on our smartphones. Whether you're craving a quick snack or a gourmet feast, the app connects you with a wide range of local restaurants and eateries, offering diverse cuisines.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        

          <button
            style={{
              backgroundColor: '#0a1f44',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '100px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={()=>{window.location.href='/contact-us'}}
          >
            Read the Guide
          </button>
        </div>
      </div>

    
    </div>



    </div>
  );
};

export default GuideBanner;
