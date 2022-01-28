 
import './App.css';
import axios from "axios"
import { Component } from 'react';

class App extends Component{
  
  state ={
users:[]
  }

componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res => {
  console.log(res.data)
  const users = res.data;
  this.setState({users})
})
 }
 render (){

  return ( 
    <div> 
   {this.state.users.map(user => <p key={user.id}>  
  <span className='green'> <span className='title'> Name :</span> {user.name} </span>
  <span className='red'> <span className='title'> Email:</span>  {user.email} </span>
<span className='blue'> <span className='title'>  Phone:</span> {user.phone} </span>
<span className='orange'><span className='title'> Suite: </span>  {user.address.suite} </span>
<span className='violet'> <span className='title'> City: </span>{user.address.city} </span>
<span className='pink'> <span className='title'>  Street: </span>{user.address.street} </span>
  
  </p>
 
     
   )}

    </div>
  )
}

}

export default App;
