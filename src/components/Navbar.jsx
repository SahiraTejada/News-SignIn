import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'><Link to="/" className='link'>Lama App</Link></span>
        {
            user ? (
        <ul className="list">

            <li className="listItem">
                <img src="https://www.eaie.org/.imaging/mte/eaie-theme/full-width-large/dam/images/blog-images/2019/1000x667_wall.jpg/jcr:content/1000x667_wall.jpg" alt="avatar" className="avatar" />
            </li>
            <li className="listItem">
                John Doe
            </li>
            <li className="listItem">
                logout
            </li>
        </ul>): (<Link className='link' to="/login">Login</Link>)
        }
    </div>
  )
}

export default Navbar