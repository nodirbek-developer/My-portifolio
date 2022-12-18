import React from 'react'
import Img from '../Images/photo_2021-02-02_14-27-52.jpg'
import My from '../document/My_CV.pdf';

export default function Aboutblock() {
    return (
    <div className="aboutblock">
        <img src={Img} alt="" className='img' />
        <h5>Nurbekov Nodirbek</h5>
        <h6>Hi My name is Nodirbek and I'm a Juniyor Frontend developer. Welcome to my personal blog.</h6>
        <button>
            <a href={My} document="My CW">Download My CW</a> 
        </button>
    </div>
    )
}
