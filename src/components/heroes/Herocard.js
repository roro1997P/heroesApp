import React, { useContext, useEffect, useState } from 'react';
import { HeroContext } from '../../context/heroes/HeroContext';
import { getEqualHeroes, getGoodHero } from '../../helpers/getGoodHero';
import { getBadHero } from '../../helpers/getBadHero';
import { types } from '../../types/types';

export const Herocard = ( hero ) => {

    const { name, image } = hero;
    const { heroes, dispatchHero:dispatch } = useContext(HeroContext);

    const [ values, setValues ] = useState({
        good: '',
        bad: '',
    });

    const { good, bad } = values;

    useEffect( () => {
        setValues({
            good: getGoodHero(heroes),
            bad: getBadHero(heroes),
        });
        
    }, [ heroes ]);
    
    const handleClick = () => {

        const equalHeroes = getEqualHeroes(heroes, hero);

        if( equalHeroes ) {
            return alert('Hero already added');
        }

        if( good === 3 && bad === 3 ) {      
            return alert('Team Complete');
        }

        if( good === 3 && hero.biography.alignment === 'good' ) {
            return alert('Team good complete');
        }

        if( bad === 3 && hero.biography.alignment === 'bad' ) {
            return alert('Team bad complete');
        }

        dispatch({
            type: types.addHero,
            payload: hero
        });
        

    };

    return (
        <>
        <div className="card ms-3 mb-4" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ image.url } className="card-img" alt={ name } />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">
                            <small className="text-muted">{ name }</small>
                        </p>
                    </div>
                    <button 
                        className="btn btn-primary mt-5"
                        onClick={ handleClick }
                    >
                        Add to team
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}
