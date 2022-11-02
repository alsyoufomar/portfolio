import '../styles/contact.css'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className='contact'>
      <a
        href='https://www.linkedin.com/in/omar-alsyouf-0a478822b/'
        target='_blank'
        rel='noreferrer'
        className='contact--link'>
        | LinkedIn
      </a>
      <a
        href='https://github.com/alsyoufomar?tab=repositories'
        target='_blank'
        rel='noreferrer'>
        | GitHub
      </a>
      <a
        href='https://twitter.com/OmarAlsyouf1'
        target='_blank'
        rel='noreferrer'
        className='contact--link'>
        | Twitter
      </a>
      <a href='mailto:omaralsoyouf@gmail.com' className='email'>
        | Email
      </a>
    </motion.div>
  )
}
