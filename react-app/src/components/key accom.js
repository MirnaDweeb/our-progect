import React ,{Component} from 'react';
import './Content1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
class Content1 extends Component{

    render(){

        return(
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={faDesktop}></FontAwesomeIcon>
              <h1>Web Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content1
