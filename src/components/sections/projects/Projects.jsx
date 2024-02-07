import React from 'react'
import "../projects/projects.css"

const Projects = () => {
    return (
        <>
            <div id='Projects' className='projects'>
                <h2>PROJECTS</h2>
                <div className='projects-cards'>
                    <Travel />
                    <Movies />
                    <Gym />
                </div>
            </div>
        </>

    )
}

export default Projects