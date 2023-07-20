import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import CubeSpinner from '../CubeSpinner'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const servicesStr = 'Services et tarification'

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
              str={servicesStr}
              idx={5}
            />
          </h1>
          <h2>Page en Construction</h2>
        </div>
      </div>
      <div>
        <CubeSpinner cubeType="third" />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
