import { NavLink } from 'react-router-dom';
const Navbar = () => {

  return (
  <navbar className="navbar navbar-dark fs-4" style={{backgroundColor: "#00695c"}}>
    <div className='container'>
      <NavLink to={"/"} className="navbar-brand fs-4">React-Blog</NavLink>
      <ul className='navbar-nav flex-row'>
        <li className='nav-item me-3'>
          <NavLink to={"/"} className="nav-link fs-5">Home</NavLink>
        </li>
        <li className='nav-item me-3'>
          <NavLink to={"/posts"} className="nav-link fs-5">Posts</NavLink>
        </li>
        <li className='nav-item me-3'>
          <NavLink to={"/about"} className="nav-link fs-5">About</NavLink>
        </li>
        <li className='nav-item me-3'>
          <NavLink to={"/contact"} className="nav-link fs-5">Contact</NavLink>
        </li>

      </ul>

    </div>
  </navbar>
  );
}
export default Navbar;