import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername = (username) => {
    this.setState({username})
  }

  updatePassword = (password) => {
    this.setState({password})
  }

  submitUsernameAndPassword = (e) => {
    e.preventDefault()
    let usernameAndPassword = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      this.props.handleLogin(usernameAndPassword)
    }
  }

  render() {
    return (
      <form onSubmit={e => this.submitUsernameAndPassword(e)}>
        <div>
          <label>
            Username
            <input id="username" 
                   name="username" 
                   type="text"
                   value={this.state.username}
                   onChange={(e) => this.updateUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
                   name="password" 
                   type="password"
                   value={this.state.password}
                   onChange={(e) => this.updatePassword(e.target.value)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
