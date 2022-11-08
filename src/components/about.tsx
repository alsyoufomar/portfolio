import '../styles/about.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Scrollbar } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar'

export const About = () => {
  const scrollbar = useRef<BaseScrollbar | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className='about'>
      <div className='about__container'>
        <Scrollbar
          className='test'
          ref={scrollbar}
          alwaysShowTracks={true}
          renderByPixels={true}
          damping={0.04}
          plugins={{
            overscroll: {
              effect: 'bounce',
              damping: 0.2,
              maxOverscroll: 20,
            } as const,
          }}>
          <div>
            <h2>Skills</h2>
            <p>
              JavaScript / ReactJS / TypeScript / NodeJS / Express / Redux /
              HTML / CSS / SQL / Prisma / Git / Agile / TDD / OOP / VScode
            </p>
          </div>
          <div>
            <h2>Basic Experience</h2>
            <p>Python / Django / C / MongoDB / Bootstrap / AWS S3</p>
          </div>
          <div>
            <h2>Education</h2>
            <p>
              Bachelor's degree in Mathematics
              <br />
              Certificate in Web Developement
            </p>
          </div>
          <div>
            <h2>Bio</h2>
            <p>
              I am a Full-Stack Software Developer that has graduated from a
              six-month Software Engineering academy with a particular interest
              in making things simple.
              <br />
              <br />I have experience creating full-stack applications using
              React, Node.js and PostgreSQL stack. I try to keep up with
              security and best practices and I am always looking for new things
              to learn as I like to keep myself busy on a daily basis.
            </p>
          </div>
        </Scrollbar>
      </div>
      <div className='track-cover'></div>
    </motion.div>
  )
}
