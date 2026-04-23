import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LearningSystem from './Components/LearningSystem'
import TrainingSection from './Components/TrainingSection'
import ManagementDevelopment from './Components/ManagementDevelopment'
import TransformationHub from './Components/TransformationHub'
import ConsultantTraining from './Components/ConsultantTraining'
import CTA from './Components/CTA'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LearningSystem/>
      

      <TrainingSection
      title="Corporate Trainings"
        description="Empower your team with our customised Corporate 
        Training programs designed to address the unique needs 
        and objectives of your organisation. Our expert facilitators 
        work closely with your team to deliver tailored 
        learning experiences that align with your company's goals and values."
        image="/image2.jpg"
        reverse
        points={[
          "Leadership Development",
          "Strategic Planning and Implementation",
          "Project Management",
          "Sustainability Training",
          "Customised Training",
        ]}
      />
<TrainingSection
title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional 
        development with Tobams Group's diverse range of training programs for individuals. 
        From technical skills mastery to soft skills enhancement, our courses cover 
        a wide spectrum of topics to meet the evolving needs of today's professionals.  "
        image="/image3.jpg"
        points={[
          "Leadership Development",
          "Soft Skills Development",
          "Industry Specific Knowledge",
          "Technical Skills Enhancement",
          "Time Management and Productivity",
          "Career Development",
        ]}
      />

      <TrainingSection
      title="Capacity Development"
        description="At Tobams Group, we empower individuals and organizations 
        through tailored training programs, expert-led workshops, and personalized mentorship.
         We are committed to your success and growth. We are dedicated to providing a 
        comprehensive suite of benefits designed to foster your development and success:"
        image="/image4.jpg"
        reverse
        points={[
          "Tailored Training Programs",
          "Expert-Led Workshops",
          "Personalized Mentorship",
          "Technical Skills Enhancement",
          "Collaborative Learning Environment",
          "Ongoing Support and Resources",
        ]}
      />

      <ManagementDevelopment/>
      <TransformationHub/>
      <ConsultantTraining/>
      <CTA/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page