import "./NotLoggedIn.css";

function NotLoggedInPage() {
    return (
        <div className="not-logged-container">
            <div className="login-prompt">
                <p>You must log in to complete this action.</p>
            </div>
            <div className="login-links">
                <div className="login-link">
                    <a href="/login">Log in</a>
                </div>
                <div className="login-link">
                    <a href="/login/demo">Demo log in</a>
                </div>
                <div className="login-link">
                    <a href="/signup">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default NotLoggedInPage;
