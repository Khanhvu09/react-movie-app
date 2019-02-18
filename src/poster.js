// The very first thing in every component
// is to import 
import React, {Component} from 'react';
import Rating from 'react-rating';

// I am a presentational Component
// That means I don't care avout state.
// I could have been in App.js but this is cleaner
class Poster extends Component{
    render(){
        const imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;        
        const moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`
        const title = this.props.movie.title;
        const rating = this.props.movie.vote_average/2;
        return(
            <div className="poster">
                <a href={moviePath}>
                    <img className="posterImage" src={imagePath}/>
                </a>
                <div className="title">
                    <div className="titleName">
                        {title}
                    </div>
                    <div className="rating">
                    <Rating
                        readonly
                        emptySymbol="fa fa-star-o fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        initialRating={rating}
                    />
                    {/* <progress>★★★★★</progress> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Poster