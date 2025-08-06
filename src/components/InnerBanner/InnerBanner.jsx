import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './InnerBanner.css';

const InnerBanner = () => {
    const location = useLocation();
    const [pageTitle, setTitle] = useState('');
    const [pageDescription, setDescription] = useState('');
    const [backgroundPath, setBackgroundPath] = useState('');

    const pageTitles = {
        '/': 'Home',
        '/smo-services': 'Social Media Marketing',
        '/about-us': 'We Are Tech Zenon',
        '/contact-us': 'Contact Us',
        '/custom-software-development-services': 'Custom Software Development Services',
        '/ai-software-development-services': 'AI Software Development Services',
        '/best-cloud-app-development-services': 'Cloud App Development Services',
        '/logistics-software-development-company': 'Logistics Software Development Company',
        '/artifical-intelligence': 'AI Chatbot Development Services',
        '/seo-portfolio': 'SEO Portfolio',
        '/application-portfolio': 'Application Portfolio',
        '/seo-services': 'Bet noticed - Be ahead - Make your presence known!',
        '/website-development': 'Design & Development',
        '/blogs':'Blogs',
        '/blogs/blog1':'How to Configure WordPress Integration in SEO.AI',
        '/blogs/blog2':'How to Build the Perfect Website Using AI',
        '/seo-agency-for-vape-store':'SEO Agency For Vape Store',
        '/pay-per-click-avertising-services':'Pay Per Click Services'
    };

    const pageDescriptions = {
        '/': 'Welcome to our homepage. Explore our services and solutions.',
        '/about-us': 'We love to build! Websites, apps, digital platforms, you name it, we’ve probably done it!',
        '/smo-services': 'Enhance your brand’s visibility and connect with your target audience through our expert social media strategies.',
        '/contact-us': 'Get In Touch',
        '/best-cloud-app-development-services': 'Tech Zenon offers end-to-end Cloud App Development Services that deliver speed, reliability, and flexibility to help businesses unlock the power of the cloud.',
        '/custom-software-development-services': 'Custom Software Development Services tailored to your business needs, delivering scalable, efficient, and innovative solutions that streamline operations and drive growth.',
        '/ai-software-development-services': 'Harness expert AI development to transform your business with cutting-edge tech, custom strategies, and skilled pros delivering innovative, scalable solutions that fuel growth.',
        '/seo-portfolio': '',
        '/artifical-intelligence': 'AI-powered chatbots transform customer interaction. At Tech Zenon, we build smart bots that boost engagement, automate support, and work 24/7 across all platforms.',
        '/logistics-software-development-company': 'Tech Zenon offers tailored logistics software development services to optimize operations, enhance tracking, and streamline supply chains for seamless business efficiency.',
        '/seo-services': 'Digital content disappears if SEO isn’t used correctly, and your digital presence deteriorates. With our Search Engine Optimization Service, we at Tech Zenon, will help you create fully customized strategies that help your website rank higher and increase its visibility!',
        '/website-development': 'Elevate your business website and give your customers a memorable and rewarding experience with Tech Zenon – Your Digital Partner!',
    };

    const pageBackground = {
        '/smo-services': '/images/seo.jpg',
        '/about-us': '/images/about.jpg',
        '/contact-us': '/images/contact.jpg',
        '/custom-software-development-services': '/images/custom-soft.jpg',
        '/ai-software-development-services': '/images/ai-software.jpg',
        '/best-cloud-app-development-services': '/images/cloud-sft.jpg',
        '/logistics-software-development-company': '/images/logistics.jpg',
        '/artifical-intelligence': '/images/ai-chat.jpg',
        '/seo-portfolio': '/images/seo-portfolio.jpg',
        '/seo-services': '/images/seo-banner.jpg',
        '/website-development': '/images/seo-portfolio.jpg',
        '/blogs':'/images/blogs.jpg',
        '/blogs/blog1':'/images/BlogAI-banner.jpg',
        '/blogs/blog2':'/images/blogs-banner.jpg',
        '/seo-agency-for-vape-store':'/images/Vapeseo.jpg',
        '/pay-per-click-avertising-services':'/images/ppc.jpg'


    };

    useEffect(() => {
        const path = location.pathname;
        setTitle(pageTitles[path] || 'Page');
        setDescription(pageDescriptions[path] || '');
        setBackgroundPath(pageBackground[path] || '/images/banner-bg.jpg'); 
        document.title = pageTitles[path] || 'Page';
    }, [location]);

    const getColoredTitle = (text) => {
        const words = text.split(' ');
        if (words.length >= 2) {
            return (
                <>
                    {words[0]} <span style={{ color: '#1163FB' }}>{words[1]}</span> {words.slice(2).join(' ')}
                </>
            );
        }
        return text;
    };

    return (
        <div
            className="inner-container-banner"
            style={{ backgroundImage: `url(${backgroundPath})` }}
        >
            <div className="inner-banner">
                <div className="inner-banner-text">
                    <h1>{getColoredTitle(pageTitle)}</h1>
                    <p>{pageDescription}</p>
                    <button
                        className="consult-button"
                        onClick={() => window.location.href = '/contact-us'}
                    >
                        Consult Our Expert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InnerBanner;
