import React from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom';

class Welcome extends React.Component
{
  render(){
        return(
            <React.Fragment>
            <div>
                <div className='Container'>First React App</div>
                <h1 className='text-center text-muted my-2'>Welcome</h1>
                <div className='d-flex justify-content-center'>
                <Link to="/search" className='text-decoration-none'>Search</Link>
                <Link to="/app" className='text-decoration-none mx-2'>View</Link>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Welcome;