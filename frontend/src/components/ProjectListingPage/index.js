import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './ProjectListing.css';

function ProjectListingPage() {
    const projects = useSelector((state) => state.projects.all);

    return (
        <div className="projects-container">
            <a href="/projects/new">Create a Project</a>
            {
                projects.map((project) => {
                    return (
                        <div key={`${project.id}`} className="projects-item">
                            <a className="projects-item-title">{project.name}</a>
                            <a className="projects-item-link" href={`/projects/${project.id}`}>link</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectListingPage;
