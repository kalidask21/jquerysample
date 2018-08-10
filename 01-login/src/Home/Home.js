import React, { Component } from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
	console.log(this.props.auth);
    const { isAuthenticated , auth0 } = this.props.auth;
	console.log(auth0.baseOptions.tenant);
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! - Mr {auth0.baseOptions.tenant}
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
