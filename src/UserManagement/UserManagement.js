import React, { Component } from "react";

import { Container } from "../Containers/Containers";
import { PrimaryTheme } from "../Themes/PrimaryTheme";
import RegisterForm from "./RegisterForm";
import { ThemeProvider } from "styled-components";
import UserList from "./UserList";

export default class UserManagement extends Component {
  render() {
    return (
      <ThemeProvider theme={PrimaryTheme}>
        <Container>
          <RegisterForm />
          <UserList />
        </Container>
      </ThemeProvider>
    );
  }
}
