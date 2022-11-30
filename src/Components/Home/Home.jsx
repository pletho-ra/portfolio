import React, {useEffect} from 'react'
import './Home.scss'

import { AnimatedLetters, images } from '../../constants'
import { Link } from 'react-router-dom'
import {Logo} from '../index'

const Home = () => {

  const [letterClass, setLetterClass] = React.useState('text-animate');
  const nameArray = ['a','j','a'];
  const jobArray = ['W','e','b',' ', 'D', 'e','v','e','l','o','p','e','r'];

  useEffect(() => {
   setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp;
            <img src ={images.Logo4} alt = 'developer' />
            {/* <strong className="firt-letter">&nbsp;R</strong> */}
            <AnimatedLetters 
              letterClass = {letterClass} 
              strArray = {nameArray}
              idx={15}
            />  
            <br />
            <AnimatedLetters 
              letterClass = {letterClass} 
              strArray = {jobArray}
              idx={22}
            /> 
            </h1>
            <h2>Frontend Developer/ Javascript Expert</h2>
            <Link to = "/contact" className = "flat-button">CONTACT ME</Link>
        </div>
        <Logo />
    </div>
  )
}

export default Home
