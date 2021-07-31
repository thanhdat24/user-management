import React, { Component } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Components/Table";

import { Button } from "../Components/Button";
import { connect } from "react-redux";
import { deleteUserAction } from "../redux/actions/UserManagementActions";

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
            <Button Edit>Edit</Button>
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
              <Td>No.</Td>
              <Td>Account</Td>
              <Td>Full Name</Td>
              <Td>Password</Td>
              <Td>Email</Td>
              <Td>Phone Number</Td>
              <Td>User Type</Td>
            </Tr>
          </Thead>
          <Tbody>{this.renderUserList()}</Tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userList: state.UserManagementReducer.userList };
};

export default connect(mapStateToProps)(UserList);
