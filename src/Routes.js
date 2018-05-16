import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Contact from './Contact'
import UpdateContact from './UpdateContact'
import AddContact from './AddContact'




class Routes extends React.Component{
  render(){
    return (
      <div>
        <Route  exact path="/contacts" component={Contact} />
        <Route exact path={"/contacts/:id"}   render={(props)=><UpdateContact {...props}/>}/>
        <Route exact path="/contacts/delete" render={()=><Redirect to="/contacts" />} />
        <Route  exact path="/add_contact" component={AddContact} />
      </div>
    )
  }
}

export default Routes
