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
        <form onSubmit={handleSubmit}>
            <ul className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="form-input">
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required>
                    </input>
                </label>
            </div>
            <div className="form-input">
                <label>
                    Description
                    <input
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                    </input>
                </label>
            </div>
            <div className="hidden">
                <label>
                    User Id
                    <input
                        type="number"
                        value={sessionUser.id}>
                    </input>
                </label>
            </div>
            <div className="form-input">
                <label>
                    Goal
                    <input
                        type="number"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        required>
                    </input>
                </label>
            </div>
            <div className="hidden">
                <label>
                    Start Date
                    <input
                        type="date"
                        value={startDate}>
                    </input>
                </label>
            </div>
            <div className="form-input">
                <label>
                    End Date
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required>
                    </input>
                </label>
            </div>
            <div className="hidden">
                <label>
                    Pledged
                    <input
                        type="number"
                        value={pledged}>
                    </input>
                </label>
            </div>
            <div className="hidden">
                <label>
                    Investors
                    <input
                        type="number"
                        value={investors}>
                    </input>
                </label>
            </div>
            <div className="hidden">
                <label>
                    projectStatus
                    <input
                        type="text"
                        value={projectStatus}>
                    </input>
                </label>
            </div>
            <button type="submit">Create Project</button>
        </form>
    )
}

export default NewProjectPage;
