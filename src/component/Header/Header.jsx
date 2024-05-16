import { NavLink } from "react-router-dom";

const Header = () => {

    {/* as we are using react, we creating a dynamic nav links for navigation button */}
    {/* A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning". */}
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="Statistics">Statistics</NavLink></li>
        <li><NavLink to="Applied">Applied Jobs</NavLink></li>
        <li><NavLink to="Blogs" >Blogs</NavLink></li>
        
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                     
                    {/* there are two nav links give for each item, one for large screen and one for mobile device, so we need to change default names in both part */}
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* as we are using react, we created a dynamic nav links for navigation button */}
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Start Applying</a>
            </div>
        </div>                         
    );
};

export default Header;