import React, { useContext } from 'react';
import { HeroContext } from '../../context/heroes/HeroContext';
import { TeamCard } from './TeamCard';

import '../../styles/home.css';

export const HomeScreen = () => {

    const { heroes } = useContext(HeroContext)

    return (
        <div className="card-deck container mt-5 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <TeamCard key={ hero.id } { ...hero } />
                ))
            }
        </div>
    )
}
