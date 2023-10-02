import React ,{Component} from 'react';
import './Content2.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";
class Content2 extends Component{

    render(){

        return(
            <div className='content2'>
               <FontAwesomeIcon  className="icon" icon={ faFileCode}></FontAwesomeIcon>
              <h1>Web Development</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content2
