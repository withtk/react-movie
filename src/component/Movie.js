import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


function Movie({id, coverImg,title,summary,genres}) {
      
    return (
        <div>
            <h1>{title}</h1>
            <p>{summary}</p>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} />                
            </Link>
            <ul>
                {genres.map((g) => (<li>{g}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;