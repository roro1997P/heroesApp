
export const getBadHero = ( heroes ) => {

    const heroBad = heroes.filter( hero => hero.biography.alignment === 'bad' );

    if ( heroBad.length > 3 ) {
        return 'The team already has enough bad heroes. Choose another';
    };

    return heroBad.length;

};