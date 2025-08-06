import React, { useState, useEffect } from 'react';
import './TechCapabilities.css'; 

const technologies = {
  'Frontend Programming Languages': [
    ['css', 'CSS'],
    ['html', 'HTML'],
    ['javascript', 'Javascript'],
    ['angular', 'Angular'],
    ['react', 'React'],
    ['vue', 'Vue'],
  ],
  'Backend Programming Languages': [
    ['node-js', 'Node-js'],
    ['python', 'Python'],
    ['java', 'Java'],
    ['ruby', 'Ruby'],
    ['php', 'PHP'],
    ['go', 'Go'],
  ],
  'Mobile': [
    ['flutter', 'Flutter'],
    ['react-native', 'React-Native'],
    ['swift', 'Swift'],
    ['kotlin', 'Kotlin'],
    ['android', 'Android'],
    ['ios', 'iOS'],
  ],
  'Big Data': [
    ['hadoop', 'Hadoop'],
    ['spark', 'Apache Spark'],
    ['kafka', 'Kafka'],
  ],
  'Databases / Data Storages': [
    ['mysql', 'MySQL'],
    ['postgresql', 'PostgreSQL'],
    ['mongodb', 'MongoDB'],
    ['sqlite', 'SQLite'],
  ],
  'Cloud DB, Warehouses And Storage': [
    ['aws', 'AWS S3'],
    ['azure-storage', 'Azure-Storage'],
    ['google-cloud', 'Google Cloud Storage'],
    ['snowflake', 'Snowflake'],
  ],
  'DevOps': [
    ['docker', 'Docker'],
    ['kubernetes', 'Kubernetes'],
    ['jenkins', 'Jenkins'],
    ['ansible', 'Ansible'],
    ['terraform', 'Terraform'],
    ['github', 'GitHub Actions'],
  ],
};

const UniqueTechCapabilities = () => {
  const [activeTab, setActiveTab] = useState('Frontend Programming Languages');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    let timeout;
    if (isAnimating) {
      timeout = setTimeout(() => setIsAnimating(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <section className="utc-section">
      <h2 className="utc-title">
        Technology Expertise Powering <br />
        Digital Transformation for Our Clients
      </h2>

      <div className="utc-container">
        <div className="utc-sidebar">
          {Object.keys(technologies).map((tab) =>
            tab === activeTab ? (
              <button key={tab} className="utc-active-tab">
                {tab}
                <span className="utc-arrow">→</span>
              </button>
            ) : (
              <p key={tab} onClick={() => handleTabChange(tab)}>
                {tab}
              </p>
            )
          )}
        </div>

        <div className={`utc-grid ${isAnimating ? 'utc-fade-out' : 'utc-fade-in'}`}>
          {technologies[activeTab].map(([key, label]) => (
            <div className="utc-card" key={key}>
              <img src={`/icons/${key}.png`} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueTechCapabilities;
