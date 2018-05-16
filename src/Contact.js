import React from 'react'
import axios from 'axios'
import ContactItem from './ContactItem'



class Contact extends React.Component{

  constructor(props){
    super(props)
    this.state={
        list:[]
    }
  }

componentDidMount(){
  axios.get('/contacts').then(
    res =>
    {
      this.setState({
          list:res.data
      })
    }
  )
}

  render(){
    return (
      <div className='contact-container'>

      <div style={{display:'flex', flexWrap:'wrap'}}>
          {this.state.list.map((el,i)=>{
            return <ContactItem contact={el}/>
          })}
        </div>
      </div>
    )
   }
}

export default Contact
