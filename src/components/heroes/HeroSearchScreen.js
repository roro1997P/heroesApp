import React, { useState } from 'react';
import { getHeroes } from '../../helpers/getHeroes';
import { useForm } from '../../hooks/useForm';
import { Herocard } from './Herocard';

export const HeroSearchScreen = () => {

    const [heroes, setHeroes] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        msg: '',
        color: '',
    });

    const [formValues, handleInputChange] = useForm({ search: '' });
    const { search } = formValues;

    const handleSearch = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (search === '') {
            setErrorMessage({
                msg: 'Search a hero',
                color: 'info'
            });
            setError(true);
            setHeroes();
            setLoading(false);
            return;
        }

        const { results } = await getHeroes(search);

        if (!results) {
            setError(true);
            setLoading(false);
            setErrorMessage({
                msg: 'Hero not found',
                color: 'danger'
            });
            setHeroes();
            return;
        }
        setLoading(false);
        setError(false);
        setHeroes(results);
    };

    return (
        <div className="container">
            <br />
            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            autoComplete="off"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="search"
                            onChange={handleInputChange}
                            value={search}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (loading)
                            ? <div className="text-center mb-3">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                            : null
                    }

                    {(error) && <div className={`alert alert-${errorMessage.color}`}> {errorMessage.msg} </div>}

                    {
                        (heroes)
                            ? heroes.map(hero => (
                                <Herocard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                            : null
                    }


                </div>
            </div>
        </div>
    )
}
