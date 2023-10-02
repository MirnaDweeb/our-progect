import React ,{Component} from 'react';
class Forms extends Component{
    state ={
        name :''
    }
    handlechange=(e)=>{
        this.setState(
            {name : e.target.value}
        )
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.name);
    }
    render(){
        return(
            <div>
                <h1> key Accomplishments</h1>
                <p>Lorem Ipsum is simply dummy text  <br/> of the printing
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handlechange}/>
                    <select onChange={this.handlechange}>
                        <option value="selection1">selection1</option>
                        <option  value="selection2">selection2</option>
                        <option  value="selection3">selection3</option>
                    </select>
                    <button>register</button>
                </form>
                {this.state.name}
            </div>
        )
    }
}
export default Forms