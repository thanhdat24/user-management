import React, { Component } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Components/Table";

import { Button } from "../Components/Button";

export default class UserList extends Component {
  render() {
    return (
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th colSpan="8">User List</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>No.</Td>
              <Td>Account</Td>
              <Td>Full Name</Td>
              <Td>Password</Td>
              <Td>Email</Td>
              <Td>Phone Number</Td>
              <Td>User Type</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>thanhdat24</Td>
              <Td>Lê Thành Đạt</Td>
              <Td>123</Td>
              <Td>thanhledatomon@gmail.com</Td>
              <Td>0916671369</Td>
              <Td>Customer</Td>
              <Td>
                <Button Edit>Edit</Button>
                <Button>Delete</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>ngocdiep11</Td>
              <Td>Trần Thị Ngọc Diệp</Td>
              <Td>123</Td>
              <Td>ngocdiep710@gmail.com</Td>
              <Td>0946379177</Td>
              <Td>Client</Td>
              <Td>
                <Button Edit>Edit</Button>
                <Button>Delete</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  }
}
