import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch, faHtml5, faCss3, faReact, faJs, faGithub, faGitAlt, faWordpress, faFigma, faRebel, faElementor, faWpforms, faPhp, faJava, faLaravel, faSymfony, faVuejs, faDAndD } from '@fortawesome/free-brands-svg-icons';
import './index.scss'; // This is where you will put your scss

function CubeSpinner({ cubeType }) {
  return (
    <div className="first-stage-cube-cont">
      <div className="cubespinner">
        {cubeType === "first" &&
          <>
            <div className="face-first-cube-front"><FontAwesomeIcon icon={faSketch} color="#DD0031" /></div>
            <div className="face-first-cube-right"><FontAwesomeIcon icon={faHtml5} color="#F06529" /></div>
            <div className="face-first-cube-back"><FontAwesomeIcon icon={faCss3} color="#28A4D9" /></div>
            <div className="face-first-cube-left"><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></div>
            <div className="face-first-cube-top"><FontAwesomeIcon icon={faJs} color="#EFD81D" /></div>
            <div className="face-first-cube-bottom"><FontAwesomeIcon icon={faGithub} color="#000000" /></div>
          </>
        }
        {cubeType === "second" &&
          <>
            <div className="face-first-cube-front"><FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /></div>
            <div className="face-first-cube-right"><FontAwesomeIcon icon={faWordpress} color="#007298" /></div>
            <div className="face-first-cube-back"><FontAwesomeIcon icon={faFigma} color="#a259ff" /></div>
            <div className="face-first-cube-left"><FontAwesomeIcon icon={faRebel} color="#000000" /></div>
            <div className="face-first-cube-top"><FontAwesomeIcon icon={faElementor} color="#92003b" /></div>
            <div className="face-first-cube-bottom"><FontAwesomeIcon icon={faWpforms} color="#e1762f" /></div>
          </>
        }
        {cubeType === "third" &&
          <>
            <div className="face-first-cube-front"><FontAwesomeIcon icon={faPhp} color="#787CB5" /></div>
            <div className="face-first-cube-right"><FontAwesomeIcon icon={faJava} color="#6DB33F" /></div>
            <div className="face-first-cube-back"><FontAwesomeIcon icon={faSymfony} color="#007396" /></div>
            <div className="face-first-cube-left"><FontAwesomeIcon icon={faLaravel} color="#FF2D20" /></div>
            <div className="face-first-cube-top"><FontAwesomeIcon icon={faVuejs} color="#42B883" /></div>
            <div className="face-first-cube-bottom"><FontAwesomeIcon icon={faDAndD} color="#C9C287" /></div>
          </>
        }
      </div>
    </div>
  );
}


export default CubeSpinner;
