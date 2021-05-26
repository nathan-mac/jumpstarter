import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function NewProjectPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if () {
            setErrors([]);
            return()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        </form>
    )
}

export default NewProjectPage;
