import './index.css';
import Home from './Pages/Home/home';
import CustomSoftware from './Pages/CustomSoftware/CustomSoftware';
import ArtificalIntelligence from './Pages/ArtificalIntelligence/AI';
import CustomDigital from './Pages/CustomDigital/CustomDigital';
import HireDedicated from './Pages/HireDedicated/HireDedicated';
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing';
import WebsiteDevelopment from './Pages/WebsiteDevelopment/WebsiteDevelopment';
import SEOportfolio from './Pages/SEOportfolio/Seoportfolio';
import Websiteportfolio from './Pages/Websiteportfolio/Websiteportfolio';
import SEOServices from './Pages/SEOServices/SEOServices';
import AppPortfolio from './Pages/AppPortfolio/AppPortfolio';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/AboutUs/AboutUs';
import Blogs from './Pages/Blogs/Blogs';
import CloudApp from './Pages/CloudApp/CloudApp';
import LogisticsSoftware from './Pages/LogisticsSoftware/LogisticsSoftware';
import AISoftware from './Pages/AISoftware/AISoftware';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog1 from './Pages/BlogPages/Blog1';
import Blog2 from './Pages/BlogPages/Blog2';
import VapeAgency from './Pages/VapeSEOAgency/VapeAgency';
import Pageclick from './Pages/Ppc/Pageclick';


function App() {
  return (
    <Router> 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-software-development-services" element={<CustomSoftware />} />
          <Route path="/artifical-intelligence" element={<ArtificalIntelligence />} />
          <Route path="/ai-software-development-services" element={<AISoftware />} />
          <Route path="/custom-digital-product-company" element={<CustomDigital />} />
          <Route path="/best-cloud-app-development-services" element={<CloudApp />} />
          <Route path="/logistics-software-development-company" element={<LogisticsSoftware />} />
          <Route path="/hire-dedicated-react-js-developer" element={<HireDedicated />} />
          <Route path="/smo-services" element={<DigitalMarketing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/seo-portfolio" element={<SEOportfolio />} />
          <Route path="/website-portfolio" element={<Websiteportfolio />} />
          <Route path="/application-portfolio" element={<AppPortfolio />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/blog1" element={<Blog1/>} />
          <Route path="/blogs/blog2" element={<Blog2/>} />
          <Route path="/seo-agency-for-vape-store" element={<VapeAgency/>}/>
          <Route path="/pay-per-click-avertising-services" element={<Pageclick/>}/>


        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
