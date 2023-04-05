import { useEffect, useState } from 'react';
import { Movies } from '../types/movie';

function MovieList() {
  const [MovieData, setMovieData] = useState<Movies[]>([]);

  //only run updates, not constantly looking for updates
  useEffect(() => {
    //Get Movie Data
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/hiltonmovies');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovie();
  }, []);

  return (
    <>
      <br />
      <br />
      <div className="row">
        <h4>Movie Collection</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          {/* Column Titles */}
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* Map Movie Data */}
          {MovieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
