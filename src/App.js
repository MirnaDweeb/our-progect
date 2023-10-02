import logo from './logo.svg';
//import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import Contact from './pages/Contact';

import Skills from './pages/Skills';
import './pages/skills.css'

import Resume from './pages/Resume'; 
import './pages/Resume.css'


import {BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
      {/* <Resume/> */}
        <Routes>
          <Route exact path='/' element={< Resume/>}/>

          <Route exact path='/resume' element={< Resume/>}/>

          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>


        </Routes>
      </div>
      </BrowserRouter>
   
  );
}

export default App;
library.add(fab, fas, far)

