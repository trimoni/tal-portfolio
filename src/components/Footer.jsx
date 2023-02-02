import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
  return (
    <div className='footer'>
      <div> 
        <LinkedInIcon/>
        <GitHubIcon/>
      </div>
      <p> &copy; 2023 Tal Rimoni</p>
    </div>
  )
}

export default Footer