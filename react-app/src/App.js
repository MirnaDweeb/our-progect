import  { Component } from 'react';
import './App.css';
// import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactDOM from 'react-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
//import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'
import Content1 from './components/key accom.js';
// import Content2 from './components/key accom cont2.js';
// import Content3 from './components/key accom cont3.js';
// import Content4 from './components/key accom cont4.js';
// import Content5 from './components/key accom cont5.js';
// import Content6 from './components/key accom cont6.js';
//import { faDesktop } from '@fortawesome/free-solid-svg-icons';
// library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef);

//import NavBar from './components/NavBar.js'
// import { BrowserRouter ,Route,Routes } from 'react-router-dom';
// import Home from './components/home.js'; 
// import About from './components/about.js';
// import Contact from './components/contact.js'
// import NotFound from './components/NotFound.js';

//import Blog from './components/Blog.js' ;
//any route not known use *

class App extends Component{
render(){
    return(
    //     <BrowserRouter>
    //      <div className="App">
    // <NavBar/>
    // <Routes>
    //     <Route  exact path="/" element={<Home/>}/>
    //     <Route exact path="/about" element={<About/>}/>
    //     <Route  exact path="/contact" element={<Contact/>}/>
    //     <Route  exact path="*" element={<NotFound/>}/>
    //     </Routes>
    //     </div>
    //     </BrowserRouter>
        <div className='App'>
            <h1 className='font'> Key Accomplishments</h1>
            <p>Lorem Ipsum is simply dummy text <br/> of spring</p>
            <Content1/>
            {/* <Content2/>
            <Content3/>
            <Content4/>
            <Content5/>
            <Content6/> */}
        </div>
            );

} 
}
export default App;