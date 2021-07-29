import React, { Component } from "react";
import { TextField, TextFieldUserType } from "../Components/TextField";

import { Button } from "../Components/Button";
import { Heading3 } from "../Components/Heading";

export default class RegisterForm extends Component {
  state = {
    values: {
      account: "",
      fullname: "",
      password: "",
      phone: "",
      email: "",
      dropdown: 1,
    },
    errors: {
      account: "",
      fullname: "",
      password: "",
      phone: "",
      email: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    if (name === "account" || name === "fullname") {
      if (value.trim() === "") newError[name] = name + " is required!";
      else newError[name] = "";
    }
    if (name === "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(value)) {
        newError[name] = name + " is invalid!";
      } else {
        newError[name] = "";
      }
    }

    if (name === "phone") {
      const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (!re.test(value)) {
        newError[name] =
          name + " must have 10 digits and have a prefix in Vietnam";
      } else {
        newError[name] = "";
      }
    }

    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let { values, errors } = this.state;
    let valid = true;
    for (let key in values) {
      if (values[key] === "") valid = false;
    }
    for (let key in errors) {
      if (errors[key] !== "") valid = false;
    }

    if (!valid) {
      alert("Fail!");
      return;
    } else alert("Success!");
  };
  render() {
    return (
      <div className="card text-left">
        <Heading3
          style={{ backgroundColor: "#242424" }}
          className="text-white card-header"
        >
          Registration
        </Heading3>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="text"
                  name="account"
                  required
                  label="Account"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.account}
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="text"
                  name="fullname"
                  required
                  label="Full Name"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.fullname}
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="password"
                  name="password"
                  required
                  label="Password"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.password}
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="phone"
                  name="phone"
                  required
                  label="Phone Number"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.phone}
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="email"
                  name="email"
                  required
                  label="Email"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.email}
                ></TextField>
              </div>
              <div className="col-sm-6">
                <TextFieldUserType
                  label="User Type"
                  option1="Customer"
                  option2="Client"
                  onChange={this.handleChangeValue}
                  value1="1"
                  value2="2"
                  name="dropdown"
                ></TextFieldUserType>
              </div>
            </div>
            <div className="mt-3">
              <Button type="submit" value="submit" SignUp>
                Register
              </Button>
              <Button Update>Update</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
