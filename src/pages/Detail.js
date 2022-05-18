import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


function Detail( ) {
    const { id } = useParams();
    const {movie,setMovie} = useState();

    const getMovie =async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie);

        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    },[]);

    return (
        <div> 
            <h1>Detail..!.</h1>
            movie $$ <div>

            </div>
            {/* <h1>{title}</h1>
            <p>{summary}</p>
                <img src={coverImg} alt={title} />                
            <ul>
                {genres.map((g) => (<li>{g}</li>))}
            </ul>  */}
            
        </div>
    );

    
}
 
Detail.propTypes = {
    id:PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Detail;

