import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import TextZone from '../TextZone';  // import TextZone
import './index.scss';
import Loader from 'react-loaders';
import CubeSpinner from '../CubeSpinner';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const greetingStr = 'François'
  const jobStr = 'Développeur Web'
  const jobStr2 = 'Full Stack'

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <TextZone className="home-text-zone">
        <h1>
          <AnimatedLetters
            key={`greeting`}
            letterClass={letterClass}
            str={greetingStr}
            idx={5}
          />
          <br />
          <AnimatedLetters
            key={`job`}
            letterClass={letterClass}
            str={jobStr}
            idx={5}
          />
          <br />
          <AnimatedLetters
            key={`job`}
            letterClass={letterClass}
            str={jobStr2}
            idx={5}
          />
        </h1>
        <h2>Développeur Junior Full Stack / Ruby on Rails / HTML / CSS / Javascript / ReactJS </h2>
        <Link to="/contact" className='flat-button'>CONTACTEZ-MOI</Link>
      </TextZone>  {/* close TextZone component */}
    </div>
    <div>
      <CubeSpinner cubeType="first" />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
