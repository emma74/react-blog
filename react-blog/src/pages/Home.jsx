import { NavLink } from "react-router-dom";

const Home = () => {
  return (
  <>
    <div className="bg-success text-white p-5 mb-4 rounded-3">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to React-Blog</h1>
        <p className="fs-4">This is a simple blog application built with React, Bootstrap and JSON Placeholder API.</p>
        <NavLink to={"/posts"} className="btn btn-light btn-lg">View Posts</NavLink>
      </div>
    </div>
    <div className="container">
      <h2>Latest post</h2>
      <p>Navigate to the posts page to see all available blog posts.</p>
    </div>
  </>
  );
}
export default Home;