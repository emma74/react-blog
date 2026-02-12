import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center m-5">
      <h1 className="display-4">404 - Page Not Found</h1> 
      <p className="lead">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3">Go back to Home</Link>
    </div>
  );
}
export default NotFound;