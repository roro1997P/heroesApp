import React, { useContext, useEffect } from 'react';
import { HeroContext } from '../../context/heroes/HeroContext';
import { TeamCard } from './TeamCard';

import '../../styles/home.css';

export const HomeScreen = () => {

    const { heroes } = useContext(HeroContext);
    useEffect( () => {
        localStorage.setItem('heroes', JSON.stringify(heroes));
    }, [heroes]);

    let combat = 0;
    let durability = 0;
    let intelligence = 0;
    let power = 0;
    let speed = 0;
    let strength = 0;
    let weight = 0;
    let height = 0;

    for (let i = 0; i < heroes.length; i++) {
        combat += parseInt(heroes[i].powerstats.combat, 10) || 0;
        durability += parseInt(heroes[i].powerstats.durability, 10) || 0;
        intelligence += parseInt(heroes[i].powerstats.intelligence, 10) || 0;
        power += parseInt(heroes[i].powerstats.power, 10) || 0;
        speed += parseInt(heroes[i].powerstats.speed, 10) || 0;
        strength += parseInt(heroes[i].powerstats.strength, 10) || 0;
        weight += parseInt(heroes[i].appearance.weight[1], 10) || 0;
        height += parseInt(heroes[i].appearance.height[1], 10) || 0;
    }

    const max = Math.max(combat, durability, intelligence, power, speed, strength);
    const team = combat === max ? "combat" :
        durability === max ? "durability" :
        intelligence === max ? "intelligence" :
        power === max ? "power" :
        speed === max ? "speed" :
        strength === max ? "strength" : null;

    return (
        <div className="container">
            {
                (heroes.length !== 0)
                    ?
                        <div className="card m-3 mt-4" style={{ maxWidth: 540 }}>
                            <div className="card-header">
                                Highest powerstat of the team: <strong>{team} </strong>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Combat: <small>{combat}</small> </li>
                                <li className="list-group-item">Durability: <small>{durability}</small> </li>
                                <li className="list-group-item">Intelligence: <small>{intelligence}</small> </li>
                                <li className="list-group-item">Power: <small>{power}</small> </li>
                                <li className="list-group-item">Speed: <small>{speed}</small> </li>
                                <li className="list-group-item">Strength: <small>{strength}</small> </li>
                                <li className="list-group-item">Average weight: <small>{(weight / heroes.length).toFixed(2)} Kg</small> </li>
                                <li className="list-group-item">Average height: <small>{(height / heroes.length).toFixed(2)} Cm</small> </li>
                            </ul>
                        </div>
                    : <div className="alert alert-info p-3 mt-3 text-center">No has seleccionado un equipo</div>
            }
            <div className="card-deck mt-5 animate__animated animate__fadeIn">

                {
                    heroes.map(hero => (
                        <TeamCard key={hero.id} {...hero} />
                    ))
                }
            </div>
        </div>
    )
}
