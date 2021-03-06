import React, {Component} from 'react';
import axios from 'axios';
const API_BASE_URL ="http://deckofcardsapi.com/api/deck";

class Deck extends Component {
 constructor(props){
     super(props);
     this.state = {
         deck: ''
     }
     this.getCard = this.getCard.bind(this);
 }
async componentDidMount(){
  let deck = await axios.get(`${API_BASE_URL}/new/shffle/`);
  this.setState({
      deck: deck.data
  })
 }
 async getCard(){
     let deck_id = this.state.deck.deck_id;
     let cardUrl = `${API_BASE_URL}/${deck_id}/draw`;
    let cardRes = await axios.get(
    "http://deckofcardsapi.com/api/deck/beo4xyn81fko/draw/"
     );
    console.log(cardRes);
 }
    render(){
        return(
          <div>
              <h1>Card dealer</h1>
              <button onClick={this.getCard}>Get card!</button>
          </div>
        );
    }
}
export default Deck;