import '../styles/projects.css'
import { motion } from 'framer-motion'

type Project = {
  name: string;
  skills: string;
  url: string;
  source: string;
}
type Design = {
  name: string;
  figma: string;
  hosted: string;
}


const projects: Project[] = [
  {
    name: 'Blog Website',
    skills: 'ReactJS / MUI / NodeJS / Strapi / PostgreSQL / Cloudinary / Brevo / useReducer',
    url: 'https://alialsyoufchemist.com/',
    source: 'https://github.com/alsyoufomar/Ali-Website'
  },
  {
    name: 'Cookie-Bite',
    skills: 'ReactJS / NodeJS / ExpressJS / PostgreSQL / PrismaJS',
    url: 'https://cookie-bite.netlify.app/',
    source: 'https://github.com/alsyoufomar/solo-project-client-Cookie-bite'
  },
  {
    name: 'Web-Scraper',
    skills: 'JavaScript / HTML / CSS',
    url: 'https://web-scraper-game.netlify.app/',
    source: 'https://github.com/alsyoufomar/web-scraper-game'
  }
]

const designs: Design[] = [
  {
    name: 'Chat app',
    figma: 'https://www.figma.com/file/Bx958cP347rfEnEO2vYYnU/Chat-App-Homepage-Design?type=design&node-id=107%3A2&mode=design&t=oj0gaC8aZWgKWcri-1',
    hosted: 'https://omars-awesome-site-ea98de.webflow.io/'
  },
  {
    name: 'Teams',
    figma: 'https://www.figma.com/file/pwUKWnFE7OKRFP0DnmfYy3/Team-App?type=design&node-id=1517%3A2&mode=design&t=WV2y8ljthizdb026-1',
    hosted: 'https://teams-app-553825.webflow.io/'
  },
  {
    name: 'Personal blog',
    figma: "https://www.figma.com/file/IFzPFs7iKGKmtR1d8lsjKL/Ali's-Website?type=design&node-id=1%3A3&mode=design&t=WV2y8ljthizdb026-1",
    hosted: 'https://alialsyoufchemist.com/'
  },
]

export const Projects: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className='projects'>
      <div className='projects__container'>
        <h2 className='projects__title apps__main__title'>Web Apps</h2>
        {projects.map(project => (
          <div className='project'>
            <a
              target='_blank'
              rel='noreferrer'
              href={project.source}>
              Source
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={project.url}
              className='stack'>
              <h3 className='webapp__title'>{project.name}</h3>
              <p>{project.skills}</p>
            </a>
          </div>
        ))}
        <h2 className='projects__title'>Figma Designs</h2>
        {designs.map(design => (
          <div className="project">
            <a
              target='_blank'
              rel='noreferrer'
              href={design.hosted}>
              Hosted
            </a>
            <a className='design__title'
              target='_blank'
              rel='noreferrer'
              href={design.figma}
            ><h3>{design.name}</h3></a>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
