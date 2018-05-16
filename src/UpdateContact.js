import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UpdateContact extends React.Component{

  constructor(props){
    super(props)
    this.state={
      name:'',
      tel:0,
      email:'',

    }
  }

  componentDidMount(){
    axios.get("/contact/"+(this.props.match.params.id)).then(
      res =>
      {
        this.setState({
            name:res.data.name,
            tel:res.data.tel,
            email:res.data.email
        })
      }
    )
  }

  handleChange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  editContact=()=>{
    axios.put(`/contact/${this.props.match.params.id}`,{...this.state})
  }


  render(){
    console.log(this.props)
  return (

  <div>
    <div className='contact-inputs'>
      <label>Name: <input type='text' value={this.state.name} name='name' onChange={this.handleChange}/></label><br/>
      <label>Phone: <input type='text' value={this.state.tel} name='tel' onChange={this.handleChange}/></label><br/>
      <label>Email: <input type='text' value={this.state.email} name='email' onChange={this.handleChange}/></label><br/>

      <Link to='/contacts'><input type='button' value='Edit' onClick={this.editContact}/></Link>

    </div>
  </div>
)
}
}

export default UpdateContact
