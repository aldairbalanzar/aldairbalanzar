import React from 'react'

const Card = ({ project, projectNum }) => {
    console.log(project)
    return (
        <div className='project'>
            <a href={project.website_url}><img src={project.img} alt={project.name}/></a>
            <h3 className="list-title">Technologies used: </h3>
            <ul className="list">
                {project.technologies.map(tech => {
                    return(
                        <li key={tech}>{tech}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Card;
