const Navbar = () => {

    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Our Menu</a></li>
        <li><a>Our Shop</a></li>
        <li><a>Sign Out</a></li>
    </>

    return (
        <>
            <div className="navbar fixed z-50 max-w-screen-2xl bg-[#00000049]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
                </div>
                <div className="navbar-end hidden lg:flex lg:w-[60%]">
                    <ul className="menu menu-horizontal text-white">
                        {navLinks}
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Navbar