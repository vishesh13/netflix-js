import React, { useState, useEffect } from 'react';
import './stylesheet.css';

/**
 * Netflix Header bar view
 */
const ApplicationBarView = () => {
    const [displayScrollEffect, handleScrollEffect] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? handleScrollEffect(true) : handleScrollEffect(false);
        })
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, [])
    return (
        <div className={`app-bar ${displayScrollEffect && "container"}`}>
            <img style={{ position: "fixed", objectFit: "contain", right: "20px", width: "30px" }}
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo" />
            <img style={{ position: "fixed", objectFit: "contain", left: "20px", width: "80px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
        </div>
    )
}

export default ApplicationBarView;
