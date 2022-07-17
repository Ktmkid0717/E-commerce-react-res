import React from 'react'
import '../Styles/index.css'
import Navbar from './navbar'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import SectionFooter from './sectionFooter'
const Home=(props)=> {
  return (<>
  <div className='container'>
    <Navbar/> 
  <div className='content-section'>
    <Section1/>
    <Section2/>
    <Section3 scrollend={props.scrollend}/>
  </div>

  <SectionFooter/>
  </div>
  </>
  )
}

export default Home