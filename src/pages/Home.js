import React from "react";
import'./Home.css';
import{Link} from 'react-router-dom'

const Home=()=> {
    return (
            <div>
    <body>
    <a><header className="header"/></a>
        <img src="../images/logo-copy2.png" alt="" width="300" height="30"/>
        <nav className="navbar">
            
        {/* <a href="/HOME"className="yy">HOME  </a>
        <a href="/ABOUT"className="yy">ABOUT  </a>
        <a href="/ACCOMPLISHMENTS"className="yy">ACCOMPLISHMENTS</a>
        <a href="/RESUME"className="yy">RESUME  </a>
        <a href="/SKILLS"className="yy">SKILLS   </a>
            <a href="/CONTACT"className="yy">CONTACT </a> */}

            <b><Link to="/skills" className="yy">skills</Link></b>
            <b><Link to="/resume" className="yy">resume</Link></b>
            <b><Link to="/contact" className="yy">contact</Link></b>
            <b><Link to="/about" className="yy">About</Link></b>
            <b><Link to="/home" className="yy">Home</Link></b>
            <b><Link to="/ACCOMPLISHMENTS" className="yy">ACCOMPLISHMENTS</Link></b>

            
        </nav>
        <header/>
    <section className="home">
        <div className="home-content">
            <h1><b>IAM STEVE BALLMER </b></h1>
            <div>Obviously i am a web designer. web designer with over 3 years of experience. experienced with all stages of he design cycle for dynamic web design projects
            </div>
            <div>
            <a href="#" className="btn">Hire me</a>
            <a href="#" className="btn2">Download CV 
                <img src="../images/lastlogo.png" alt="" width="50" height="20"/>
            </a>
            </div>
        </div>
    </section>
    </body>
    </div>
 );
}
export default Home