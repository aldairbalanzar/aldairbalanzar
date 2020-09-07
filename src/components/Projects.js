import React, { useState } from 'react';
import Card from './Card';
import projects from '../text/projects_text';
import useSound from 'use-sound';
import bop from '../media/Sound2.mp3';
import woosh from '../media/Sound3.mp3';
import decline from '../media/Sound4.mp3';

    const Projects = () => {

    const [projectNum, setProjectNum] = useState(0);
    const [bopSound] = useSound(bop)
    const [wooshSound] = useSound(woosh)
    const [declineSound] = useSound(decline)

    const handleProjectNum = (projectId) => {
        if(projectNum !== projectId) {
            console.log(projectId)
            bopSound()
            setProjectNum(projectId)
        } else {
            console.log(projectNum)
            setProjectNum(0)
            declineSound()
        }
    }

    return (
        <section className='projects-container'>
            {/* {navState === 1 && <Cover isNavChanging={isNavChanging}/>} */}
            {projects.map(project => {
                return(
                    <Card key={project.id} project={project} handleProjectNum={handleProjectNum} projectNum={projectNum} 
                    bopSound={bopSound}
                    wooshSound={wooshSound}
                    />
                )
            })}
        </section>
    )
}

export default Projects;