import * as sessionActions from '../../store/session';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import "./DemoLogin.css"

function DemoLogin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
            .then(history.push("/"))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="login-prompt">
                    <p>Login as Demo User?</p>
                </div>
                <div className="login-confirm">
                    <button type="submit">Log in</button>
                    <a href="/login">Cancel</a>
                </div>
            </form>
        </div>
    )
}

export default DemoLogin;
