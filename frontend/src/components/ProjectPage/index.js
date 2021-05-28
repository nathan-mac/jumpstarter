import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getProjectDetail } from "../../store/projects";
import * as sessionActions from "../../store/session";
import { getOneUser } from "../../store/users";
import './Project.css';

function ProjectPage() {
    const dispatch = useDispatch();
    const project = useSelector((state) => state.projects.current);
    const owner = useSelector((state) => state.users.current);
    const { id } = useParams();
    console.log(id, project, owner);

    useEffect(() => {
        dispatch(getProjectDetail(id))
    }, [dispatch, id])

    useEffect(() => {
        if (project.userId) {
            dispatch(getOneUser(project.userId))
        }
    }, [dispatch, project])

    return (
        <>
            {project && (<div className="project-container" >
                <div className="project-title">
                    <p className="project-title">{`${project.name}`}</p>
                </div>
                <div className="project-header">
                    <p className="project-status">Status: {`${project.projectStatus}`}</p>
                    <p className="project-owner">Owner: {`${owner.username}`}</p>
                    <div className="project-goal">
                        <p className="project-goal">Goal: {`$${project.goal}`}</p>
                        <p className="project-pledged">Pledged: {`$${project.pledged}`}</p>
                        <p className="project-backers">Backers: {`${project.investors}`}</p>
                    </div>
                </div>
                <div className="project-body">
                    <div className="project-body-header">
                        <p className="project-body-header">About this project</p>
                    </div>
                    <div className="project-description">
                        <p className="project-description">{`${project.description}`}</p>
                    </div>
                </div>
                <div className="project-actions">
                    <a href={`/projects/${id}/support`}>Support this project!</a>
                </div>
            </div>)}
        </>
    )
}

export default ProjectPage;
