import React ,{Component} from 'react';
import './Content5.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
class Content5 extends Component{

    render(){

        return(
            <div className='content5'>
               <FontAwesomeIcon  className="icon" icon={ faPrint}></FontAwesomeIcon>
              <h1>print Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content5
