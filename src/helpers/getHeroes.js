

export const getHeroes = async ( name, api ) => {

    try {

        const baseUrl = `https://superheroapi.com/api/${ api }`;

        const response = await fetch(`${ baseUrl }/search/${ name }`);
        const data = await response.json();

        return data;
        
    } catch (error) {
        console.log(error);
    }

    
};