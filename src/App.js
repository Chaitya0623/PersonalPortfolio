import './App.css';
import './components/navbar/navbar.css'
import './components/banner/banner.css'
import './components/workEx/workEx.css'
import './components/skills/skills.css'
import './components/projects/projects.css'
import './components/contact/contact.css'
import './components/footer/footer.css'

import { Banner } from './components/banner/banner';
import { NavBar } from './components/navbar/navbar';
import { WorkEx } from './components/workEx/workEx';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

import React, {useState, useEffect} from 'react';
import {Rings} from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <WorkEx />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
