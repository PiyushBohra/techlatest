import React from "react";
import backgroundImage from '/public/images/banner-bg.jpg';
import Banner from '../InnerBanner/InnerBanner';


const CustomSoftwareBanner = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    boxSizing: 'border-box',
  };

  const leftContentStyle = {
    flex: 1,
    color: '#fff',
    maxWidth: '600px',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.3',
  };

  const blueTextStyle = {
    color: '#377DFF',
  };

  const paragraphStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#377DFF',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(55, 125, 255, 0.4)',
  };

  const rightContentStyle = {
    flex: 1,
  };

  return (
    <div>
      <Banner/>
    </div>
  );
};

export default CustomSoftwareBanner;
