import React ,{Component} from 'react';
import './Content6.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
class Content6 extends Component{

    render(){

        return(
            <div className='content6'>
               <FontAwesomeIcon  className="icon" icon={faMobileScreenButton}></FontAwesomeIcon>
              <h1>eBook Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content6
