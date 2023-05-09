import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = 'Développeur Web Full Stack'.split('')
  const greetingArray = 'Bonjour,   je suis François'.split('')

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
        <AnimatedLetters letterClass={letterClass}
        strArray={greetingArray}
        idx={5}/>
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={5}/>
        </h1>
        <h2>Développeur Junior Full Stack / Ruby on Rails / HTML / CSS / Javascript / ReactJS </h2>
        <Link to="/contact" className='flat-button'>CONTACTEZ-MOI</Link>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
