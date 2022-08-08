import React from "react";
import '../styles/styles.css';
import PropTypes from 'prop-types';

class UsersData extends React.Component
{
    static propTypes = {
        details : PropTypes.shape({
            name : PropTypes.string,
            email : PropTypes.string,
            dob : PropTypes.string,
            phone : PropTypes.string,
            education : PropTypes.string,
        }).isRequired,

        updateUser : PropTypes.func.isRequired,
        deleteUser : PropTypes.func.isRequired
    }

    handleChange = event =>{
        const updateuser = {...this.props.details, 
            [event.currentTarget.name] : event.currentTarget.value
        }
        this.props.updateUser(this.props.index, updateuser);
    }
    
    render(){
        return(
            <React.Fragment>
                <tr className="text-center">
                <th className="text-muted col-md-3">
                    <input type="text"  name='name'className="text-center border-0" value={this.props.details.name} onChange={this.handleChange}/>
                </th>
                <td><input type="text"  name='email'className="text-center border-0" value={this.props.details.email} onChange={this.handleChange}/></td>
                <td><input type="text"  name='dob'className="text-center border-0" value={this.props.details.dob} onChange={this.handleChange}/></td>
                <td><input type="text"  name='phone'className="text-center border-0" value={this.props.details.phone} onChange={this.handleChange}/></td>
                <td><input type="text"  name='education'className="text-center border-0" value={this.props.details.education} onChange={this.handleChange}/></td>
                <td>
                    <button onClick={()=>this.props.deleteUser(this.props.index)} className="btn btn-danger">Delete</button>
                </td>
                </tr>
            </React.Fragment>                    
        );
    }
}

export default UsersData;