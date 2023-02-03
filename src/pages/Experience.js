import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date="2015 - 2019"
        iconStyle={{background: '#3e497a', colo: '#fff'}}
        icon={<SchoolIcon/>}
        >

          <h3 className='vertical-timeline-element-title'> Salem State University, Salem MA</h3>
          <p>Bacholer's Degree - Communications</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience