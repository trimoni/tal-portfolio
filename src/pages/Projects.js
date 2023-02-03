import React from 'react'
import '../styles/Project.css'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/color-connect-four2.jpg'
import Proj2 from '../assets/tictactoe.jpg'

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name='Connect Four' image={Proj1} />
        <ProjectItem name='Tic Tac Toe' image={Proj2}/>
      </div>
    </div>
  )
}

export default Projects