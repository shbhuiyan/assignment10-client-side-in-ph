import { FaUserLarge } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/equipments'}>All Equipments</NavLink></li>
        <li><NavLink to={'/add'}>Add Equipment </NavLink></li>
        <li><NavLink to={'/myList'}>My List</NavLink></li>
    </>

    return (
        <div className="flex justify-between items-center bg-base-100 py-2">
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

              <Link className="text-2xl md:text-3xl font-bold" to={'/'}><span className="text-white bg-black py-1 pl-3 pr-1 rounded-l-md">Sports</span><span className="text-black bg-amber-500 py-1 pr-3 pl-1 rounded-r-md">Hub</span></Link>

              </div>

            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base font-medium">
                {Links}
              </ul>
              
            </div>
            <div className="">

              <div className="drawer drawer-end">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                    {/* Page content here */}
                    <div className="p-2 border-2  rounded-badge">
                    <label htmlFor="my-drawer-4" className="flex justify-end text-2xl hover:cursor-pointer"><FaUserLarge/></label>
                    </div>

                  <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-40 md:w-80 p-4">
                      {/* Sidebar content here */}
                      <li><Link to={'/signin'} className="text-lg font-semibold bg-yellow-500 text-black">Login Now</Link></li>
                    </ul>
                  </div>
              </div>

            </div>
        </div>
    );
};

export default Navbar;