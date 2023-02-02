import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
          <h2> Hi, My Name is Tal</h2>
          <div className='prompt'> 
          <p> A Software Developer with a passion for learning and creating.
          </p>
          <LinkedInIcon/>
          <GitHubIcon/>
          <EmailIcon/>
          </div>
        <div className='skills'>

        </div>
      </div>
    </div>
  )
}

export default Home
