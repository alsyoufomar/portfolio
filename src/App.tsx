import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Nav } from './components/nav'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <div className='profile'>
        <div className='frame'>
          <h1>Omar Alsyouf</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className='fake-top'></div>
      <div className='fake-bottom'></div>
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
