import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <h1>Layout</h1>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-text">Navbar 입니다</span>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;