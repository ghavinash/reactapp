import React from 'react';
import './App.css';
import Datatable from './components/datatable';
import Header from './components/header';
// alert('react');

class App extends React.Component {
  render(){return (
    <React.Fragment>
      
      <div>
        <div>
          <Header header="welcome page"/>
        </div>
        <Datatable />
      </div>
    </React.Fragment>
  );}
}
export default App;