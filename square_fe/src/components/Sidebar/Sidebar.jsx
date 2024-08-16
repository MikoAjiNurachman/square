/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import * as sidebarStyle from './Sidebar.module.css';
import { CategoryIcon, CustomersIcon, ReportIcon, SquareLogo } from '../../assets/Icon'

function Sidebar({active, setActive}) {
  
  return (
    <aside className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sidebarBrand}>
        <Link to={"/"}><SquareLogo/></Link>
      </div>
      <small className={sidebarStyle.sidebarTitle}>Menu</small>
      <ul className={sidebarStyle.menu}>
        <li className={active.includes("/customers") ? [sidebarStyle.menuItem, sidebarStyle.sidebarHover].join(" ") : sidebarStyle.menuItem}><CustomersIcon/> <Link onClick={() => setActive("/customers")} to="/customers">Customers</Link></li>
        <li className={active.includes("/products") ? [sidebarStyle.menuItem, sidebarStyle.sidebarHover].join(" ") : sidebarStyle.menuItem}><CategoryIcon/> <Link onClick={() => setActive("/products")} to="/products">Products</Link></li>
        <li className={active.includes("/transactions") ? [sidebarStyle.menuItem, sidebarStyle.sidebarHover].join(" ") : sidebarStyle.menuItem}><ReportIcon/> <Link onClick={() => setActive("/transactions")} to="/transactions">Transactions</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;