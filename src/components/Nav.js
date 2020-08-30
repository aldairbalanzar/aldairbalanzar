import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
        console.log(`isNavOpen ${isNavOpen}`)
    }

    const variants = {
        burger: {},
        times: {},
        openBurger: {opacity: 1, x: 0 },
        closedBurger: { opacity: 0, x: '-10%'},
        open: {opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    }

    return(
        <div>
            <motion.div onClick={handleNav}
                variants={variants}
                style={{overflow: 'hidden'}}
                initial='closedBurger'
                animate={isNavOpen ? 'closedBurger' : 'openBurger'}
            >
                <div onClick={handleNav}>
                    <i className={'hamburger fa fa-bars'}></i>
                </div>
            </motion.div>

            <motion.nav
                variants={variants}
                style={{overflow: 'hidden'}}
                initial='closed'
                animate={isNavOpen ? 'open' : 'closed'}
            >
                <div onClick={handleNav}>
                    <i className={'times fa fa-times'}></i>
                </div>
                <ul>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Contact</a></li>
                    <div className="nav-icon-container">
                        <a href='https://www.linkedin.com/in/aldair-balanzar-390185177/' target='_blank' style={{margin: '0 3%'}}>
                            <i className="nav-icon fa fa-linkedin-square"></i>
                        </a>
                        <a href='https://github.com/aldairbalanzar' target='_blank' style={{margin: '0 3%'}}>
                            <i className="nav-icon fa fa-github"></i>
                        </a>
                    </div>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Nav;