import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import Loader from "react-loaders";

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = 'Portfolio'.split('')

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />
        </h1>
        <p>Page en construction</p>
      </div>
    </div>
    <Loader type='pacman' />
  </>
  )
}

export default Portfolio
