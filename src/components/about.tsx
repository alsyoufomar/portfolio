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
            I am a Full-Stack Software Developer with a comprehensive background
            in Software Engineering, holding both a Software Engineering academy
            certification and a Bachelor's degree in Mathematics. Alongside my
            technical skills, I have obtained a designing certificate,
            showcasing my versatility in creating user-friendly and
            aesthetically pleasing applications.
            <br />
            <br />
            My approach to development revolves around the philosophy of
            simplicity, striving to make complex concepts and applications more
            accessible. In my journey, I have successfully developed full-stack
            applications using a diverse tech stack, including NextJS, Strapi,
            Webflow, ReactJS, NodeJS, and PostgreSQL. I am dedicated to
            maintaining the highest standards of security and best practices in
            my projects.
            <br />
            <br />
            Constantly seeking opportunities for growth and learning, I am known
            for my proactive nature, always eager to explore new technologies
            and methodologies. This curiosity and commitment to staying abreast
            of the latest industry trends contribute to my dynamic and evolving
            skill set. I thrive on keeping myself engaged in learning and
            applying new knowledge, making each day a chance to further enhance
            my proficiency and contribute meaningfully to the world of software
            development.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
