import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/Footer.css'
import Link from '@material-ui/core/Link'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
      <Link href='https://www.linkedin.com/in/talrimoni/'><LinkedInIcon /></Link>
      <Link href='https://github.com/trimoni'><GitHubIcon /></Link>
      </div>
      <p> &copy; 2023 Tal Rimoni</p>
    </div>
  )
}

export default Footer