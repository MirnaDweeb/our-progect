import React ,{Component} from "react";
import './students.css'
class Students extends Component{
    constructor(){
        super();
        console.log("constructor");
    }
    render(){
        console.log("render")
        const {students}=this.props;
        const _students=students.map((students)=>{
            return students.score>0?(
                <div className="std" key={students.id}>
                    <p>{students.id}</p>
                    <p>{students.name}</p>
                    <p>{students.grade}</p>
                    <p>{students.score}</p>
                </div>
            ):null
        })
        return (
            <div>
                {_students}
            </div>
        )
    }
}
export default Students;