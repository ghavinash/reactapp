import React from 'react';

class Header extends React.Component
{
    render(){
        return(
            <header>
                <span><h5 className='text-center text-warning'><b className='text-muted'>======</b>User's List<b className='text-muted'>======</b></h5></span>                
            </header>
        );
    }
}

export default Header;