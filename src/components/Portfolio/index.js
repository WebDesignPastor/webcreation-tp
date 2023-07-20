// import AnimatedLetters from "../AnimatedLetters";
// import { useState, useEffect } from "react";
import Loader from "react-loaders";
import ProjectCard from './ProjectCard';
import { projects } from "./projects";
import './index.scss';


const Portfolio = () => {

  // const [letterClass, setLetterClass] = useState('text-animate')

  // const jobArray = 'Portfolio'.split('')

  // useEffect(() => {
  //   setTimeout(() => {
  //   setLetterClass('text-animate-hover')
  // }, 3000)
  // }, [])

  return (
    <>
        <div className='portfolio-wrapper'>
          <div className='portfolio'>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Portfolio
