import "./UserManagement.css";

import React, { Component } from "react";
import { TextField, TextFieldUserType } from "../Components/TextField";

import { Button } from "../Components/Button";
import { Heading3 } from "../Components/Heading";
import { addUserAction } from "../redux/actions/UserManagementActions";
import { connect } from "react-redux";

class RegisterForm extends Component {
  state = {
    values: {
      account: "",
      name: "",
      password: "",
      phone: "",
      email: "",
      userType: "Customer",
      disabled: true,
      disabledAccount: false,
    },
    errors: {
      account: "",
      name: "",
      password: "",
      phone: "",
      email: "",
      userType: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    if (name === "account" || name === "name") {
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
  handleOnSubmit = (event) => {
    //Prevent he browser reload page
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
      alert("Input invalid. Please try again");
      return;
    } else {
      alert("Success!");
      this.props.dispatch(addUserAction(this.state.values));
    }
  };
  renderTextFieldAccount = () => {
    return this.state.values.account ? (
      <TextField
        style={{ cursor: "no-drop" }}
        disabled
        value={this.state.values.account}
        type="text"
        name="account"
        required
        label="Account"
        onChange={this.handleChangeValue}
        textDanger={this.state.errors.account}
      ></TextField>
    ) : (
      <TextField
        value={this.state.values.account}
        type="text"
        name="account"
        required
        label="Account"
        onChange={this.handleChangeValue}
        textDanger={this.state.errors.account}
      ></TextField>
    );
  };
  renderButtonUpdate = () => {
    return this.state.values.disabled ? (
      <Button disabled Update>
        Update
      </Button>
    ) : (
      <Button Update>Update</Button>
    );
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
          <form onSubmit={this.handleOnSubmit}>
            <div className="row">
              <div className="col-sm-6"> {this.renderTextFieldAccount()}</div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  value={this.state.values.name}
                  type="text"
                  name="name"
                  required
                  label="Full Name"
                  onChange={this.handleChangeValue}
                  textDanger={this.state.errors.name}
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  value={this.state.values.password}
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
                  value={this.state.values.phone}
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
                  value={this.state.values.email}
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
                  value={this.state.values.userType}
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
              <Button SignUp>Register</Button>
              {this.renderButtonUpdate()}
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userEdit.account !== this.props.userEdit.account) {
      this.setState({
        values: this.props.userEdit,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.UserManagementReducer.userEdit,
  };
};

export default connect(mapStateToProps)(RegisterForm);
