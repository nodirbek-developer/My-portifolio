import React from 'react'

export default function Home() {
  return (
    <div className='text-light px-5 h-100'>
      <h2 className='mytitle mt-3'>Aboute me</h2><hr />
      <div className="w-100 h-100 d-flex">
        <div className="myInformation w-50 h-75">
          <div className="aboutsection">Contact</div>
          <div className="aboutinform">nodirbeknurbekov6@gmail.com</div>
          <div className="aboutinform">+998 94 865 85 04</div>
          <div className="aboutsection">Education</div>
          <div className="aboutinform">Progress edu</div>
          <div className="aboutinform">It center</div> 
        </div>
        <div className="myInformation w-50 h-75">
          <div className="aboutsection">Work experience</div>
          <div className="aboutinform">It park</div>
          <div className="aboutinform">Volunteering</div>
          <div className="aboutsection">Languages</div>
          <div className="aboutinform">Uzbek</div>
          <div className="aboutinform">English</div>
        </div>
      </div>
    </div>
  )
}
