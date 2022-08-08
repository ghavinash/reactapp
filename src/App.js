import React from 'react';
import Header from './components/header';
import Login from './components/Login';
import sampleUsers from './components/sample';
import UsersData from './components/usersdata';
import base, { firebaseApp } from './db';
import firebase from 'firebase';

class App extends React.Component 
{ 
 
  constructor()
  {
    super();
    this.addUser = this.addUser.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
  }

  state = {
    users : {},
    uid: null,
    owner: null
  }

  componentDidMount()
  {
    this.ref = base.syncState(`/users`, 
    {context:this, state:'users'});

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.authHandler({user});
      }
    });
  }
  
  componentDidUpdate()
  {
    localStorage.setItem(JSON.stringify(this.state), JSON.stringify(this.state.users));
  }

  addUser = user => {
    //Take copy of the existing state
    const users = {...this.state.users};
  
    //add new user to that users variable
    users[`user${Date.now()}`] = user;
    
    this.setState({
      users : users
    });
    
  }

  updatedUser = (key, updateUser) =>{
    const users = {...this.state.users};
    users[key] = updateUser;
    this.setState({users : users});
  }

  deleteUser = key =>{
    const users = {...this.state.users};
    users[key] = null;
    this.setState({users : users});
  }

  loadUsers = load =>{ 
    this.setState({
      users :  sampleUsers
    })
  }

  authHandler = async (authData) =>
  {
    // const users = '/users';
    const storeUser = await base.fetch('/users', {context:this});
    if(!storeUser.owner){
      await base.post(`owner`, {
          data : authData.user.uid
      });
    }
    this.setState({
      uid : authData.user.uid,
      owner : storeUser.owner || authData.user.uid
    });
  };
  
  authenticate = (provider) =>{
    // alert(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () =>{
    await firebase.auth().signOut();
    this.setState({
      uid : null
    });
  }

  render(){

    if(!this.state.uid){
      return <Login authenticates = {this.authenticate}/>;
    }
    if(this.state.uid !== this.state.owner){
      return(
        <p>You are not a auhorized user.</p>
      );
    }

    return (
    <React.Fragment>

      <Header addUser={this.addUser} loadUsers={this.loadUsers} logout={this.logout}/>
      <div className="container">
          <table className='table'>
              <thead>
                  <tr className='text-center'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Phone No</th>
                    <th>Education</th>
                    <th>Delete</th>
                  </tr>
                </thead>
            <tbody>
              {Object.keys(this.state.users).map((item) =><UsersData key = {item} index={item} details={this.state.users[item]} 
              updateUser = {this.updatedUser} deleteUser = {this.deleteUser}/>)}
            </tbody>
          </table>
      </div>
    </React.Fragment>
  );
  }
}      

export default App;