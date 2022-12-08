import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../../constants';
import './About.scss';

import {CubeSpin} from '../index'

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
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <CubeSpin />
            </div>
        </div>
    )
}
export default About;