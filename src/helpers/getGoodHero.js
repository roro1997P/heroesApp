
export const getGoodHero = ( heroes ) => {
    
    const heroGood = heroes.filter( hero => hero.biography.alignment === 'good' );

    if ( heroGood.length > 3 ) {
        return 'The team already has enough good heroes. Choose another';
    };

    return heroGood.length;

};

export const getEqualHeroes = ( heroes, hero ) => {

    const heroesId = heroes.map( h => h.id );
    const equalHeroes = heroesId.includes( hero.id );
    
    return equalHeroes;

};