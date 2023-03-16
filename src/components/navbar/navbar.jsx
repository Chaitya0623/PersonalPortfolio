import { AppBar, Toolbar, Typography } from "@mui/material";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import React from "react";
import Logo from '../../assets/img/logo.jpg';
import { useEffect, useState } from 'react';

import { FaHome, FaBriefcase, FaTools, FaProjectDiagram } from 'react-icons/fa';

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, setScrolled} = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.addEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <AppBar position="static" color="transparent" sx={{marginTop: "1em"}} className={scrolled ? 'scrolled' : ''}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography><img src={Logo} alt='Logo' className="logo"/></Typography>
        <Typography sx={{ display: "flex", justifyContent: "space-around"}}>
             <a href="#home" className={activeLink === 'home' ? 'active navbar-link home' : 'navbar-link home'} onClick={() => onUpdateActiveLink('home')}><FaHome/> Home</a>
             <a href="#workEx" className={activeLink === 'workEx' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('workEx')}><FaBriefcase/> WorkEx</a>
             <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><FaTools/> Skills</a>
             <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><FaProjectDiagram/> Projects</a>
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "space-around" }}>
        <span className='navbar-text'>
             <span className='social-icon'>
                 <a href="https://www.linkedin.com/in/chaitya-shah-381b5421b"><FaLinkedin/></a>
                 <a href="https://github.com/Chaitya0623"><FaGithub/></a>
                 <a href="https://www.instagram.com/chaitya0623"><FaInstagram/></a>
             </span>
             <a href="#contact"><button>Let's Connect</button></a>
           </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}