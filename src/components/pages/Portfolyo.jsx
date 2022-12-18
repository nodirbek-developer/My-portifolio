import React from 'react'
import portfolyo from '../../Images/photo_2022-12-11_17-00-33.jpg'
import portfolyo1 from '../../Images/photo_2022-12-11_17-00-04.jpg'
import portfolyo2 from '../../Images/photo_2022-12-11_17-08-00.jpg'
import portfolyo3 from '../../Images/photo_2022-12-11_17-14-39.jpg'

export default function Portfolyo() {
  return (
    <div className='text-light px-5'>
      <h2 className='mytitle mt-3'>My partifolio</h2><hr />
      <div className="myportfolyo d-flex justify-content-around flex-wrap mt-4">
        <img className='portifolyo mb-4' src={portfolyo} alt="" />
        <img className='portifolyo mb-4' src={portfolyo1} alt="" />
        <img className='portifolyo mb-4' src={portfolyo2} alt=""/>
        <img className='portifolyo mb-4' src={portfolyo3} alt="" />
      </div>
    </div>
  )
}
