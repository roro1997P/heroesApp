import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom';
import { HeroContext } from '../../context/heroes/HeroContext';
import { getHeroFiltered } from '../../helpers/getHeroById';
import { types } from '../../types/types';

export const TeamCard = ({ name, image, powerstats, id }) => {

    const { combat, durability, intelligence, power, speed, strength } = powerstats;
    const { heroes, dispatchHero:dispatch } = useContext(HeroContext);

    const hero = useMemo(() => getHeroFiltered( heroes, id ), [ id, heroes ]);
    
    const handleDelete = () => {
        dispatch({
            type: types.deleteHero,
            payload: hero
        });
    };

    return (
         <div className="card ms-3 mb-4" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-6">
                    <img src={ image.url } className="card-img" alt={ name } />
                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text"><small className="text-muted">Combat: { (combat === 'null') ? 0 : combat }</small> </p>
                        <p className="card-text"><small className="text-muted">Durability: { (durability === 'null') ? 0 : durability }</small> </p>
                        <p className="card-text"><small className="text-muted">Intelligence: { (intelligence === 'null') ? 0 : intelligence }</small> </p>
                        <p className="card-text"><small className="text-muted">Power: { (power === 'null') ? 0 : power }</small> </p>
                        <p className="card-text"><small className="text-muted">Speed: { (speed === 'null') ? 0 : speed }</small> </p>
                        <p className="card-text"><small className="text-muted">Strength: { (strength === 'null') ? 0 : strength }</small> </p>
                        
                         <Link className="btn btn-primary w-100" to={ `./hero/${ id }` }>
                            Más...
                        </Link>

                        <button className="btn btn-outline-danger w-100 mt-3" onClick={ handleDelete }>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
