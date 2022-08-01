import React from 'react';
import '../styles/styles.css';

class Datatable extends React.Component
{
    render(){
        return(
            <React.Fragment>
            <div className='container my-2'>
            <table border='2'>
                <tbody>
                    <tr>
                    <td className='text-center'>
                      <form>
                        <div className='form-group my-2'>
                            <input type="text" className='form-control' placeholder='user name'/>
                        </div>
                            <button type="submit" className='btn btn-secondary btn-sm mb-2'>view user-&gt;</button>
                      </form>   
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </React.Fragment>
        );
    }
}

export default Datatable;