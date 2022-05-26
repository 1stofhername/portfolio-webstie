import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Home from './Home';
import ExperienceContainer from './ExperienceContainer';
import ProjectsContainer from './ProjectsContainer';
import ExperienceDetails from './ExperienceDetails';
import { roles } from '../data/job-data';
import Sidebar from './Sidebar';

export default function AnimatedRoutes () {

  function handleJobClick (org) {
    let job = roles.filter((role)=>role.org===org)
    setSelectedJob(job);
  }

  const[selectedJob, setSelectedJob]=useState("");
  const location = useLocation({});

    return (
    
      <>
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/resume" element={<ExperienceContainer handleJobClick={handleJobClick}/>} />
          <Route path="/projects" element={<ProjectsContainer />} />
          <Route path="/resume/:org" element={<ExperienceDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
      </>
    )
}