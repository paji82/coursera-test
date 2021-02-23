const NavBar = props => {
    console.log("NavBar rendered");

return (
    <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">Jumlah Keseluruhan</span>
            </a>
    </nav>
);

}
export default NavBar;