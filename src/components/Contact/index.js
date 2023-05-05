import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  }, [])

  return (
    <>
      <div className='container contact-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t','e','z','-','m','o','i']}
            idx={15}
            />
          </h1>
          <p>
            Vous pouvez me contacter par mail pour toute demande concernant un projet ou une collaboration. Je vous répondrai dans les plus brefs délais. A bientôt !
          </p>
          <div>
            <form className='contact-form'>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject'  required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value='send'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
