import { Outlet, NavLink } from "react-router-dom";

function MemberLayout() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link">게시판</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link">상품</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link">Logout</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>MemberLayout</h1>
            <Outlet />
        </div>
    );
}

export default MemberLayout;