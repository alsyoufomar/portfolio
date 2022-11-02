import '../styles/nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contcat</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}
