import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date="2015 - 2019"
        iconStyle={{background: '#e9d35b', color: '#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> Salem State University, Salem MA</h3>
          <p>Bacholer's Degree - Communications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="2019 - 2020"
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> Magic 106.7</h3>
          <p>Radio Producer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="2019 - 2022"
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> Entertainment Specialist</h3>
          <p>Sales & Marketing Specialist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date="2020 - 2022"
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> Cambridge Premier Realty</h3>
          <p>Real Estate Agent</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date="2022"
        iconStyle={{background: '#e9d35b', color: '#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> General Assembly</h3>
          <p>Certificate in Software Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience