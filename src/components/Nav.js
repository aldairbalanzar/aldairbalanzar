import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ handleNavState }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const links = ['https://github.com/']
    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
    };

    const variants = {
        openMenu: {width: '16%'},
        closedMenu: {width: '6%'},

        barsDisplay: {
            opacity: [0, 0.2, 1],
            x: [-100, -50, 0]},
        barsHide: {
            opacity: [1, 0.15, 0],
            x: [0, -50, -100]},
        timesDisplay: { 
            opacity: [0, 0.15, 1],
            x: [-100, -50, 0]},
        timesHide: { 
            opacity: [1, 0.2, 0],
            x: [0, -50, -100]}
    }

    return(
        <motion.div className='menu-container'
            variants={variants}
            style={{overflow: 'hidden'}}
            initial='closedMenu'
            animate={isNavOpen ? 'openMenu' : 'closedMenu'}
            transition={{ duration: 0.25 }}
        >
            <AnimatePresence>

                {/* bars icon */}
                {!isNavOpen &&
                    <motion.i className={`menu-bars fa fa-bars`} onClick={handleNav}
                    variants={variants}
                    style={{overflow: 'hidden'}}
                    initial={{x: -30}}
                    animate={isNavOpen ? 'barsHide' : 'barsDisplay'}
                    exit={ 'barsHide' }
                    transition={{ duration: isNavOpen ? 0.3 : 0.45 }}
                    ></motion.i>
                }
                
                {/* times icon */}
                {isNavOpen &&
                    <nav>  
                        <motion.i className={`menu-times fa fa-times`} onClick={handleNav}
                        variants={variants}
                        style={{overflow: 'hidden'}}
                        initial={{x: -30}}
                        animate={isNavOpen ? 'timesDisplay' : 'timesHide'}
                        exit={ 'timesHide' }
                        transition={{ duration: isNavOpen ? 0.4 : 0.25 }}
                        ></motion.i>

                        <motion.ul
                        variants={variants}
                        style={{overflow: 'hidden'}}
                        initial={{x: -30}}
                        animate={isNavOpen ? 'timesDisplay' : 'timesHide'}
                        transition={{ duration: isNavOpen ? 0.25 : 0.55 }}
                        >
                            <li ><a onClick={() => {handleNavState(1); setIsNavOpen(false)}}> Projects </a></li>
                            <li><a onClick={() => {handleNavState(2); setIsNavOpen(false)}}> About Me </a></li>
                            <li><a onClick={() => {handleNavState(3); setIsNavOpen(false)}}> Contact </a></li>
                            <div className="nav-icon-container">
                                <a href='https:www.linkedin.com/in/aldair-balanzar-390185177/' target='_blank' style={{margin: '0 3%'}}>
                                    <i className="nav-icon fa fa-linkedin-square"></i>
                                </a>
                                <a href='https:github.com/aldairbalanzar' target='_blank' style={{margin: '0 3%'}}>
                                    <i className="nav-icon fa fa-github"></i>
                                </a>
                            </div>
                        </motion.ul>
                    </nav>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default Nav;