import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { TestimonialSection } from '../components/common/TestimonialSection'
import { AcademicPrograms } from '../components/common/AcademicPrograms'
import HomeCarousel from '../components/HomeCarousel'
import UniversityDetails from '../components/UniversityDetails'
import ResearchSection from '../components/Research'
import NewsSection from '../components/News'
import SocialMediaSection from '../components/SocialMedia'
import CampusLifeSection from '../components/CampusLife'

export const Index = () => {
  return (
    <div>
      <HomeCarousel />
      <UniversityDetails />
      <AcademicPrograms />
      <TestimonialSection />
      <ResearchSection />
      <CampusLifeSection />
      <NewsSection />
      <SocialMediaSection />
    </div>
  )
}
