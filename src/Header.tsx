import { NavLink, Link } from 'react-router';

function Header() {
    return (
        <nav>
            {/* NavLink makes it easy to show active states */}
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Home
            </NavLink>

            <Link to='/dashboard'>Dashboard</Link>
        </nav>
    );
}

export default Header;
