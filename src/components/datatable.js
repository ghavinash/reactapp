import React, {useRef} from 'react';
import '../styles/styles.css';
import {Outlet, useNavigate} from 'react-router-dom';

function Datatable()
{
    
    const input = useRef();
    const navigate = useNavigate();

    const ViewUser = (e) =>
    {
        e.preventDefault();
        const values = input.current.value;
        navigate(`/search/${values}`);
    }

   
   return( 
    <div className='container'>
        <table border='2' className='my-4'>
            <tbody>
                <tr>
                <td className='text-center'>
                    <form onSubmit={ViewUser}>
                        <div className='form-group my-3'>
                            <input 
                            type="text" 
                            ref = {input}
                            className='form-control' 
                            placeholder='user name'   
                            />
                        </div>
                        <button className='btn btn-secondary btn-sm mb-2'>view user-&gt;</button>
                    </form>   
                </td>
                </tr>
                <tr><td><Outlet/></td></tr>
            </tbody>
        </table>
    </div>
    );   
}

export default Datatable;

