import React from 'react'
import SectionFooter from './sectionFooter';
import  'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
const Section2 = () => {
  return (<>
  <div className='carousel-block'>
  <Carousel
showThumbs={false}
showIndicators={true}
autoPlay={true}
infiniteLoop={false}
>
<div className='section-img1'>
     <div className='fav-icon'></div>
   </div>
   <div className='section-img3'>
   <div className='fav-icon'></div>
   </div>
   <div className='section-img4'>
   <div className='fav-icon'></div>
   </div>
</Carousel>
  </div>


    <div className='section-2'>

    <div className='section-img1'>
      <div className='fav-icon'></div>
    </div>
    <div className='section-img2'>
      <div className='sec-img-split1'></div>
      <div className='sec-img-split2'></div>
    </div>
    <div className='section-2-text'>view more like this product</div>
    <div className='section-img3'>
    </div>
    <div className='section-img4'>
    </div>
    {/* <SectionFooter/> */}
    </div> 
    </>
  )
}

export default Section2
