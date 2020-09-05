import React, { useState } from 'react';
import Card from './Card';
import projects from '../text/projects_text';

    const Projects = () => {

    const [projectNum, setProjectNum] = useState(0);

    const handleProjectNum = (projectId) => {
        console.log(projectId)
        setProjectNum(projectId)
    }

    return (
        <section className='projects-container'>
            {/* {navState === 1 && <Cover isNavChanging={isNavChanging}/>} */}
            {projects.map(project => {
                return(
                    <Card key={project.id} project={project} handleProjectNum={handleProjectNum} projectNum={projectNum}/>
                )
            })}
        </section>
    )
}

export default Projects;