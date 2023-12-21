import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinksPath = [
        { title: "Home", path: "/" },
        { title: "Dashboard", path: "/dashboard" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
    ];


    const navLinks = navLinksPath.map((link) => {
        return (
            <li key={link.title}>
                <NavLink to={link.path}>{link.title}</NavLink>
            </li>
        )
    })

    return (
        <nav className="fixed navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">ProTaskify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn btn-neutral">Let&apos;s Explore</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;