import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faElementor, faFigma, faRebel, faWordpress, faWpforms, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

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
              strArray={['A',' ','p','r','o','p','o','s',' ','d','e',' ','m','o','i']}
              idx={15}
            />
          </h1>
          <p>À propos de moi : Je suis un développeur full stack récemment diplômé du Wagon. Passionné par la technologie et la programmation, j'ai acquis une solide expérience en développement web grâce à mes études et à mes projets personnels. Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour améliorer mes compétences et développer des solutions innovantes.</p>
          <p>Mes compétences :
  Je suis compétent dans plusieurs langages de programmation, notamment Ruby, Python, JavaScript et HTML/CSS. J'ai également une solide expérience en développement web front-end et back-end, ainsi qu'en intégration de bases de données. J'aime travailler en équipe et j'ai une excellente capacité à résoudre les problèmes rapidement.</p>
          <p>Mes projets :
  Au cours de mes études au Wagon, j'ai travaillé sur plusieurs projets intéressants, tels que la création d'une application web de gestion de tâches, d'une plateforme de réservation de cours en ligne et d'un site de vente de produits en ligne. J'ai également participé à des projets open source pour améliorer mes compétences et contribuer à la communauté.</p>
          <p>Mes objectifs :
  Je suis passionné par la technologie et je suis convaincu que la programmation peut changer le monde. Mon objectif est de travailler sur des projets innovants et de contribuer à créer des solutions qui répondent aux besoins de la société. Je suis également intéressé par les opportunités de travail à l'étranger et j'aimerais avoir la chance de travailler avec des équipes multiculturelles pour acquérir de nouvelles compétences et découvrir de nouveaux horizons.</p>
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
