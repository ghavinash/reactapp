import React from 'react';
import User from './user';
import PropTypes from 'prop-types';

class Header extends React.Component
{
    static propTypes = {
        addUser : PropTypes.func,
    }

    render(){
        return(
        <React.Fragment>
            <div className='text-center'>
                <User addUser={this.props.addUser} logout={this.props.logout}/>
                {/* <button onClick={this.props.loadUsers} className='btn btn-success'>load sample users</button> */}
            </div>
            <header>
                <span><h5 className='text-center text-warning my-4'><b className='text-muted'>======</b>User's List<b className='text-muted'>======</b></h5></span>                
            </header>
        </React.Fragment>
        );

    }
}

export default Header;