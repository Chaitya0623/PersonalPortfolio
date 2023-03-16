import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import Antariksh from '../../assets/img/Antariksh.jpg'
import Unicode from '../../assets/img/Unicode.png'
import Synapse from '../../assets/img/Synapse.png'

export default function CustomizedTimeline() {
  return (
    <Timeline className='timeline'
        sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="#af307e"
        >
          May 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={Antariksh} className='workExImg'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
          <Typography variant="h6" component="span" color="primary" fontWeight="bold">
            Coding Team Member | DJS Antariksh
          </Typography>
          <Typography><ul>
            <li>Working on integrating Arduino using Robot Operations Systems.</li>
            <li>Helped building pages for the Team Website with React and Achievements API with Django.</li>
            <li>3rd Position in IRDC 2022 and 8th in International Rover Challenge 2023.</li>
            </ul></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="#af307e"
        >
          Sep 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={Synapse} className='workExImg'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
          <Typography variant="h6" component="span" color="primary" fontWeight="bold">
          Machine Learning Developer | Synapse
          </Typography>
          <Typography><ul>
            <li>Evaluated various Machine Learning Algorithms.</li>
            <li>Created Hand Volume Controller using CV and Sentiment Analyzer using NLP</li>
            <li>Was in the Organizing Committee (Publicity) for Re-Quest 2022 and also helped contacting sponsors.</li>
            <li>Currently working on a Research Paper on Sentence Restructuring.</li>
            </ul></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="#af307e"
        >
          Oct 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <img src={Unicode} className='workExImg'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
          <Typography variant="h6" component="span" color="primary" fontWeight="bold">
          Full Stack Developer (Django) | DJ Unicode 
          </Typography>
          <Typography><ul>
            <li>Made mini-projects like Personal Portfolio with HTML, CSS, JavaScript and a React Quiz.</li>
            <li>Performed CRUD applications and User Authentication with Django and Django REST Framework.</li>
            <li>Currently working on an Internship Portal as a final Group Project.</li>
            </ul></Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}