import React, { Component } from 'react';
import './App.css';
import Poster from './poster';
import NavBar from './NavBar';

class App extends Component {
// in order to use "this" we have to have constructor
	constructor(){
		super();
		this.state = {
		movieList: []
		}
		this.movieSearch = this.movieSearch.bind(this);
		this.popularMovie = this.popularMovie.bind(this);
		this.topRatedMovie = this.topRatedMovie.bind(this);
		this.trendingMovie = this.trendingMovie.bind(this);
	}
	componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=6e6956af7e5d56dde9dd3743762ece3c&region=US";
        // fetch is a replacement for $.getJSON/$.ajax/axios
        fetch(url)
        .then((response)=> {
            return response.json();
        })
        .then((myJson)=>{
            const results = myJson.results;
            // console.log(results)
            this.setState({
                movieList: results
            })
        })

        console.log("Checking... yes! It's mounted")
        
	}
	movieSearch(e){
		e.preventDefault();
		console.log("Form submitted")
		const movieTitle = document.getElementById('searchTerm').value;
		const url = 'https://api.themoviedb.org/3/search/movie?api_key=6e6956af7e5d56dde9dd3743762ece3c&region=US&query='+movieTitle;
		fetch(url)
		.then((response)=>{
		  return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			// console.log(results)
			this.setState({
				movieList: results
			});
		});		
	}

	popularMovie(){
		const url = 'https://api.themoviedb.org/3/movie/popular?api_key=6e6956af7e5d56dde9dd3743762ece3c&region=US'
		fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			// console.log(results)
			this.setState({
				movieList: results
			})
		})
	}
	topRatedMovie(){
		const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6e6956af7e5d56dde9dd3743762ece3c&region=US'
		fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			console.log(results)
			this.setState({
				movieList: results
			})
		})
	}
	trendingMovie(){
		const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=6e6956af7e5d56dde9dd3743762ece3c&region=US'
		fetch(url)
		.then((response)=>{
			return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			console.log(results)
			this.setState({
				movieList: results
			})
		})
	}
	
	
	render() {
		// function myFunction(){
		// 	document.getElementById('dropdown-content').style.display = 'block';
		// }
		
		const posters = this.state.movieList.map((movie,i)=>{
			return(<Poster key={i} movie={movie}/>)
		})
		console.log(posters)
		return ( 
			<div className="container">
				<div className="nav-wrapper">
					<div className="dropDownContainer">
						<div className="dropdown">
							<button  className="dropbtn">
								<div></div>
								<div></div>
								<div></div>
							</button>
							<div className="dropdown-content">
								{/* <div className="menu"> */}
									<a onClick={this.popularMovie}>Popular Movies</a>
									<a onClick={this.topRatedMovie}>Top Rated Movies</a>
									<a onClick={this.trendingMovie}>Trending Movies</a>
								{/* </div> */}
							</div>
						</div>
					</div>
					<span className="pageTitle">Movie App</span>
					<div className="movieSearch">
						<form onSubmit={this.movieSearch}>
							<input id="searchTerm" type="text" placeholder="Movie Title" />
							<button type="submit" className="search">Search</button>
						</form>
					</div>
				</div>
				
				<div className="posterContainer">
						{posters}
				</div>
			</div>
		);
	}
}

export default App;

