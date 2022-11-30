import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideBar.scss'

import { images } from '../../constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
  const [toggleClass, setToggleClass] = useState(false);

  console.log(toggleClass);
  return (
    <div className="nav-bar">
      <Link className = 'logo' to = '/'>
          <img src={images.Logo2} alt = 'logoSub' />
          <h3>Raja Sahani</h3>
      </Link>
      <nav className={toggleClass ? 'show':''}>
        <NavLink exact = "true" activeclassname = 'active' to = "home">
          <FontAwesomeIcon  icon ={ faHome } color = '#4d4d4e'/>
        </NavLink>
        <NavLink  
            activeclassname = 'active'
            className = 'about-link' 
            to = "about"
         >
          <FontAwesomeIcon  icon ={ faUser } color = '#4d4d4e'/>
        </NavLink>
        <NavLink  
            activeclassname = 'active' 
            className = 'contact-link' 
            to = "/contact"
        >
          <FontAwesomeIcon  icon ={ faEnvelope } color = '#4d4d4e'/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a 
            target = "_blank"
            rel ="noreferrer"
            href="https://www.linkedin.com/in/raja-sahani-88366417a/"
            >
              <FontAwesomeIcon  icon ={faLinkedin} color = '#4d4d4e'/>
          </a>
        </li>
        <li>
          <a 
            target = "_blank"
            rel ="noreferrer"
            href="https://github.com/pletho-ra"
            >
              <FontAwesomeIcon  icon ={faGithub} color = '#4d4d4e'/>
          </a>
        </li>
        <li>
          <a 
            target = "_blank"
            rel ="noreferrer"
            href="skype:live:.cid.7b5c9b9b44d80b12"
            >
              <FontAwesomeIcon  icon ={faSkype} color = '#4d4d4e'/>
          </a>
        </li>
      </ul>
      <div className="small-screen_menu">
        <FontAwesomeIcon  icon ={faBars}  className= 'menu-icon' onClick={()=>{setToggleClass(!toggleClass)}} color = '#fff'/>
      </div>        
      
      {/* {toggleClass && 
        <div className="small-screen">
           <div className="small-screen_overlay ">
      <nav>
        <NavLink exact = "true" activeclassname = 'active' to = "/">
          <FontAwesomeIcon  icon ={ faHome } color = '#4d4d4e'/>
        </NavLink>
        <NavLink 
            exact = "true" 
            activeclassname = 'active'
            className = 'about-link' 
            to = "/about"
         >
          <FontAwesomeIcon  icon ={ faUser } color = '#4d4d4e'/>
        </NavLink>
        <NavLink 
            exact = "true" 
            activeclassname = 'active' 
            className = 'contact-link' 
            to = "/contact"
        >
          <FontAwesomeIcon  icon ={ faEnvelope } color = '#4d4d4e'/>
        </NavLink>
      </nav> */}
           {/* </div>
        </div>   
        } */}
    </div>
  )
}

export default SideBar

