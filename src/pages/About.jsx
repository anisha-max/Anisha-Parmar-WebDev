import React from 'react'
import AboutMe from '../components/AboutMe'
import Intrests from '../components/Intrests'
import TechSlider from '../components/TechSlider'

function About() {
  return (
 <>
    <div className='py-10'>
      <AboutMe/>
      <Intrests/>
    </div>
    <TechSlider/>
 </>
  )
}

export default About
