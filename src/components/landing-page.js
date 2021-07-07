import React from "react";

const LandingPage = (props) => {
    return (
        <section id="landing-page">
            <div id="lead">
            <h1>Daemon Williams</h1>
            <p>I am an eighteen year old Software Developer & Computer Science student. Passionate about all things technology & searching for exciting growth opportunities.</p>
            </div>
            <div id="landing-buttons">
            <a className="btn" href="#">Contact Me</a>
            <a className="btn" href="resume.pdf">Download Resume</a>
            </div>
        </section>
    )
}

export default LandingPage;