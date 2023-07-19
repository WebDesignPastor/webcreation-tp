import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import CubeSpinner from '../CubeSpinner';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = 'Développeur Web Full Stack'.split('')
  const greetingArray = 'Bonjour,  je suis François'.split('')

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {greetingArray.map((word, i) => (
            <AnimatedLetters
              key={`greeting-${i}`}
              letterClass={letterClass}
              strArray={word.split('')}
              idx={5}
            />
          ))}
          <br />
          {jobArray.map((word, i) => (
            <AnimatedLetters
              key={`job-${i}`}
              letterClass={letterClass}
              strArray={word.split('')}
              idx={5}
            />
          ))}
        </h1>
        <h2>Développeur Junior Full Stack / Ruby on Rails / HTML / CSS / Javascript / ReactJS </h2>
        <Link to="/contact" className='flat-button'>CONTACTEZ-MOI</Link>
      </div>
    </div>
    <div>
      <CubeSpinner cubeType="first" />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
