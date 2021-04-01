

export const getHeroes = async ( name ) => {

    const baseUrl = 'https://superheroapi.com/api/3866228726793355';

    const response = await fetch(`${ baseUrl }/search/${ name }`);
    const data = await response.json();

    return data;
};