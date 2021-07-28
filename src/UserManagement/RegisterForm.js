import React, { Component } from "react";
import { TextField, TextFieldUserType } from "../Components/TextField";

import { Button } from "../Components/Button";
import { Heading3 } from "../Components/Heading";

export default class RegisterForm extends Component {
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
          <form>
            <div className="row">
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="text"
                  name="account"
                  required
                  label="Account"
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="text"
                  name="fullname"
                  required
                  label="Full Name"
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="password"
                  name="password"
                  required
                  label="Password"
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="phone"
                  name="phone"
                  required
                  label="Phone Number"
                ></TextField>
              </div>
              <div className="col-sm-6">
                {" "}
                <TextField
                  type="email"
                  name="email"
                  required
                  label="Email"
                ></TextField>
              </div>
              <div className="col-sm-6">
                <TextFieldUserType
                  label="User Type"
                  option1="Customer"
                  option2="Client"
                ></TextFieldUserType>
              </div>
            </div>
            <div class="mt-3">
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
