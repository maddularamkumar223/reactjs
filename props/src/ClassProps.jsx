import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        My name is {this.props.userName} and My age is {this.props.age}
      </div>
    );
  }
}
