import React ,{Component} from 'react';
import './Content1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";
import { faMobile} from "@fortawesome/free-solid-svg-icons";
// import './Content2.css';
// import './Content3.css';
import {faAppStoreIos} from "@fortawesome/free-brands-svg-icons";
// import './Content4.css';
import {faPrint} from "@fortawesome/free-solid-svg-icons";
// import './Content5.css';
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
// import './Content6.css';
class Content1 extends Component{

    render(){

        return(
            <div className='divhi'>
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={faDesktop}></FontAwesomeIcon>
              <h1 class="h1">Web Design</h1>
              <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
              </div>
              <div className='content1'>
            <FontAwesomeIcon  className="icon" icon={ faFileCode}></FontAwesomeIcon>
           <h1  class="h1">Web Development</h1>
           <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={ faMobile}></FontAwesomeIcon>
              <h1 class="h1">App Design</h1>
              <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={faAppStoreIos}></FontAwesomeIcon>
              <h1 class="h1">ios Design</h1>
              <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={ faPrint}></FontAwesomeIcon>
              <h1 class="h1">print Design</h1>
              <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
            <div className='content1'>
               <FontAwesomeIcon  className="icon" icon={faMobileScreenButton}></FontAwesomeIcon>
              <h1 class="h1">eBook Design</h1>
              <p class="p">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio recusandae expedita ullam <br/>ipsa, esse voluptas fugiat </p>
            </div>
           </div>
  
  )
}
}
export default Content1
