import React from 'react'
import './About.css'
const About =() => {
    return(
        <div>
         <div className="alla">
        <img className='amira' src="man1.png" alt=""/>
        <div className="content">
        <h1>A LITTLE ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime vel, nulla, sapiente explicabo id iure pariatur cum qui nostrum unde mollitia? Sequi, voluptatum provident.</p>
        <ul>
        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet consectetur.</li>
        <li><i className="fas fa-check"></i>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
        </ul>
        <div className="new">
        <div className='col1'><strong>Location </strong><p class="bord">New York,USA</p></div><br/>
        <div className="col2"><strong>Age </strong><p class="bord">30 Year</p> </div><br/>
        <div className="col3"><strong>Freelancer </strong><p class="bord">Available</p></div><br/>
        <div className="col4"><strong>Phone </strong> <p class="bord">031 555 679</p></div><br/>
        <div className="col5"><strong>Email </strong><p class="bord"> Steve@gmail.com</p></div><br/>
        <div className="col6"><strong>Linkedin </strong><p class="bord">Steve.ballmer</p></div><br/><br/>
        </div>
        <button>Contact Me</button>
        </div>
        </div>
    </div>
       );
};
export default About;