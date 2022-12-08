import React from 'react'
import './CubeSpin.scss'

import {
    faReact,
    faHtml5,
    faCss3,
    faJsSquare,
    faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CubeSpin = () => {
  return (
    <div className="cube-spinner">
        <div className="face1">
            <FontAwesomeIcon icon = {faReact} color="#5ED4F4" /> 
        </div>
        <div className="face2">
            <FontAwesomeIcon icon = {faHtml5} color="#F06529" /> 
        </div>
        <div className="face3">
            <FontAwesomeIcon icon = {faCss3} color="#28A4D9" /> 
        </div>
        <div className="face6">
            <FontAwesomeIcon icon = {faJsSquare} color="#EFD81D" /> 
        </div>
        <div className="face5">
            <FontAwesomeIcon icon = {faGitAlt} color="#EC4D28" /> 
        </div>
        <div className="face4">
            <FontAwesomeIcon icon = {faReact} color="#5ED4F4" /> 
        </div>
    </div>
  )
}

export default CubeSpin
