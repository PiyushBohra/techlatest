import React from 'react';
import img9 from '/public/images/image-left.jpg'; // Make sure this path is correct
 
const WhyChooseSecond = () => {
  const containerStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    color: '#fff',
    backgroundColor: '#000',
    padding: '40px',
    borderRadius: '30px',
    maxWidth:'1200px',
      
      margin:'auto'
  };
 
  const leftStyle = {
    width: '47%',
    paddingRight: '20px',
  };
 
  const rightStyle = {
    width: '47%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    paddingLeft: '50px',
  };
 
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px',
  };
 
  const headerStyle = {
    marginBottom: '20px',
  };
 
  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '10px',
  };
 
  const paragraphStyle = {
    fontSize: '0.95rem',
    color: '#aaa',
    lineHeight: '1.6',
  };
 
  const cardStyle = {
    backgroundColor: '#111',
    border: '1px solid #444',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'left',
  };
 
  const iconStyle = {
    fontSize: '1.8rem',
    marginBottom: '10px',
  };
 
  const cardTitleStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
  };
 
  const cardParagraphStyle = {
    fontSize: '0.95rem',
    color: '#ccc',
    lineHeight: '1.5',
  };
 
  return (
    <div style={containerStyle} >
      <div style={leftStyle}>
        <img src={img9} style={imgStyle} alt="Why Choose Us" />
      </div>
 
      <div style={rightStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Why Choose Tech Zenon For Custom Software Development Services?</h2>
          <p style={paragraphStyle}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s,
            When An Unknown Printer Took A Galley Book.
          </p>
        </div>
 
        <div style={cardStyle}>
          <div style={iconStyle}>⌘</div>
          <h3 style={cardTitleStyle}>QA And Testing</h3>
          <p style={cardParagraphStyle}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since When An It To Make Book.
          </p>
        </div>
 
        <div style={cardStyle}>
          <div style={iconStyle}>🧊</div>
          <h3 style={cardTitleStyle}>Transparency & Integrity</h3>
          <p style={cardParagraphStyle}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since When An It To Make Book.
          </p>
        </div>
 
        <div style={cardStyle}>
          <div style={iconStyle}>📦</div>
          <h3 style={cardTitleStyle}>Vast Technical Knowledge</h3>
          <p style={cardParagraphStyle}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since When An It To Make Book.
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default WhyChooseSecond;