import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import ExperienceContainer from './ExperienceContainer';
import ProjectsContainer from './ProjectsContainer';
import ExperienceDetails from './ExperienceDetails';
import Sidebar from './Sidebar';
import Blogs from './Blogs';

export default function AnimatedRoutes () {

  const location = useLocation({});

    return (
    
      <>
      {/* <Sidebar /> */}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blogs/:id" element={<ExperienceDetails />} /> */}
          <Route path="/projects" element={<ProjectsContainer />} />
          <Route path="/resume" element={<ExperienceContainer />} />
          <Route path="/resume/:org" element={<ExperienceDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
      </>
    )
}