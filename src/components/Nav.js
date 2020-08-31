import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
        console.log(`isNavOpen ${isNavOpen}`)
    }

    const variants = {
        openMenu: {width: '15%'},
        closedMenu: {width: '6%'},

        barsDisplay: { opacity: 1, x: 0 },
        barsHide: { opacity: 0, x: -100 },
        timesDisplay: { opacity: 1, x: 0 },
        timesHide: { opacity: 0, x: -100 }
    }

    return(
        <motion.div className='menu-container'
            variants={variants}
            style={{overflow: 'hidden'}}
            initial='closedMenu'
            animate={isNavOpen ? 'openMenu' : 'closedMenu'}
        >
            {/* bars icon */}
            {!isNavOpen &&
                <motion.i className={`menu-bars fa fa-bars`} onClick={handleNav}
                variants={variants}
                style={{overflow: 'hidden'}}
                initial={{x: -30}}
                animate={isNavOpen ? 'barsHide' : 'barsDisplay'}
                transition={{ duration: .3 }}
                ></motion.i>
            }
            
            {/* times icon */}
            {isNavOpen &&
                <div>  
                    <motion.i className={`menu-times fa fa-times`} onClick={handleNav}
                    variants={variants}
                    style={{overflow: 'hidden'}}
                    initial={{x: -30}}
                    animate={isNavOpen ? 'timesDisplay' : 'timesHide'}
                    transition={{ duration: .6 }}
                    ></motion.i>

                    <motion.ul
                    variants={variants}
                    style={{overflow: 'hidden'}}
                    initial={{x: -30}}
                    animate={isNavOpen ? 'timesDisplay' : 'timesHide'}
                    transition={{ duration: .6 }}
                    >
                        <li><a href="">Projects</a></li>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Contact</a></li>
                        <div className="nav-icon-container">
                            <a href='https:www.linkedin.com/in/aldair-balanzar-390185177/' target='_blank' style={{margin: '0 3%'}}>
                                <i className="nav-icon fa fa-linkedin-square"></i>
                            </a>
                            <a href='https:github.com/aldairbalanzar' target='_blank' style={{margin: '0 3%'}}>
                                <i className="nav-icon fa fa-github"></i>
                            </a>
                        </div>
                    </motion.ul>
                </div>
            }
        </motion.div>
    )
}

export default Nav;