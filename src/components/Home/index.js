import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logoTitle from "../../assets/images/logo-s.png";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['r', 'a', 'n', 'c', 'o', 'i', 's']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i</span>
        <br />
        <span className={`${letterClass} _13`}>I'</span>
        <span className={`${letterClass} _14`}>M</span>
        <img src={logoTitle} alt="developer"/>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22}/>
        </h1>
        <h2>Full Stack Junior Developer / Ruby on Rails / HTML / CSS / Javascript </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
