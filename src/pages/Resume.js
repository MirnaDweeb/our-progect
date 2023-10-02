import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Resume.css'
//import{Link} from 'react-router-dom'



class Resume extends React.Component {
    render(){
        return(
        <div className='Resume'>
            <div class="all">
                    <div class="l0"></div>
                    <div class="l1"></div>
                    <div class="l2"></div>
                    <div class="l3"></div>

                    {/* <b><Link to="/skills">skills</Link></b>
                    <b><Link to="/resume">resume</Link></b>
                    <b><Link to="/contact">contact</Link></b>
                    <b><Link to="/about">About</Link></b>
                    <b><Link to="/home">Home</Link></b> */}




                <h1 className='pr-title'>professional experience</h1>
                <div class="someword">Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor. Lorem, ipsum.</div>

                <div class="maincircle"><i className='star'><FontAwesomeIcon icon="fa fa-star"/></i></div>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>


                <div class="before">2015-2020</div>
                <div class="after">
                    UI Designer<br/>
                    Vivo Senior Designer<br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamanonummy nibh euismod tincidunt ut laoreet dolore magna<br/>
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis';
                </div>

                <div class="after2">2012-2015</div>
                <div class="before2">
                    UI Designer <br/>
                    Vivo Senior Designer <br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamanonummy nibh euismod tincidunt ut laoreet dolore magna <br/>
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis';
                </div>
                

                <div class="before3">
                2012-2008
                </div>
                <div class="after3">
                    UI Designer <br/>
                    Vivo Senior Designer <br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamanonummy nibh euismod tincidunt ut laoreet dolore magna <br/>
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis';
                </div>

            </div>
        </div>
                    
        )
    }
}
export default Resume