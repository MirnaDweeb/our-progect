import React ,{Component} from 'react';
import './students.css'
class Students extends Component{
      
    render(){
        console.log("render");        //const  {id , name,age} = this.props; 
        const {students} = this.props;
        const _students = students.map((student) =>
        {
            return student.score > 30 ? (
            
                       
                        <div  className="std" key={student.id}>
                                <p>{student.id}</p>
                                <p>{student.name}</p>
                                <p>{student.age}</p>
                                <p>{student.score}</p>
                                
                                 </div>
            ) : null
                        
            } 
        
        )                          
      return(
        <div>
        {_students}
        </div>
      )
    }
}
export default Students;