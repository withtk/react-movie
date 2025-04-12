import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {useModal} from '../../pages/modal/ModalContext';
import Test2 from '../../pages/modal/Test2';
import Movie from './Movie';
import {PoweroffOutlined} from "@ant-design/icons";

function MovieList() {
    const {openModal} = useModal();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`)).json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie Page1</h1>
      <Link to="/">홈으로</Link>

        <Button
            type="primary"
            onClick={() => openModal(<Test2/>) }>
            Open Modal!
        </Button>
        <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((m) => (
              <Movie key={m.id} id={m.id} coverImg={m.medium_cover_image} title={m.title} summary={m.summary} genres={m.genres} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
