import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_u02paq3',
        'template_k19h3y2',
        refForm.current,
        'yNhPU6lAd70A7gxFr'
      )
    .then(
      () => {
        alert('Message bien envoyé :-D')
        window.location.reload(false)
      },
      () => {
        alert("Le message n'a pas été envoyé :-(")
      }
    )
  }

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
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
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
                  <input type="submit" className='flat-button' value='SEND'/>
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
