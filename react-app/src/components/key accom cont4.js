import React ,{Component} from 'react';
import './Content4.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAppStoreIos} from "@fortawesome/free-brands-svg-icons";
class Content4 extends Component{

    render(){

        return(
            <div className='content4'>
               <FontAwesomeIcon  className="icon" icon={faAppStoreIos}></FontAwesomeIcon>
              <h1>ios Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content4
