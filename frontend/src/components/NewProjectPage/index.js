import { set } from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { createProject } from "../../store/projects";
import "./NewProject.css";

function NewProjectPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [pledged, setPledged] = useState(0);
    const [investors, setInvestors] = useState(0);
    const [projectStatus, setProjectStatus] = useState("Incomplete");

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            description,
            userId: sessionUser.id,
            goal,
            startDate,
            endDate,
            pledged,
            investors,
            projectStatus
        }
        return dispatch(createProject(data));
    }

    if (!sessionUser) {
        return null;
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="project-form-input">
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required>
                    </input>
                </div>
                <div className="project-form-input">
                    <label>
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                    </textarea>
                </div>
                <div className="hidden">
                    <label>
                        User Id
                    </label>
                    <input
                        type="number"
                        value={sessionUser.id}>
                    </input>
                </div>
                <div className="project-form-input">
                    <label>
                        Goal
                    </label>
                    <input
                        type="number"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        required>
                    </input>
                </div>
                <div className="hidden">
                    <label>
                        Start Date
                    </label>
                    <input
                        type="date"
                        value={startDate}>
                    </input>
                </div>
                <div className="project-form-input">
                    <label>
                        End Date
                    </label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required>
                    </input>
                </div>
                <div className="hidden">
                    <label>
                        Pledged
                    </label>
                    <input
                        type="number"
                        value={pledged}>
                    </input>
                </div>
                <div className="hidden">
                    <label>
                        Investors
                    </label>
                    <input
                        type="number"
                        value={investors}>
                    </input>
                </div>
                <div className="hidden">
                    <label>
                        projectStatus
                    </label>
                    <input
                        type="text"
                        value={projectStatus}>
                    </input>
                </div>
                <button type="submit">Create Project</button>
                <a href="/projects">Cancel</a>
            </form>
        </div>
    )
}

export default NewProjectPage;
