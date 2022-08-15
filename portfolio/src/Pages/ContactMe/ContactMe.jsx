import React from 'react'
import { Button } from 'react-bootstrap'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div id='contact-main-container'>
        <h1>Contact Me</h1>
        <p>I am currently looking for work within software development. I am very flexible and can work on many different aspects of a project. Feel free to reach out via email, LinkedIN or download my resume</p>
        <div className='contact-button-group'>
            <Button>LinkedIn</Button>
            <Button>Github</Button>
            <Button>Resume</Button>
        </div>
        <h3>Email me at: martinwilson450@gmail.com</h3>
        <br></br>
    </div>
  )
}

export default ContactMe