import React from "react";
import imgf from '/public/images/section-why.jpg'

const OutsourcingBenefitsInline = () => {
  const benefits = [
    "Expert AI & ML specialists",
    "Agile development process",
    "Enterprise-level security",
    "Smooth system integration",
    "Scalable solutions",
    "Future-ready technology",
  ];

  const containerStyle = {
  
    flexDirection: "row",
    backgroundColor: "#000000",
    minHeight: "100vh",
  
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    maxWidth: "1200px",
    width: "100%",
  };

  const imageStyle = {
    width: "70%",
    objectFit: "cover",
  };

  const contentStyle = {
    width: "40%",
    backgroundColor: "#007bff", // blue box
    color: "white",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop:'-300px',
    marginLeft:'auto',
    borderRadius:'30px 0px 0px 30px'
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "14px",
    marginBottom: "20px",
    lineHeight: "1.6",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    columnCount:'2'
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "14px",
  };

  const checkIconStyle = {
    marginRight: "10px",
    color: "#fff",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={{maxWidth:'100%',width:'100%',margin:'auto',height:'400px',backgroundImage:`url(${imgf})`,backgroundPosition:'center',backgroundSize:'cover'}}>
        
      </div>
       

        {/* Right Content */}
        <div style={contentStyle}>
          <h2 style={headingStyle}>
            Advantage of Artificial Intelligence Software development Services
          </h2>
          <p style={paragraphStyle}>
            We blend deep technical expertise with a business-first mindset, ensuring each AI project delivers clear, measurable value that drives growth, innovation, and success for your company. Our approach turns complex AI into practical solutions that make a real impact.

          </p>
          <ul style={listStyle}>
            {benefits.map((benefit, index) => (
              <li key={index} style={listItemStyle}>
                <span style={checkIconStyle}>✅</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
};

export default OutsourcingBenefitsInline;
