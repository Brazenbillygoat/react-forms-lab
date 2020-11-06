import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (message) => {
    this.setState({message})
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length
    

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               name="message" 
               id="message" 
               value={this.state.message} 
               onChange={(e) => this.updateMessage(e.target.value)} />
        {remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
