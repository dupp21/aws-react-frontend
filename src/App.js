import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.State = {
      name: "",
      email: "",
      image: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = e => {
    this.setState({ image: e.target.files[0] });
  };
  handleSubmit = e => {
    const data = new FormData();
    data.append(
      "user_data",
      JSON.stringify({ name: this.state.anme, email: this.state.email })
    );
    data.append("user_image", this.state.image);
  };
  render() {
    return (
      <div>
        <input type="text" name="name" />
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="file"
          name="image"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
