import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ project, handleProjectNum, projectNum }) => {
    const divVariants = {
        hidden: { y: -50, opacity: 0 },
        display: { y: 0, opacity: 1 },
        exit: { y: -10, opacity: 0 }
    }

    const projectVariants = {
        hidden: { height: 220},
        display: { height: 400 }
    }
    return (
        <motion.div className={projectNum === project.id ? 'selected-card' : 'project-card'} onClick={() => {handleProjectNum(project.id)}}
        variants={projectVariants}
        initial= 'hidden'
        animate={ projectNum === project.id ? 'display' : 'hidden'}
        exit= 'exit'
        transition={projectNum === project.id ? {} : { delay: .2 }}
        >
            <a href='https://github.com/'><img src={project.img} alt={project.name}/></a>
            <h2 className='project-name'>{project.name}</h2>
            
            <AnimatePresence>
            <motion.div className='tech'
            variants={divVariants}
            initial= 'hidden'
            animate={ projectNum === project.id ? 'display' : 'hidden'}
            exit= 'exit'
            >
                <h4>Technologies used: </h4>
                <ul className='tech-list'>
                    {project.technologies.map(tech => {
                        return(
                            <li key={tech}>{tech}</li>
                        )
                    })}
                </ul>
            </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default Card;