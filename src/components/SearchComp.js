
import React, { Component } from 'react';
import '../css/SearchComp.css';

class SeachComp extends Component {

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    searchMovie=()=>{
        alert("search movie!(SeachComp)")
        const {searchText}=this.state
        alert("search:"+searchText)
        this.props.searchMovie(searchText)
        this.setState({
            searchText:''
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }

    searchAllMovie=()=>{
        this.props.searchAllMovie()
        this.setState({
            searchText:''
        })
    }

    render(){
    
        return(
            <div id="search-comp">
                
                <input type="text" placeholder="search for a movie..."
                onChange={this.handleChange} name="searchText"></input>
                <button id="search-btn" onClick={this.searchMovie}>Search</button>
                <button id="search-all-btn" onClick={this.searchAllMovie}>All</button>
            </div>
        );
    }
}

export default SeachComp;
