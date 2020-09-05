import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ project, handleProjectNum, projectNum }) => {
    const variants = {
        // focus: {width: '100%'},
        notFocused: {width: '20%'},
    }
    return (
        <motion.div className='project-card' onClick={() => {handleProjectNum(project.id)}}
            variants={variants}
            style={{overflow: 'hidden'}}
            initial='notFocused'
            // animate={(projectNum === project.id) ? 'focus' : 'notFocused'}
            >
                <a href='https://github.com/'><img src={project.img} alt={project.name}/></a>
                <h2 className='project-name'>{project.name}</h2>
                <AnimatePresence>
                    {projectNum === project.id &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                            <h4 className="list-title">Technologies used: </h4>
                            <ul className="list">
                                {project.technologies.map(tech => {
                                    return(
                                        <li key={tech}>{tech}</li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    }
                </AnimatePresence>
        </motion.div>
    )
}

export default Card;