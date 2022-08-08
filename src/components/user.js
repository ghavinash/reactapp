import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function User(props)
{
    User.propTypes = {
        addUser : PropTypes.func,
    }

    const nameref = useRef();
    const emailref = useRef();
    const dobref = useRef();
    const phoneref = useRef();
    const educationref = useRef();

   /**
    * CreateUser is a function that takes an event as an argument and prevents the default action of
    * the event. It then creates a userdetail object with the values of the form fields and passes it
    * to the addUser function. It then resets the form and logs the userdetail object to the console
    * @param event - The event object is a JavaScript event that is sent to an element when an event
    * occurs on it.
    */
    const CreateUser = (event) =>{
              
        event.preventDefault();

        const userdetail = {
            name : nameref.current.value, 
            email : emailref.current.value, 
            dob : dobref.current.value, 
            phone : phoneref.current.value, 
            education : educationref.current.value, 
        };
      
        props.addUser(userdetail);

        event.currentTarget.reset();
    }
    
    return (     
        <React.Fragment>
            <h4 className='text-muted text-center my-3'>User</h4>
            <Link to="/" className='text-decoration-none'><p className="text-center">Dashboard</p></Link> 
            <Link to="/app" className='text-decoration-none'><p onClick={props.logout} className="text-center">Logout</p></Link> 
            <div className='container my-3'>
                <div className='row'>
                    <div>
                        <table className='table'>
                        <tbody>
                            <tr>
                            <td> 
                        <form onSubmit={CreateUser} id='formset'>
                            <div className='mt-3 mb-2'>
                                <input type="text" name='name'  ref={nameref} className="form-control" placeholder="user name"/>
                            </div>
                            <div className='my-2'>
                                <input type="email" name='email'  ref={emailref} className="form-control" placeholder="user email"/>
                            </div>
                            <div className='my-2'>
                                <input type="date" name='dob'  ref={dobref} className="form-control" placeholder="dob"/>
                            </div>
                            <div className='my-2'>
                                <input type="tel" name='phone'  ref={phoneref} className="form-control" placeholder="phone no"/>
                            </div>
                            <div className='my-2'>
                                <input type="text" name='education'  ref={educationref} className="form-control" placeholder="education"/>
                            </div>
                            <button type='submit' className='btn btn-primary my-2'>create</button>                       
                        </form>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default User;