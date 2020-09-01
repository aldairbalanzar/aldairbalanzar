import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projects from '../text/projects_text';
import Card from './Card';

const Carousel = () => {

    const [projectNum, setProjectNum] = useState(0);

    const handleProjectNum = (operation) => {
        if(operation === 'prev') {
            setProjectNum(projectNum - 1)
        }
        if(operation === 'next') {
            setProjectNum(projectNum + 1)
        }
        if(projectNum === 0 && operation === 'prev') {
            setProjectNum(0)
        }
        if(projectNum === (projects.length - 1) && operation === 'next') {
            setProjectNum(projects.length - 1)
        }
    }
    
    const variants = {
        projectDisplay: { opacity: [0, 0.5, 1], x: [-100, -50, 0], display: ['none', 'block', 'block'] },
        projectHide: { opacity: [1, 0.5, 0], x: [0, -50, 100], display: ['block', 'none', 'none'] },
    }

    useEffect(() => {

    }, [projectNum])

    return (
        <div className='carousel'>
            <i className={projectNum === 0 ? `hidden-arrow` : `arrow fas fa-angle-left`} onClick={()=>{handleProjectNum('prev')}}></i>
            {projectNum === 0 && <Card project={projects[0]} porjectNum={projectNum} />}
            {projectNum === 1 && <Card project={projects[1]} porjectNum={projectNum} />}
            {projectNum === 2 && <Card project={projects[2]} porjectNum={projectNum} />}
            {projectNum === 3 && <Card project={projects[3]} porjectNum={projectNum} />}
            <i className={projectNum === (projects.length - 1) ? `hidden-arrow` : `arrow fas fa-angle-right`} onClick={()=>{handleProjectNum('next')}}></i>
        </div>
    )
}

export default Carousel;

     {/* {projects.map(project => {
                return(
                <motion.div key={project.id} className='project'
                    variants={variants}
                    style={{overflow: 'hidden'}}
                    initial={{x: -30}}
                    animate={projectNum === project.id ? 'projectDisplay' : 'projectHide'}
                    transition={{ duration: .3 }}
                >
                    <a href={project.website_url}>< img src={project.img} alt={project.name}/></a>
                </motion.div>
                )
            })} */}