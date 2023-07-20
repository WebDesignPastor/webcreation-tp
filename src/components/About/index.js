import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import TextZone from '../TextZone'  // import TextZone
import { useEffect, useState } from 'react'
import CubeSpinner from '../CubeSpinner'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutStr = 'A propos'

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='content'>
          <TextZone className={"about-text-zone"}>  {/* use TextZone component */}
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                str={aboutStr}
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
          </TextZone>  {/* close TextZone component */}
          <div className='cube-zone'>
            <CubeSpinner cubeType="second" />
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
