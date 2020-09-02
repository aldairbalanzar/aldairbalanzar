import React from 'react';
import Modal from './Modal';
import Typist from 'react-typist';

const About = () => {
    const content = ['My name is Aldair Balanzar and I am an avid full stack web-developer that finds satisfaction in creating solutions throughout the web, wether it be a simple CSS animation or data structure, I will shoot for excellence. My background is in special education and I owe it to this experience as to why I took the dive into web-development and computer science, it was at the school that I worked at where I built my first application. ',
    'My education is a combination of both self-taught and the help of Lambda School\'s Full Stack Web-Development &#38; Computer Science track.',
    'My name is Aldair Balanzar and I am an avid full stack web-developer that finds satisfaction in creating solutions throughout the web, wether it be a simple CSS animation or data structure, I will shoot for excellence. My background is in special education and I owe it to this experience as to why I took the dive into web-development and computer science, it was at the school that I worked at where I built my first application.'
]
    return (
        <div className='about-container'>
            <header className='header'>
                <h1 >About Me</h1>
            </header>

            <Modal content={content}/>

            {/* <Typist avgTypingDelay={20}> */}
                {/* <section className='section-1'>  
                    <p className='content'>
                        My name is Aldair Balanzar and I am an avid full stack web-developer that finds satisfaction in creating solutions throughout the web, wether it be a simple CSS animation or data structure, I will shoot for excellence. My background is in special education and I owe it to this experience as to why I took the dive into web-development and computer science, it was at the school that I worked at where I built my first application. 
                    </p>
                </section>

                <section className='section-2'>  
                    <p className='content'>
                        My education is a combination of both self-taught and the help of Lambda School's Full Stack Web-Development &#38; Computer Science track.
                    </p>
                </section>

                <section className='section-3'>  
                    <p className='content'>
                        My name is Aldair Balanzar and I am an avid full stack web-developer that finds satisfaction in creating solutions throughout the web, wether it be a simple CSS animation or data structure, I will shoot for excellence. My background is in special education and I owe it to this experience as to why I took the dive into web-development and computer science, it was at the school that I worked at where I built my first application. 
                    </p>
                </section> */}
            {/* </Typist> */}
        </div>
    )
}

export default About;