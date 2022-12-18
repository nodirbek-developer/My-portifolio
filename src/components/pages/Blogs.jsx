import React from 'react'
import Telegram from '../../Images/Telegram.jpg'
import Instagram from '../../Images/Instagram.jpg'
import Facebook from '../../Images/Facebook.jpg'

export default function Blogs() {
  return (
    <div className='text-light px-5'>
      <h2 className='mytitle mt-3'>My blogs</h2><hr />
      <div className="socialbolgs d-flex justify-content-between mt-4">
        <div class="blogscard card" style={{ width: "30%" }}>
          <img src={Telegram} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Meni telegramda kuzatib boring</h5>
            <a href="#" class="btn btn-primary">Go to the page</a>
          </div>
        </div>
        <div class="blogscard card" style={{ width: "30%" }}>
          <img src={Instagram} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Meni instagramda kuzatib boring</h5>
            <a href="https://www.instagram.com/nodirbeknurbekov/" class="btn btn-primary">Go to the page</a>
          </div>
        </div>
        <div class="blogscard card" style={{ width: "30%" }}>
          <img src={Facebook} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Meni facebookda kuzatib boring</h5>
            <a href="#" class="btn btn-primary">Go to the page</a>
          </div>
        </div>
      </div>
    </div>
  )
}
