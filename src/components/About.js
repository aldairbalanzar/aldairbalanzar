import React from 'react';
import aldair from '../media/aldair_persona.png';
import Typist from 'react-typist';
import { motion } from 'framer-motion';

const About = () => {
    
    const icons = [
        'fab fa-react',
        'fab fa-js-square',
        'fab fa-python',
        'fab fa-node',
        'fab fa-html5',
        'fab fa-css3-alt'
    ];

    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
    };

    const letterVariants = {
        before: {
          opacity: 0,
          y: 20,
          transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
          },
        },
      };

    const variants = {
        icon: {opacity: [0, 0.5, 1], rotate: [0, 360, 360, 0]},
        name: {x: [100, 0], opacity: [0, 1]}
    };
    return (
        <section className='about-container'>
            <img className='aldair-persona' src={aldair} alt="aldair_persona"/>
            <div className='container'>
                <motion.h1 className='speaker' variants={variants} animate={'name'} transition={{ duration: 1 }}>Aldair</motion.h1>
                <Typist className='speech-container' cursor={{show: false}} avgTypingDelay={0}>
                        <p>
                        My name is Aldair Balanzar and I am an avid full stack web-developer that finds satisfaction in creating solutions throughout the web, wether it be a simple CSS animation to finding a better implementation of a data  structure, my aim will stay to shoot for excellence.
                        </p>
                        <p>
                        My background is in special education and I owe it to this experience as to why I took the dive into web-development and computer science, it was at the school that I worked at where I built my first application, and then chose to pursue this industry as a career.
                        </p>
                        <p>
                        While attending Lambda school we studied the disciplines of web-developement and also focused on the fundamentals of computer science to optimize our solutions with efficiency and effectiveness in mind. 
                        </p>
                        <p>
                        I enjoy spending time with family by watching a Ghibli movie, going for a walk in the park, listening to trance music, or drawing. With all that said, feel free to connect with me and we can chat about getting something going.
                        </p>
                </Typist>
            </div>
            <div className='tech-container'>
                {icons.map((icon, index) =>{
                    return(
                        <motion.i className={icon} key={index} variants={variants} animate={'icon'} transition={{ duration: 3.5}}></motion.i>
                    )
                })}
            </div>
        </section>
    )
}

export default About;