import React from "react";
class ClassState extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Kumari",
      count: 0,
    };
  }
  render() {
    return (
      <>
        {/* <h1 onClick={() => this.setState({ userName: "ravi" })}>
          My name is {this.state.userName}
        </h1> */}
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Dec
        </button>
      </>
    );
  }
}
export default ClassState;
