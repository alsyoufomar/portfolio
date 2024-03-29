import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Nav } from './components/nav'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { Welcome } from './components/welcome'
import { Stars } from './components/stars'
import { AnimatePresence } from 'framer-motion'

function App() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  const location = useLocation()
  const [show, setShow] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 7000)
  }, [])

  let lightmode = localStorage.getItem('lightmode') === 'true'

  if (lightmode) {
    document.body.classList.add('lightmode')
  } else {
    document.body.classList.remove('lightmode')
  }
  return (
    <div className="App">
      {show && <Welcome />}
      <div className="profile">
        <div className="frame">
          <h1>Omar Alsyouf</h1>
          <p>Full-Stack Web Developer | UI Designer | Freelancer</p>
          <Stars />
        </div>
      </div>
      <div className="fake-top"></div>
      <div className="fake-bottom"></div>
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
