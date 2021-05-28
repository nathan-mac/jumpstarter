import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './HomePage.css';

function HomePage() {
    const projects = useSelector((state) => state.projects.all);

    return (
        <>
            <div className="header">
                <p>JumpStarter</p>
            </div>
            <div className="description">
                <p>Create a project, explore interesting projects, and contribute towards what you like!</p>
            </div>
            <div className="projects-container">
                <p>Explore these projects!</p>
                {
                    projects.map((project) => {
                        return (
                            <div key={`${project.id}`} className="projects-items">
                                <span className="projects-status">{project.projectStatus}</span>
                                <a className="projects-item" href={`/projects/${project.id}`}>{project.name}</a>
                                <span className="projects-funds">{`$${project.pledged} / $${project.goal} Pledged`}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomePage;
