import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import { HeroContext } from '../../context/heroes/HeroContext';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const { heroes } = useContext(HeroContext)
    const hero = useMemo(() => getHeroById( heroes, heroId ), [ heroId, heroes ]);
    
    const handleReturn = () => {

        if( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    };  

    const { appearance, biography, work, image, name } = hero;

    const appearanceValues = Object.values(appearance);
    const biographyValues = Object.values(biography);

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ image.url }
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Weight: </b> { appearanceValues[3][0] } </li>
                    <li className="list-group-item"> <b> Height: </b> { appearanceValues[2][0] } </li>
                    <li className="list-group-item"> <b> Full name: </b> { biographyValues[0] } </li>
                    <li className="list-group-item"> <b> Alias: </b> { biographyValues[2][0] } </li>
                    <li className="list-group-item"> <b> Eye color: </b> { appearanceValues[4] } </li>
                    <li className="list-group-item"> <b> Hair color: </b> { appearanceValues[5] } </li>
                    <li className="list-group-item"> <b> Base: </b> { work.base } </li>
                </ul>

                <button className="btn btn-outline-info" onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}
