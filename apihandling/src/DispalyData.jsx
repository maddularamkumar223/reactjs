import React, { Component } from "react";
import Form from "./Form";

export default class DispalyData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      userData: [],
      loading: false,
      editData: "",
      isEdit: false,
    };
  }

  // ! Creating the user
  addUser = async (userData) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  // ! Getting the users data
  users = async () => {
    try {
      let response = await fetch("http://localhost:3000/users");
      let data = await response.json();
      console.log(data);
      this.setState({ userData: data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! Toggle the state
  handleTrue = () => {
    this.setState({ loading: !this.state.loading });
  };

  // ! Delete the data
  handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    this.handleTrue();
  };
  // ! Api calling
  componentDidMount() {
    this.users();
  }

  // ! Api calling when condition is satisfied
  componentDidUpdate(prevPros, prevState) {
    if (prevState.loading !== this.state.loading) {
      this.users();
    }
  }

  // ! Updating the data
  handleUpdate = (value) => {
    this.setState({ name: value.name, editData: value.id, isEdit: true });
  };

  updateUserData = async (id, name) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
    this.setState({ isEdit: false });
  };

  // ! Handle change for the form
  handleChange = (e) => {
    let { value } = e.target;
    this.setState({ name: value });
  };

  // ! Handle submit for the form
  handleSubmit = async (e) => {
    e.preventDefault();
    this.state.isEdit
      ? await this.updateUserData(this.state.editData, this.state.name)
      : await this.addUser({ name: this.state.name });
    this.handleTrue();
    this.setState({ name: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form
          addUser={this.addUser}
          handleTrue={this.handleTrue}
          name={this.state.name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <section>
          {this.state.userData.map((user) => {
            return (
              <article key={user.id}>
                <h1>{user.name}</h1>
                <button onClick={() => this.handleUpdate(user)}>Edit</button>
                <button
                  onClick={() => {
                    this.handleDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}
