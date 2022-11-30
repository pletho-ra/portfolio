import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../../constants';
import './About.scss';

import {
    faReact,
    faHtml5,
    faCss3,
    faJsSquare,
    faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <div className="about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />    
                </h1>
                <span className="para-tags">&lt;p&gt;</span>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quiet confident, naturally curious, and perpetually working on improving by chop one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a team person, a sports fanatic, travelling enthusiast, and technophile.  
                </p>
                <span className="para-tags">&lt;/p&gt;</span>
            </div>

            <div className="stage-cube-cont">
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
            </div>
        </div>
    )
}
export default About;