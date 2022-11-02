import '../styles/projects.css'

export const Projects = () => {
  return (
    <div className='projects'>
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
    </div>
  )
}
