import React, {Component} from 'react';
import './joke.css';

class Joke extends Component{
    render = () =>
    <div className="joke">
        <div className="joke-button">
             <i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
                    <span className="joke-vote">{this.props.votes}</span>
             <i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
        </div>
     <div className="joke-text">
      {this.props.text}   
     </div>
    </div>
}
export default Joke;