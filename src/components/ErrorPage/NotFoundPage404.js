import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage404 =() =>{
return <div>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
    <Link to="/">Go Home</Link>
    </div>
}
export {NotFoundPage404}
