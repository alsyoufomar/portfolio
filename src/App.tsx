import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/nav'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects'

function App() {
  return (
    <div className='App'>
      <div className='profile'>
        <div className='frame'>
          <h1>Omar Alsyouf</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
