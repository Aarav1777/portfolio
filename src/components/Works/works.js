import React from 'react'
import './works.css';

import image5 from '../../assests/bank-system.webp';
import image4 from '../../assests/weather-app.jpg';
import image1 from '../../assests/maxresdefault.jpg'
import image3 from'../../assests/text-utils.png';
import image2 from'../../assests/amazon-clone2.webp';
import image6 from'../../assests/collab.png';
import image7 from'../../assests/hotel-booking.png';




// import { CCard } from '@coreui/react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">
        My Project
      </h2>
      <span className="worksDesc">Passionate web developer skilled in React, Java, and UI/UX, creating innovative and user-friendly applications.</span>
      <div className="worksImgs">
        {/* <img src={project1} alt="project1" className="workImg" /> */}

        {/* <img src={portfolio2} alt="portfolio2" className="workImg" />
        <img src={portfolio3} alt="portfolio3" className="workImg" />
        <img src={portfolio4} alt="portfolio4" className="workImg" />
        <img src={portfolio5} alt="portfolio5" className="workImg" />
        <img src={portfolio6} alt="portfolio6" className="workImg" /> */}


        <CCard className='card'>
          <CCardImage orientation="top" src={image1} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Snake Game</CCardTitle>
            <CCardText>
              Tech Stack : Java
            </CCardText>
            <CButton href="https://github.com/Aarav1777/snake-game" target='_blank' className='card-btn'>
              Code
            </CButton>
            <CButton href="#" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>

 <CCard className='card'>
          <CCardImage orientation="top" src={image6} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Collab Nest</CCardTitle>
            <CCardText>
              Tech Stack : MERN Stack
            </CCardText>
            <CButton href="https://github.com/Aarav1777/CollabNest-AA" target='_blank' className='card-btn'>
              Code
            </CButton>
            <CButton href="https://collab-nest-dev.vercel.app/" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>
 <CCard className='card'>
          <CCardImage orientation="top" src={image7} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Hotel-Booking</CCardTitle>
            <CCardText>
              Tech Stack : FullStack  website
            </CCardText>
            <CButton href="https://github.com/Aarav1777/Hotel-Booking" target='_blank' className='card-btn'>
              Code
            </CButton>
            <CButton href="https://hotel-booking-backend-lrbld1215-aarav-s-projects-71e12306.vercel.app
" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>

        <CCard className='card'>
          <CCardImage orientation="top" src={image3} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Text utils</CCardTitle>
            <CCardText>
              Tech Stack : React js 
            </CCardText>
            <CButton href="https://github.com/Aarav1777/Textutils" target='blank'className='card-btn'>
              Code
            </CButton>
            <CButton href="#" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>

        <CCard className='card'>
          <CCardImage orientation="top" src={image4} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Weather-App</CCardTitle>
            <CCardText>
              Tech Stack : Html css <br />
               & javascript
            </CCardText>
            <CButton href="https://github.com/Aarav1777/weather-app" className='card-btn'>
              Code
            </CButton>
            <CButton href="#" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>

        <CCard className='card'>
          <CCardImage orientation="top" src={image5} className='workImg' />
          <CCardBody className='card-body'>
            <CCardTitle>Bank system</CCardTitle>
            <CCardText>
              Tech Stack : Java spring boot <br /> & sql
            </CCardText>
            <CButton href="#" className='card-btn'>
              Code
            </CButton>
            <CButton href="#" className='card-btn'>
              Link
            </CButton>
          </CCardBody>
        </CCard>

        <CCard className="card">
          <div className="image-container">
            <CCardImage orientation="top" src={image2} className="workImg" />
          </div>
          <CCardBody className="card-body">
            <CCardTitle>Amazon clone</CCardTitle>
            <CCardText>Tech Stack : HTML & CSS</CCardText>
            <CButton href="https://github.com/Aarav1777/amazon-clone" className="card-btn">Code</CButton>
            <CButton href="#" className="card-btn">Link</CButton>
          </CCardBody>
        </CCard>



      </div>
      <button className="workBtn">See More</button>
    </section>

  );
}

export default Works


