import React from 'react'
import '../../App.css'

const Landing = () => {
  return (
    <div className='landing-page-main'>
        <div className='landing-text'>
          {/* Have an array of job titles and rotate them */}
            <h1>Hi<br/>I'm Martin, <br/>a Full Stack Software Engineer</h1>
        </div>
        <div className='landing-addition'>
            <h3>Checkout this</h3>
        </div>
    </div>
  )
}

export default Landing