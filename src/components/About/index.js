import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faElementor, faFigma, faRebel, faWordpress, faWpforms, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = 'A propos de moi'.split('')

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
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            François, passionné par le développement web depuis ma formation intensive au Wagon. J'ai lancé mon entreprise d'assemblage de sites
            vitrine et d'applications web pour les auto-entrepreneurs et les petites entreprises.
          </p>
          <p>
            Je suis un développeur web full-stack, ce qui veut dire que je m'occupe autant de la partie visible de votre site web (le Front-End) que de la partie invisible (Back-end).
            Je peux donc vous aider à créer un site web de A à Z, de la conception à la mise en ligne.
          </p>
          <p>
            Selon votre profil et vos attentes, je vous proposerai différentes solutions pour créer votre site web.
            Je peux vous créer un site web sur-mesure, ou bien utiliser un CMS (Content Management System) comme Wordpress pour aller plus vite et que cela vous coûte moins cher.
            Rendez-vous sur la page <a href="/services">Services et tarification</a> pour en savoir plus.

            Je vous invite à regarder les différents <a href="/Portfolio">Projets</a> que j'ai réalisés, et à me contacter si vous avez des questions. Vous y verrez des projets complexes
            faits pour des entreprises de taille moyenne, mais aussi des projets plus simples pour des auto-entrepreneurs. Je reste à votre disposition pour vous aider à créer votre site web.
            N'hésitez pas à me <a href="/contact">contacter</a> pour me parler de votre projet.
          </p>
        </div>
        <div className="first-stage-cube-cont">
          <div className="cubespinner">
            <div className="face7">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face8">
              <FontAwesomeIcon icon={faWordpress} color="#007298" />
            </div>
            <div className="face9">
              <FontAwesomeIcon icon={faFigma} color="#a259ff" />
            </div>
            <div className="face10">
              <FontAwesomeIcon icon={faRebel} color="#000000" />
            </div>
            <div className="face11">
              <FontAwesomeIcon icon={faElementor} color="#92003b" />
            </div>
            <div className="face12">
              <FontAwesomeIcon icon={faWpforms} color="#e1762f" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
