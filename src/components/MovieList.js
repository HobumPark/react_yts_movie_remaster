
import React, { Component } from 'react';

import Movie from './Movie';

class MovieList extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieList:this.props.movieList,
        }
    }

    render(){
    
    const {loading,movieList}=this.props;

        return (
    <div className="MovieList">

  { loading &&
    <div> loading... </div>
  }
  <div>
    { 
    movieList.map(movie=>(
      <Movie key={movie.id}
      medium_cover_image={movie.medium_cover_image}
      title={movie.title}
      year={movie.year}
      genres={movie.genres}
      runtime={movie.runtime}
      rating={movie.rating}
      summary={movie.summary}
      ></Movie>
      
        )
    )
    }
  </div>

    </div>
  );
    }
}

export default MovieList;
