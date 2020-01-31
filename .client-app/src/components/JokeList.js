import React, { Component } from "react";
import { connect } from "react-redux";
import { displayJokeList } from "../actions/actionCreators";
import Styled from "styled-components";
const JokeListContainer = Styled.div`
display:flex;
flex-direction:column;
padding:1%;
width:80%;
background-color:black;
color:white;
padding:1%;
justify-content:center;
border-radius:20px;
}
`;
const JokeCard = Styled.div`
display:flex;
color:white;
margin:1%;
width:20%;
justify-content:center;
border:2px solid white;
border-radius:20px;
}
`;
const JokeCardContainer = Styled.div`
display:flex;
flex-wrap:wrap;
margin:1%;
justify-content:center;
}
`;
class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joketransaction: false
    };
  }
  componentDidMount() {
    this.props.displayJokeList();
  }
  render() {
    if (!this.props.joketransaction) {
      return (
        <div className="status">
          <h3> Loading Joke Data </h3>
        </div>
      );
    }
    return (
      <JokeListContainer>
        <h1> Current Jokes: </h1>
        <JokeCardContainer>
          {this.props.jokes.map(joke => (
            <JokeCard key={joke.id}>
              <p> {joke.joke} </p>
            </JokeCard>
          ))}
        </JokeCardContainer>
      </JokeListContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    joketransaction: state.joketransaction
  };
};
export default connect(mapStateToProps, { displayJokeList })(JokeList);
