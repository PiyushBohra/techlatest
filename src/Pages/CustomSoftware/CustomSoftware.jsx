import React from 'react'
import "./CustomSoftware.css"
import Partners from '../../components/Partners/partners'
import Contact from '../../components/Contactcard/contactcard'
import CustomSoftwareBanner from '../../components/CustomSoft/CustomSoftwareBanner'
import TabSection from '../../components/CustomSoft/TabSection/TabSection'
import SliderContent from '../../components/CustomSoft/SliderContent/SliderContent'
import ClientSliderContent from '../../components/CustomSoft/ClientSliderContent/ClientSliderContent'
import WhyChoose from '../../components/CustomSoft/WhyChoose/WhyChoose'
import WhyChooseSecond from '../../components/CustomSoft/WhyChooseSecond/WhyChooseSecond'
import usePageMeta from '../../hooks/usePageMeta';

const CustomSoftware = () => {
  usePageMeta({
      title: "Custom software development services | Tech Zenon",
      description: 'Get scalable, secure, and fully customized software solutions tailored to your business needs. Our custom software development services help streamline operations, improve efficiency, and drive growth. From concept to deployment, we deliver results.'
    });
  return (
    <>
    <CustomSoftwareBanner/>
    <Partners/>
    <TabSection/>
    <SliderContent/>
    <ClientSliderContent/>
    <WhyChoose/>
    <WhyChooseSecond/>
    <Contact/>
    </>
  )
}

export default CustomSoftware;