import React from 'react';
import '../styles/styles.css';

class Welcome extends React.Component
{
    render(){
        return(
            <div>
                <div className='Container'>First React App</div>
                <h1 className='text-center text-muted my-2'>Welcome</h1>
            </div>
        );
    }
}

export default Welcome;