import React, { useState } from 'react';
import Cover from './Cover';
import Card from './Card';
import projects from '../text/projects_text';

    const Projects = ({ isNavChanging }) => {
    const [projectNum, setProjectNum] = useState(0);

    const handleProjectNum = (projectId) => {
        console.log(projectId)
        setProjectNum(projectId)
    }

    return (
        <div className='projects-container'>
            <Cover isNavChanging={isNavChanging}/>
            {projects.map(project => {
                return(
                    <Card project={project} handleProjectNum={handleProjectNum} projectNum={projectNum}/>
                )
            })}
        </div>
    )
}

export default Projects;