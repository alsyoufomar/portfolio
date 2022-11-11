import '../styles/nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Nav = () => {
  const [isDark, setIsDark] = useState(true)

  const darkMode: any = (): void => {
    console.log(isDark)
    setIsDark(!isDark)
    console.log(isDark)
    if (isDark) {
      document.body.classList.add('darkmode')
    } else {
      document.body.classList.remove('darkmode')
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
