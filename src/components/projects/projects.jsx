import * as React from 'react';
import {Box , Tab} from '@mui/material';
import {TabContext , TabList , TabPanel} from '@mui/lab';

import { ProjectCard } from './projectCard';

import portfolio_basic from '../../assets/projectImg/portfolio_basic.png';
import verifyU from '../../assets/projectImg/VerifyU.jpeg';
import shortAThon from '../../assets/projectImg/ShortAThon.jpg';
import workConnect from '../../assets/projectImg/WorkConnect.jpeg';
import xtract from '../../assets/projectImg/xtract.png';
import digital_marketing from '../../assets/projectImg/digital_marketing.png'
import python from '../../assets/projectImg/python.png'
import google_analytics from '../../assets/projectImg/google_analytics.png'
import cpp_sololearn from '../../assets/projectImg/c++_sololearn.png'
import cloud_computing from '../../assets/projectImg/cloud_computing.png'

export const Projects = () => {
    const projects = [
        {
            title: 'Personal Portfolio',
            description: 'Web Development',
            imgUrl: portfolio_basic,
            link: 'https://chaityashahdemo.netlify.app/',
        },
        {
            title: 'WorkConnect',
            description: 'Web Development',
            imgUrl: workConnect,
            link: 'https://devfolio.co/projects/workconnect-7ac9',
        },
        {
            title: 'Short-A-Thon',
            description: 'Web Development',
            imgUrl: shortAThon,
            link: 'https://github.com/Chaitya0623/Hackniche_Console.io',
        },
        {
            title: 'VerifyU',
            description: 'AI / Machine Learning',
            imgUrl: verifyU,
            link: 'https://devfolio.co/projects/verifyu-aea2',
        },
    ]
    const hackathonWins = [
        {
            title: 'Winner of X-tract 2022',
            description: 'Datathon: ML and Data Science',
            imgUrl: xtract,
            link: 'https://drive.google.com/file/d/1FYwCZgRfzBCpqi3U0JK0vjpVMnbIgPCp/view?usp=sharing',
        },
    ]
    const certificates = [
        {
            title: 'Google Analytics For Beginners',
            description: 'Google Analytics',
            imgUrl: google_analytics,
            link: 'https://drive.google.com/file/d/1cQrm-oPxE7KgO4FoZHNOa_RjTLjHDpM3/view',
        },
        // {
        //     title: 'The Web Developer Bootcamp 2023',
        //     description: 'Udemy',
        //     imgUrl: portfolio_basic,
        // },
        {
            title: 'The Fundamentals of Digital Marketing',
            description: 'Google Digital Garage',
            imgUrl: digital_marketing,
            link: 'https://drive.google.com/file/d/1nV1-rHic2bg7g8R3EMJc4d9j3hq8wovL/view?usp=sharing',
        },
        {
            title: 'C++',
            description: 'Sololearn',
            imgUrl: cpp_sololearn,
            link: 'https://drive.google.com/file/d/1L23S1pwHsw0pzLbPT34_kme7hv8u01E2/view',
        },
        {
            title: '2022 Complete Python Bootcamp From Zero to Hero in Python',
            description: 'Udemy',
            imgUrl: python,
            link: 'https://www.udemy.com/certificate/UC-660e2ddf-3b72-4495-a8e7-744c3fd5370c/',
        },
        {
            title: 'Introduction to Cloud Computing',
            description: 'Coursera',
            imgUrl: cloud_computing,
            link: 'https://www.credly.com/badges/4d32fea3-2719-4307-9aea-0ead35365db0/linked_in_profile',
        },
    ]
    

    const [value, setValue] = React.useState('2');
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <section className="project" id="projects">
            <div className='project-box'>
                <div className="project-text">
                    <h1>Projects</h1>
                    <p>Click among the following buttons to check my Projects, Achievements and Certificates!</p>
                </div>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered className='tablist' indicatorColor='secondary' variant='fullWidth'>
                            <Tab label="Projects" value="1" className='project-label' />
                            <Tab label="Achievements" value="2" className='project-label2'/>
                            <Tab label="Certificates" value="3" className='project-label'/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className='tab-box'>
                            {
                            projects.map((project,index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                )
                            })
                        }
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className='tab-box'>
                            {
                            hackathonWins.map((project,index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                )
                            })
                        }
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div className='tab-box'>
                            {
                            certificates.map((project,index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                ) 
                            })
                        }
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </section>
    )
}