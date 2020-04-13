import React from 'react';
import useDataMovies from './hooks';

const CardMovies = (props) => {
    const { title, description } = props;
    
    return(
        <>
            <div className="card-movie">
                 <h3  className="card-movie__title">{title}</h3>
                <div className="card-movie__box-info">
                    <p className="card-movie__description">{description}</p>
                </div>
            </div>
        </>
    )
}

const ListMovies = () => {
    const result = useDataMovies();

    return (
        <>
            <div className="container d-flex">
                {result && result.length > 0 && 
                result.map(({id, title, description}) => (
                    <CardMovies key={id} title={title} description={description} />
                ))}
            </div>
        </>
    )
}

const Movies = () => {
    return(
        <>
            <section className="section-movies">
                <ListMovies />
            </section>
        </>
    )
}

export default Movies;