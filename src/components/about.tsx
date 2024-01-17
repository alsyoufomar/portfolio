import '../styles/about.css'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="about"
    >
      <div className="about__container">
        <div>
          <h2>Skills</h2>
          <p>
            JavaScript / NextJS / ReactJS / MUI / Tailwind / TypeScript / NodeJS
            / ExpressJS / Strapi / Webflow / Figma / Redux / HTML / CSS / SQL /
            Prisma / Git / Agile / TDD / OOP / VScode
          </p>
        </div>
        <div>
          <h2>Basic Experience</h2>
          <p>Python / Django / C / MongoDB / Bootstrap / AWS S3 / Cloudinary</p>
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
            six-month Software Engineering academy with a particular interest in
            making things simple.
            <br />
            <br />I have experience creating full-stack applications using
            NextJS, Strapi, Webflow, React, NodeJS and PostgreSQL stack. I try
            to keep up with security and best practices and I am always looking
            for new things to learn as I like to keep myself busy on a daily
            basis.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
