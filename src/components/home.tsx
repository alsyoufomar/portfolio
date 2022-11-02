import '../styles/home.css'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className='home'>
      <p>
        Born in Amman <br />
        Living in London
        <br />
        Raised by the 90's
        <br />
        Focused on experience, design & well-structured code
        <br />
        With programmatical and Mathematical background
        <br />
        Now available for you.
      </p>
    </motion.div>
  )
}
