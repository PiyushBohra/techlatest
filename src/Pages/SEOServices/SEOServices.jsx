import InnerBanner from '../../components/InnerBanner/InnerBanner';
import SEOService from '../../components/SEOService/SEOService';
import Contact from '../../components/Contactcard/contactcard';
import usePageMeta from '../../hooks/usePageMeta';
import './SEOServices.css';

const SEOServices = () => {
  usePageMeta({
    title: 'Tech Zenon SEO Portfolio Elevating Online Presence',
    description:
      'Explore Tech Zenons SEO portfolio showcasing stunning examples of our work, driving online growth, improved visibility, and impactful results.',
  });

  return (
    <div>
      <InnerBanner />

      {/* Banner Image */}
      <div className="seo-banner-container">
        <img src="/images/seo-1.jpg" className="seo-banner-image" alt="SEO Banner" />
      </div>

      {/* Main SEO Section */}
      <div className="seo-main-section">
        <div className="seo-services-panel">
          {/* Left Column: Content */}
          <div className="seo-text-content">
            <h2 className="seo-heading">Enterprise SEO Services</h2>
            <div className="seo-heading-underline"></div>
            <p className="seo-paragraph">
              Your website is a powerful sales and marketing tool—if customers can find you over the internet. To increase
              monthly website traffic, calls, leads, and sales across the country turn to Tech Zenon for search engine
              optimization campaigns.
            </p>
            <p className="seo-paragraph">
              Internet marketing is used to present your offered services and products out in the world. Tech Zenon offers
              the best solution for search engine optimization in terms of promoting your website and E-commerce portal.
              Once you adopt this, you will rank higher on search engines like Google, Yahoo, and Bing—making it easier for
              people to find you.
            </p>
            <p className="seo-paragraph">
              We have a highly skilled team possessing all the intellect needed for advertising your business in the best
              way possible within committed time duration. Our some of the offered services are search engine optimization
              (SEO), social media marketing (SMM), Email marketing, website design and development.
            </p>
          </div>

          {/* Right Column: Services */}
          <div className="seo-services-box">
            <h3 className="seo-services-title">Our SEO Services Include</h3>
            <ul className="seo-services-list">
              {[
                'Technical SEO',
                'On-Page SEO',
                'Off-Page SEO',
                'Local SEO',
                'Reputation Management',
              ].map((service, index) => (
                <li className="seo-service-item" key={index}>
                  <span className="seo-service-icon">✓</span>
                  <span className="seo-service-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SEOService />

      <div className="services-section">
        <h2 className="section-title">Cutting-Edge Search Engine Optimization Services</h2>
        <div className="services-grid">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div className="service-card" key={id}>
              <div className="card-header">
                <img src={`/images/vector-${id}.png`} alt={`vector-${id}`} />
                <h3>
                  {[
                    'National SEO',
                    'Local SEO',
                    'Small Business SEO',
                    'E-commerce SEO',
                    'Mobile SEO',
                    'Video SEO',
                  ][id - 1]}
                </h3>
              </div>
              <p>
                {[
                  'National SEO enhances your website’s visibility across the country, driving targeted traffic, increasing brand awareness, and boosting rankings on nationwide search results.',
                  'Local SEO enhances visibility in targeted locations, attracting nearby customers and increasing traffic through optimized local search strategies and online presence.',
                  'Small Business SEO improves online visibility, drives targeted traffic, and helps local companies compete effectively by optimizing their websites for relevant search terms.',
                  'E-commerce SEO optimizes online stores to rank higher in search engines, attract qualified traffic, boost product visibility, and increase sales conversions.',
                  'Mobile SEO ensures your website is optimized for smartphones and tablets, improving user experience, search rankings, and accessibility for mobile users.',
                  'Video SEO optimizes video content to rank higher in search results, increase visibility, drive engagement, and attract more targeted traffic online.',
                ][id - 1]}
              </p>
            </div>
          ))}
        </div>
        <div className="cta-button-container">
          <a href="/contact-us" className="cta-button">
            Need Free Consultation?
          </a>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default SEOServices;
