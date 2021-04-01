import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { dispatch } = useContext(AuthContext);

    const handleClick = () => {
        dispatch({ type: types.logout });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                </NavLink>

                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                        onClick={ handleClick }
                    >
                        Logout
                </NavLink>
                </div>
            </div>
        </nav>
    )
}