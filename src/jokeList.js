import React, {Component} from 'react';
import Joke from './joke';
import uuid from 'uuid/v4';
import axios from 'axios';
import "./jokeList.css";

//in react hooks you can also use functional component instead of class based component.
class JokeList extends Component{
    static defaultProps = {
        numjokesToGet: 10
    };
    //in react hooks you can also use useState instead of ---"this.state"
    constructor(props){
        super(props);
        this.state = {
            joke: []
        }
    }

    //in react hooks you can also use useEffect instead of life circle methods ---"componentDidMount"
    async componentDidMount() {
        let jokes = [];
        while(jokes.length < this.props.numjokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
        jokes.push({id: uuid(),text: res.data.joke, votes: 0});
        }
     this.setState({joke: jokes});
    }
 handleVote = (id, delta) => {
     this.setState(st => ({
             joke: st.joke.map(j =>
                j.id === id ? {...j, votes: j.votes + delta} : j)
         })
     )
        
 }
  render = () =>
  <div className="jokeList">
      <div className="jokeList-sidebar">
      <h1 className="jokeList-title"><span>Dad</span> jokes</h1>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/face-with-tears-of-joy_1f602.png" alt="laughing-emoji"/>
      <button className="jokeList-getmore">New jokes</button>
      </div>
      <div className="JokeList-jokes">
          {this.state.joke.map(j => (
              <div><Joke key={j.id} votes={j.votes} text={j.text}
              upVote={() => this.handleVote(j.id, 1)}
              downVote={() => this.handleVote(j.id, -1)}
              /></div>
          ))} 
      </div>

  </div>

}
export default JokeList;