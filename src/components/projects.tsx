import { useEffect, useState } from 'react'
import '../styles/projects.css'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../projectsData'

type Design = {
  name: string
  figma: string
  hosted: string
}

const designs: Design[] = [
  {
    name: 'Teams',
    figma:
      'https://www.figma.com/file/pwUKWnFE7OKRFP0DnmfYy3/Team-App?type=design&node-id=1517%3A2&mode=design&t=WV2y8ljthizdb026-1',
    hosted: 'https://teams-app-553825.webflow.io/',
  },
  {
    name: 'Chat app',
    figma:
      'https://www.figma.com/file/Bx958cP347rfEnEO2vYYnU/Chat-App-Homepage-Design?type=design&node-id=107%3A2&mode=design&t=oj0gaC8aZWgKWcri-1',
    hosted: 'https://omars-awesome-site-ea98de.webflow.io/',
  },
]

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const openPopup = (index: number) => {
    setSelectedProject(index)
  }

  const closePopup = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popup = document.querySelector('.popup')

      if (popup && !popup.contains(event.target as Node)) {
        closePopup()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="projects"
    >
      <div className="projects__container">
        <h2 className="projects__title apps__main__title">Web Apps</h2>
        {projects.map((project, index) => (
          <div className="project">
            <p className="details" onClick={() => openPopup(index)}>
              Details
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={project.url}
              className="stack"
            >
              <h3 className="webapp__title">{project.name}</h3>
              <p>{project.skills}</p>
            </a>
          </div>
        ))}
        <h2 className="projects__title">Landing Pages</h2>
        {designs.map((design) => (
          <div className="project">
            <a
              className="design__title"
              target="_blank"
              rel="noreferrer"
              href={design.hosted}
            >
              <h3>{design.name}</h3>
            </a>
          </div>
        ))}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              key="popup"
              className="popup-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="popup">
                <div onClick={closePopup} className="material-symbols-outlined">
                  close
                </div>
                <div
                  className="project-rich-text"
                  dangerouslySetInnerHTML={{
                    __html: projects[selectedProject].description,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
