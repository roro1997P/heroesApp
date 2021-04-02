import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { AuthContext } from '../context/auth/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
        <Router>
            <div>
                <Switch>
                   <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ user.logged }/>
                   {
                       ( user.logged ) 
                            ? <Route path="/" component={ DashboardRoutes } />
                            : <Redirect to="/login" component={ LoginScreen } />
                   }         
                </Switch>
            </div>
        </Router>
        </>
    );
};