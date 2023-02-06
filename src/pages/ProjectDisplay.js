import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link'
import LaunchIcon from '@material-ui/icons/Launch';

import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className='project'>
      <h1> {project.title}</h1>
      <img src={project.image} alt=""/>
      <p>
        <b>Skills:</b> {project.description}
      </p>
      <div>
        <Link href={project.repositoryLink}><GitHubIcon /></Link>
        <Link href={project.depositoryLink}><LaunchIcon /></Link>
      </div>
    </div>
  )
}

export default ProjectDisplay