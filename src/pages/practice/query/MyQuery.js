import { useEffect, useState } from "react";
import Movie from "../../movie/Movie";


const MyQuery = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`)
            .then(resp => resp.json())
            .then(
                data=>{
                    setMovies(data);
                    console.log("movie list :" + data.data.json());
                }
                // setMovies
                );
    }, []);

    return (
        <div>
            <h2>MyQuery</h2>
            {
                // movies.map((m) => (
                //     <Movie
                //         key={m.id}
                //         id={m.id}
                //         coverImg={m.medium_cover_image}
                //         title={m.title}
                //         summary={m.summary}
                //         genres={m.genres}
                //     />
                // ))
            }
        </div>
    )
}

export default MyQuery;