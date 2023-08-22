import '../styles/nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Nav = () => {
  let lightmode = localStorage.getItem("lightmode") === "true";
  const [isLight, setIsDark] = useState(lightmode || false)

  const darkMode: any = (): void => {
    setIsDark(!isLight)
    localStorage.setItem("lightmode", (!isLight).toString());
    if (!isLight) {
      document.body.classList.add('lightmode')
    } else {
      document.body.classList.remove('lightmode')
    }
  }
  return (
    <div className='nav'>
      <i onClick={darkMode} className='fa-solid fa-circle-half-stroke'></i>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}
