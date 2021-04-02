import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        dispatch({ type: types.logout });
        history.replace('/login');
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">


            <div className="navbar-collapse">
                <div className="navbar-nav">
                                
            <NavLink 
                className="nav-item nav-link mt-1 text-center"
                to="/home"
            >
                Team
            </NavLink>

                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link mt-1 text-center" 
                        exact
                        to="/search"
                    >
                        Search
                </NavLink>

                <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                </button>
                </div>
            </div>
        </nav>
    )
}