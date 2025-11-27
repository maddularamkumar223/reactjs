import React, { Component } from "react";

export default class LifeCycle extends Component {
  // constructor() {
  //   super();
  //   console.log("i am a constructor method");
  //   this.state = {
  //     name: "",
  //   };
  // }
  // inc = () => this.setState({ count: this.state.count + 1 });
  // static getDerivedStateFromProps(props, state) {
  //   console.log("get Derived State from Props");
  //   // console.log(props);
  //   // console.log(state);
  //   if (props.name !== state.name) {
  //     return {
  //       name: props.name,
  //     };
  //   }
  //   return null;
  // }
  // shouldComponentUpdate() {
  //   return true;
  //   // return false;
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.count != this.state.count) {
  //     console.log("The state is updated");
  //   }
  // }

  componentDidMount() {
    console.log("I am a component Did Mount");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count != this.props.count) {
      console.log("Component Did Update");
    }
  }

  // componentWillUnmount() {
  //   console.log(" Component um mounted is trigged");
  // }
  render() {
    console.log("I am a render method");
    return (
      <div>
        <h1> {this.props.count}</h1>
        {/* <h1>Hey{this.state.name}</h1> */}
        <button onClick={this.props.inc}>Inc</button>
      </div>
    );
  }
}
