import React from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

class AddContact extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      age:0,
      tel:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  addContact=()=>{
    axios.post("/contacts",{...this.state})
  }

  render(){
    return (
      <div>
      <h1> Add Contact </h1>
        <form>
        <br/>
          <label>Name: <input type='text' name='name' onChange={this.handleChange}/></label><br/>
          <label>Phone: <input type='text'  name='tel'onChange={this.handleChange}/></label><br/>
          <label>Email: <input type='text'  name='email' onChange={this.handleChange}/></label><br/>
            <Link to='/contacts'><input type='button' value='Add' onClick={this.addContact}/></Link>

        </form>

      </div>
    )
  }
}

export default AddContact
