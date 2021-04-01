import React, { useContext } from 'react';
import { HeroContext } from '../../context/heroes/HeroContext';
import { types } from '../../types/types';

export const Herocard = ( hero ) => {

    const { name, image } = hero;
    const { dispatchHero:dispatch } = useContext(HeroContext);
    
    const handleClick = () => {

        dispatch({
            type: types.addHero,
            payload: hero
        });
    };

    return (
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
    )
}
