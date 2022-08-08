import React from "react";
import {Link} from "react-router-dom";

function NotFound()
{
        return (
            <React.Fragment>
            <h3 className="text-muted text-center my-5">No Page Found.</h3>
            <div className="text-center">
                <Link to="/" className="text-decoration-none">Dashboard</Link> 
            </div>
            </React.Fragment>
        );
}

export default NotFound;