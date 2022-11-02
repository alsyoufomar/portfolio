import '../styles/projects.css'
import { motion } from 'framer-motion'

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className='projects'>
      <div className='project'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/alsyoufomar/solo-project-client-Cookie-bite'>
          Source
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://cookie-bite.netlify.app/'
          className='stack'>
          <h1>Cookie-Bite</h1>
          <p>ReactJS / NodeJS / ExpressJS / PostgreSQL / PrismaJS</p>
        </a>
      </div>
      <div className='project'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/alsyoufomar/web-scraper-game'>
          Source
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://web-scraper-game.netlify.app/'
          className='stack'>
          <h1>Web-Scraper</h1>
          <p>JavaScript / HTML / CSS</p>
        </a>
      </div>
      <div className='project'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/alsyoufomar/scientific-paper'>
          Source
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://alialsyoufresearch.netlify.app/'
          className='stack'>
          <h1>Scientific paper</h1>
          <p>JavaScript / HTML / CSS</p>
        </a>
      </div>
    </motion.div>
  )
}
