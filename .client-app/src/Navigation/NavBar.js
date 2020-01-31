import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import { userLogout } from "../actions/actionCreators";
const NavBarContainer = Styled.div`
display:flex;
background-color:black;
padding:1%;
justify-content:flex-end;
`;
const NavBarItem = Styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding: 0.5rem;
  margin: .5rem 1.3rem;
  height:.8vh;
  width:6%;
  color: white;
  border: 2px solid white;
  border-radius:.5rem;
  p{
    text-decoration:none;
    color:white;
    font-size:.7rem;
  }
  a{
    text-decoration:none;
  }
`;

function NavBar(props) {
  return (
    <NavBarContainer>
      <NavBarItem>
        <NavLink exact to="/">
          <p>Home</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Jokes">
          <p>Jokes</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Register">
          <p>Register</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Login">
          <p>Login</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/" onClick={() => props.userLogout()}>
          <p>Log Out</p>
        </NavLink>
      </NavBarItem>
      <Route exact path="/" />
    </NavBarContainer>
  );
}
const mapStateToProps = state => {
  return {
    username: state.username,
    jokes: state.jokes,
    logintransaction: false,
    joketransaction: false,
    token: state.token
  };
};
export default connect(mapStateToProps, { userLogout })(NavBar);
