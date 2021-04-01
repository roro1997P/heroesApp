
export const getAuth = async ( info ) => {

    const config = {
        method: 'POST',
        mode: 'cors',
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*/*"
        },
        body: JSON.stringify(info),
    };

    const url = 'http://challenge-react.alkemy.org';

    const resp = await fetch( url, config );

    const data = await resp.json();
    console.log(data);

    return data;
};

