import React from 'react'
import './about.css';

const about = () => {
  return (
    <>
    <section className="about-company">
      <div className="about-grid">
        <div className="image-container">
          <img src="/images/teamatwork.jpg" alt="Team working" />
        </div>

        <div className="content">
        <div class="loader"></div><p className="section-label">About The Company</p>
          <h2 className="main-title">
            Shaping Concepts into  <strong>Exceptional Digital Innovations</strong>
          </h2>
          <p className="description">
       Tech Zenon is a dynamic technology company specializing in mobile app development, custom software solutions, and digital marketing services. We combine innovative technology with strategic creativity to help businesses grow and succeed in the digital world. Our expert team delivers tailored apps, robust software, and effective marketing strategies designed to boost your brand’s.    </p>
          
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <div className="icon"><img src="/images/icon-1.png"/></div>
          <h3>320+</h3>
          <p>Satisfied Clients<br />Across Industries</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/code.png"/></div>
          <h3>11+</h3>
          <p>Years Of Experience<br />Delivering Impeccable<br />Software Solutions</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/person.png"/></div>
          <h3>75+</h3>
          <p>Qualified, Skilled,<br />And Committed<br />Professionals</p>
        </div>
        <div className="stat">
          <div className="icon"><img src="/images/arrows.png"/></div>
          <h3>95%</h3>
          <p>Customer Retention &<br />Repeat Business</p>
        </div>
      </div>
    </section>
</>
  )
}

export default about