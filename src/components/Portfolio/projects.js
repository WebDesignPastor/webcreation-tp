import adtp from "../../assets/images/adtp.png";
import kergohivernage from "../../assets/images/kergohivernage.png";
import goumotplomberie from "../../assets/images/goumotplomberie.png";
import alrelagage from "../../assets/images/alrelagage.png";
import bsecrets from "../../assets/images/bsecrets.png";
import izivernage from "../../assets/images/izivernage.png";
import { faCss3, faGithub, faHtml5, faJs,faSketch, faElementor, faFigma, faWordpress, faWpforms, faGitAlt, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faMapLocation } from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    id: 1,
    title: "Breizh Secrets",
    description: "Application Web de chasse aux trésors sur smartphone",
    image: bsecrets,
    technologies: [faSketch, faJs, faGitAlt, faHtml5, faFigma, faCss3, faBootstrap, faDatabase, faMapLocation, faGithub],
    liveLink: "https://www.breizhsecrets.eu/",
  },
  {
    id: 2,
    title: "Izivernage",
    description: "Application Web de gestion d'hivernage",
    image: izivernage,
    technologies: [faSketch, faJs, faGitAlt, faHtml5, faFigma, faCss3, faBootstrap, faDatabase, faMapLocation, faGithub],
    liveLink: "https://izivernage.herokuapp.com/",
  },
  {
    id: 6,
    title: "ArchiDrawing TP",
    description: "Micro-entreprise de dessin d'architecture",
    image: adtp,
    technologies: [faWordpress, faCss3, faWpforms, faElementor, faFigma],
    liveLink: "https://archidrawingtp.fr/",
  },
  {
    id: 5,
    title: "Kergonan Hivernage",
    description: "Entreprise de gardiennage de bateaux, caravanes et camping-car",
    image: kergohivernage,
    technologies: [faWordpress, faCss3, faWpforms, faElementor, faFigma],
    liveLink: "https://kergonan-hivernage.com/",
  },
  {
    id: 3,
    title: "Goumot Plomberie",
    description: "Micro-entreprise de plomberie",
    image: goumotplomberie,
    technologies: [faWordpress, faCss3, faWpforms, faElementor, faFigma],
    liveLink: "https://goumotplomberie.fr/",
  },
  {
    id: 4,
    title: "Alr'élagage",
    description: "Micro-entreprise d'élagage",
    image: alrelagage,
    technologies: [faWordpress, faCss3, faWpforms, faElementor, faFigma],
    liveLink: "https://alrelagage.fr/",
  },
];
