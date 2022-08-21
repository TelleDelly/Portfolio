import React from 'react'
import pictureOfMe from '../../Assets/Pictures/IMG_5515.jpg'

import '../../App.css'

const Landing = () => {
  return (
    <div className='landing-page-main'>
        <div className='landing-text'>
          {/* Have an array of job titles and rotate them */}
            <h1>Hi<br/>I'm Martin Wilson, <br/>a Full Stack Software Engineer</h1>
        </div>
        <div className='landing-addition'>
            <img className='profilePicture' src={pictureOfMe}></img>
        </div>
    </div>
  )
}

export default Landing