import React from 'react';
import {Link, useParams} from 'react-router-dom';

/**
 * It returns a `<h4>` element with a `<Link>` element inside it
 */
function UserList()
{
    const {username} = useParams();
    
    return(<h4 className='text-center text-muted'>URL params username is : <Link to="/app" className='text-decoration-none'>{username}</Link></h4>);               
}

export default UserList;