import React, { Component } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Components/Table";
import {
  deleteUserAction,
  editUserAction,
} from "../redux/actions/UserManagementActions";

import { Button } from "../Components/Button";
import { connect } from "react-redux";

class UserList extends Component {
  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return (
        <tr key={index}>
          <Td>{index + 1}</Td>
          <Td>{user.account}</Td>
          <Td>{user.name} </Td>
          <Td>{user.password}</Td>
          <Td>{user.email}</Td>
          <Td>{user.phone}</Td>
          <Td>{user.userType}</Td>
          <Td>
            <Button
              onClick={() => {
                this.props.dispatch(editUserAction(user));
              }}
              Edit
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                this.props.dispatch(deleteUserAction(user.account));
              }}
            >
              Delete
            </Button>
          </Td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#242424",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            fontSize: "20px",
          }}
          className="user-list text-light d-flex pl-4 "
          colSpan="8"
        >
          User List
        </div>
      
          <Table>
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Account</Th>
                <Th>Full Name</Th>
                <Th>Password</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>User Type</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>{this.renderUserList()}</Tbody>
          </Table>
     
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.UserManagementReducer.userList,
  };
};

export default connect(mapStateToProps)(UserList);
