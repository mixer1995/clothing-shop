import { Outlet, NavLink } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Navigation.scss';


const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <NavLink className="logo-container" to={'/'}><CrownLogo className="logo" /></NavLink>

                <div className="links-container">
                    <NavLink className="nav-link" to={'/shop'}>SHOP</NavLink>
                    <NavLink className="nav-link" to={'/sign_in'}>SIGN IN</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;