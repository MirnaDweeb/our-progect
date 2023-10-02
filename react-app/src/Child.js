import React,{Component} from "react";

const Child = (props)=>{
return(
    <div>
        child component
        <p>studentName : {props.stdname}</p>
    </div>
)
}

export default Child