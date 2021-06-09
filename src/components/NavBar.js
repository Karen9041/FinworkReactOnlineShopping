import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                首頁
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                全部商品
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                售後服務
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                訂購流程
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                訂單流程
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                隱私權條款
            </NavLink>
            <NavLink to="/" className="nav-item" activeClassName="nav-item--active">
                我要詢問
            </NavLink>
        </div>
    );
}