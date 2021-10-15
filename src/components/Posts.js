
import React, { Component } from 'react';

import Movie from './Movie';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            posts:this.props.posts,
        }
    }

    render(){
    
    const {loading,posts}=this.props;

        return (
    <div className="Posts">

  { loading &&
    <div> loading... </div>
  }
  <div>
    { 
    posts.map(post=>(
      <Movie key={post.id}
      medium_cover_image={post.medium_cover_image}
      title={post.title}
      year={post.year}
      genres={post.genres}
      runtime={post.runtime}
      rating={post.rating}
      summary={post.summary}
      ></Movie>
      
        )
    )
    }
  </div>

    </div>
  );
    }
}

export default Posts;
