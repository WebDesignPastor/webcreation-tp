import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import CubeSpinner from '../CubeSpinner'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import TextZone from '../TextZone'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const servicesStr = 'Services'

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <TextZone className='services-text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              str={servicesStr}
              idx={5}
            />
          </h1>
          <p>Page en Construction</p>
        </TextZone>
      </div>
      <div>
        <CubeSpinner cubeType="third" />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
