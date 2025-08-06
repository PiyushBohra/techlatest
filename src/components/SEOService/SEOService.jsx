import React, { useEffect, useRef, useState } from 'react';

const steps = [
  // ... (Same step objects as before)
];

const SEOProcess = () => {
  const lineRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineRef.current.style.height = '100%';
        }
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  const seoProcessStyle = {
    background: 'linear-gradient(to right, #000000, #0f172a)',
    color: '#fff',
    fontFamily: 'sans-serif',
    position: 'relative'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: isMobile ? '28px' : '36px',
    color: '#f97316',
    marginBottom: '40px',
    fontWeight: '700'
  };

  const timelineStyle = {
    position: 'relative',
    maxWidth: '1140px',
    margin: '0 auto'
  };

  const lineStyle = {
    position: 'absolute',
    left: isMobile ? '20px' : '50%',
    top: 0,
    width: '4px',
    height: '0',
    backgroundColor: '#f97316',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    transition: 'height 2s ease-in-out',
    zIndex: 0
  };

  const stepStyle = (index) => ({
    position: 'relative',
    width: isMobile ? '100%' : '50%',
    padding: isMobile ? '20px 20px 20px 40px' : '20px 40px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: isMobile ? 'row' : index % 2 === 0 ? 'row' : 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: '30px',
    textAlign: isMobile ? 'left' : index % 2 === 0 ? 'left' : 'right',
    left: isMobile ? '0' : index % 2 === 0 ? '50%' : '0'
  });

  const iconStyle = {
    background: '#f97316',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    width: '50px',
    height: '50px',
    minWidth: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    zIndex: 2
  };

  const contentStyle = (index) => ({
    background: '#1e293b',
    color: '#e2e8f0',
    padding: '20px',
    borderRadius: '12px',
    marginLeft: isMobile ? '20px' : index % 2 === 0 ? '20px' : '0',
    marginRight: isMobile ? '0' : index % 2 !== 0 ? '20px' : '0',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    lineHeight: '1.6',
    flex: 1
  });

  const headingStyle = {
    color: '#f97316',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  return (
    <div style={seoProcessStyle}>
      <h2 style={titleStyle}>Our SEO Strategy</h2>
      <div style={timelineStyle}>
        <div ref={lineRef} style={lineStyle}></div>

        {steps.map((step, index) => (
          <div key={index} style={stepStyle(index)}>
            <div style={iconStyle}>{step.icon}</div>
            <div style={contentStyle(index)}>
              <h3 style={headingStyle}>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SEOProcess;
