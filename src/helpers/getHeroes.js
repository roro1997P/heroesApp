

export const getHeroes = async ( name ) => {

    try {

        const baseUrl = 'https://superheroapi.com/api/3866228726793355';

        const response = await fetch(`${ baseUrl }/search/${ name }`);
        const data = await response.json();

        return data;
        
    } catch (error) {
        console.log(error);
        return 'Hubo un error';
    }

    
};