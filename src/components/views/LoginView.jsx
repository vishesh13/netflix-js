import React from 'react';
import './stylesheet.css';

/**
 * View Component of Intial LoggedIn Page
 */
const LoginView = ({ handleLoginRequest }) => {
    return (
        <div className="container" style={{ height: "100vh" }}>
            <div className="app-bar">
                <img style={{ position: "fixed", objectFit: "contain", left: "20px", width: "80px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
                <div style={{ margin: "13% 0% 0% 25%" }}>
                    <h1 className="h1-caption">Who's watching?</h1>
                    <div className="login-container">
                        <div>
                            <img className="login-image"
                                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" onClick={handleLoginRequest} alt="Netflix Logo" />
                            <span className="profile-name">User 1</span>
                        </div>
                        <div>
                            <img className="login-image"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix Logo" />
                            <span className="profile-name">User 2</span>
                        </div>
                        <div>
                            <img className="login-image"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Netflix Logo" />
                            <span className="profile-name">User 3</span>
                        </div>
                        <div>
                            <img className="login-image"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="Netflix Logo" />
                            <span className="profile-name">User 4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginView;