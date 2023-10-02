import image from "./man1.png"
import React from 'react'
import './App.css';
import About from './About.js';
const App =() => {
  return(
      <div>
        <img src={image}alt="man"/>
      <About/>
     </div>
  );
}
export default App;