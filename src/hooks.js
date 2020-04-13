import {useState, useEffect} from 'react';

const useDataMovies = () => {
    const [result, setResult] = useState([]);
    const urlAPI = 'https://ghibliapi.herokuapp.com/films';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(urlAPI);
                const json = await data.json();

                if(json) {
                    setResult(json);
                }                
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return result;
}

export default useDataMovies;