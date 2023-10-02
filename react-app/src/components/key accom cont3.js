import React ,{Component} from 'react';
import './Content3.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile} from "@fortawesome/free-solid-svg-icons";
class Content3 extends Component{

    render(){

        return(
            <div className='content3'>
               <FontAwesomeIcon  className="icon" icon={ faMobile}></FontAwesomeIcon>
              <h1>App Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
        )
    }
}
export default  Content3
