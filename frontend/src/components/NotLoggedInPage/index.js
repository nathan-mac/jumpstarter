function NotLoggedInPage() {
    return (
        <div className="not-logged-container">
            <div>
                <p>You must log in to complete this action.</p>
            </div>
            <div>
                <a href="/login">Log in</a>
            </div>
            <div>
                <a href="/login/demo">Demo log in</a>
            </div>
            <div>
                <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default NotLoggedInPage;
