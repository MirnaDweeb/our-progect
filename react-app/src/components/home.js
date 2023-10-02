import React from "react"
import { useNavigate } from "react-router-dom"
function Home(){
let navi = useNavigate()
    return(
        <div>

<h1>home</h1>
<button onClick={()=> navi('/about')}>go to about</button>
        </div>
       
    );
}
export default Home