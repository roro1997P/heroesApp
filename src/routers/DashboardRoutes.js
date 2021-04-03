import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { HeroSearchScreen } from '../components/heroes/HeroSearchScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = ( rest ) => {

    localStorage.setItem('lastpath', rest.location.pathname);

    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomeScreen }/>
                    <Route exact path="/search" component={ HeroSearchScreen }/>
                    <Route exact path="/hero/:heroId" component={ HeroScreen }/>

                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}
