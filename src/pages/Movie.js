import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';


function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();        
        console.log(json.data.movies); 
        setMovies(json.data.movies);
        setLoading(false);
    }
    
    useEffect(() => { getMovies(); }, []);

    return (
        <div>            
            <h1>Movie Page1</h1>
            <Link to="/">홈으로</Link>
            <div>
                {loading ? (<h1>Loading...</h1>) : (
                        <div>
                            {movies.map((m) => (
                                <div key={m.id}>
                                    <p>{m.title}</p>
                                    <img src={m.medium_cover_image} alt={m.title} />
                                    <ul>
                                        {m.genres.map((g) => (<li>{g}</li>))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                )}
            </div>
        </div>)
}

 


export default Movie;


