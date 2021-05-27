import * as sessionActions from '../../store/session';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <ul className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <p>Login as Demo User?</p>
            <div>
                <button type="submit">Log in</button>
                <a href="/login">Cancel</a>
            </div>
        </form>
    )
}

export default DemoLogin;
