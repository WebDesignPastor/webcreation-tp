import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faReact, faSketch } from '@fortawesome/free-brands-svg-icons'

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
    <div className="first-stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faSketch} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJs} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGithub} color="#000000" />
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
