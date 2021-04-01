import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HeroSearchScreen } from '../components/heroes/HeroSearchScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomeScreen }/>
                    <Route exact path="/search" component={ HeroSearchScreen }/>

                    <Redirect to="/login" />
                </Switch>
            </div>
        </>
    )
}
