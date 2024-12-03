import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/equipments'}>All Equipments</NavLink></li>
        <li><NavLink to={'/add'}>Add Equipment </NavLink></li>
        <li><NavLink to={'/myList'}>My List</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {Links}
                </ul>
              </div>
              <Link className="text-2xl md:text-3xl font-bold" to={'/'}><span className="text-white bg-black py-1 pl-3 pr-1 rounded-l-md">Sports</span><span className="text-black bg-amber-500 py-1 pr-3 pl-1 rounded-r-md">Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base font-medium">
                {Links}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;