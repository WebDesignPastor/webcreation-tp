import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
          />
        </h1>
        <p>À propos de moi : Je suis un développeur full stack récemment diplômé du Wagon. Passionné par la technologie et la programmation, j'ai acquis une solide expérience en développement web grâce à mes études et à mes projets personnels. Je suis toujours à la recherche de nouveaux défis et de nouvelles opportunités pour améliorer mes compétences et développer des solutions innovantes.</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default About
