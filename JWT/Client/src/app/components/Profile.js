import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"

import AuthenticationService from '../services/AuthenticationService';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {user: undefined};
  }

  componentDidMount() {
    
    const user = AuthenticationService.getCurrentUser();
   
    this.setState({user: user});
  }

  render() {
    let userInfo = "";
    const user = this.state.user;
    console.log(user)
    // login
    if (user) {

      // let roles = "";

      // user.authorities.forEach(authority => {
      //   roles = roles + " " + authority.authority
      // })

      userInfo = (
                <div style={{marginTop:"20px"}}>
                  <Alert variant="info">
                    <h2>User Info</h2>
                    <ul>
                      <li>Username: {user.accessToken.username}</li>
                      <li>Access Token: {user.token}</li>

                      <li>Email: {user.accessToken.email}</li>
                      <li>Name: {user.accessToken.name}</li>
                      {/* <li>Authorities: {roles}</li> */}
                    </ul>
                  </Alert>
                </div>
              );
    } else { // not login
      userInfo = <div style={{marginTop:"20px"}}>
                    <Alert variant="primary">
                      <h2>Profile Component</h2>
                      <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
                    </Alert>
                  </div>
    }

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
        {userInfo}
        </Container>
      </div>
    );
  }
}

export default Profile;