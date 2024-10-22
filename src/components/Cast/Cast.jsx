import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredits';

export default function Cast() {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <ul>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <img
                width={100}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
