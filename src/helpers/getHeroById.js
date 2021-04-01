

export const getHeroById = ( heroes, id ) => {

    return heroes.find( hero => hero.id === id );

};

export const getHeroFiltered = ( heroes, id ) => {

    const hero = heroes.filter( hero => hero.id !== id );

    return hero;

};