import './App.css';
import React, { Component } from 'react';
import Pagination from './components/Pagination';
import MovieList from './components/MovieList';
import SearchComp from './components/SearchComp';

import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
            movieList:[

            ],
            search:null,
            loading:false,
            currentPage:1,
            postsPerPage:3
        }
  }

  getMovies = async()=>{
    const axios_movies 
    = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(axios_movies);
    this.setState({movieList:axios_movies.data.data.movies});
  }

  componentDidMount(){
    this.getMovies();
  }

  setCurrentPage=(page)=>{
    alert(page);
    this.setState({
      currentPage:page
    })
  }

  searchMovie=(text)=>{
    alert("search movie!(App)")
    alert("search:"+text)
    this.setState({
      search:text
    })
  }

  searchAllMovie=()=>{
    this.setState({
      search:null
    })
  }

  currentPosts=(movieList)=> {
    const {currentPage,postsPerPage}=this.state;
    const indexOfLast = currentPage*postsPerPage;
    const indexOfFirst = indexOfLast-postsPerPage;
    const slicePosts = movieList.slice(indexOfFirst,indexOfLast);
    return slicePosts;
  }

  render(){

    const{movieList,loading,postsPerPage,currentPage,search}=this.state;
    if(search==null){
      return (
        <div className="App">
          <SearchComp searchMovie={this.searchMovie} searchAllMovie={this.searchAllMovie}></SearchComp>
          <MovieList movieList={this.currentPosts(movieList)} loading={loading}></MovieList>
          <Pagination postsPerPage={postsPerPage} movieLen={movieList.length} 
          setCurrentPage={this.setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
      );
    }else{
      const filteredMovie=movieList.filter(movie=>((movie.title).includes(search)))
      return(
      <div className="App">
          <SearchComp searchMovie={this.searchMovie} searchAllMovie={this.searchAllMovie}></SearchComp>
          <MovieList movieList={this.currentPosts(filteredMovie)} loading={loading}></MovieList>
          <Pagination postsPerPage={postsPerPage} movieLen={filteredMovie.length} 
          setCurrentPage={this.setCurrentPage} currentPage={currentPage}></Pagination>
       </div>
      );
      
    }
    
  }
  
}

export default App;
