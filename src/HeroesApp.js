import React, { useReducer } from 'react';
import { AuthContext } from './context/auth/AuthContext';
import { authReducer } from './context/auth/authReducer';
import { HeroContext } from './context/heroes/HeroContext';
import { heroReducer } from './context/heroes/heroReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
};


export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init );
    const [ heroes, dispatchHero ] = useReducer(heroReducer, []);
    console.log(heroes)

    if( user ) {
        localStorage.setItem('user', JSON.stringify(user) );
    }

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <HeroContext.Provider value={{ heroes, dispatchHero }}>
                <AppRouter />
            </HeroContext.Provider>
        </AuthContext.Provider>
    );
};