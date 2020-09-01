import React from 'react'
import { motion } from 'framer-motion';

const Card = ({ project, handleProjectNum, projectNum }) => {
    const variants = {
        focus: {width: '100%'},
        notFocused: {width: '20%'},
    }
    return (
        <motion.div className='project-card' onClick={() => {handleProjectNum(project.id)}}
            variants={variants}
            style={{overflow: 'hidden'}}
            initial='notFocused'
            animate={(projectNum === project.id) ? 'focus' : 'notFocused'}
        >
            <a ><img src={project.img} alt={project.name}/></a>
            <h2>{project.name}</h2>
            <h4 className="list-title">Technologies used: </h4>
            <ul className="list">
                {project.technologies.map(tech => {
                    return(
                        <li key={tech}>{tech}</li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default Card;
