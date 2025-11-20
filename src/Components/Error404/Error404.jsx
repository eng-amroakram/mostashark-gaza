import React from "react";
import './Error404.css'

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="Error404">
      <h1>😢</h1>
      <h2>
        The Page you were looking for, couldn&apos;t be found.
      </h2>
      <p >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        <br/>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="button-Error404"> 
      <button className='Back'>
                <Link to="" className="nav-link mx-2"> Back</Link>

       </button>
                 <button className='Back to Home'>
                <Link to="/Home" className="nav-link mx-2"> Back to Home</Link>

                 </button>
       
      </div>
    </div>
  );
};

export default NotFoundPage;
