import { add_user, delete_user } from "../types/UserManagementTypes";

const initialState = {
  userList: [
    {
      No: "1",
      account: "thanhdat24",
      name: "Thành Đạt",
      password: "123",
      email: "thanhledatomon@gmail.com",
      phone: "0916671369",
      userType: "Customer", //Customer
    },
    {
      No: "2",
      account: "ngocdiep11",
      name: "Ngọc Diệp",
      password: "123",
      email: "ngocdiep710@gmail.com",
      phone: "0946379177",
      userType: "Client", //Client
    },
  ],
};

export const UserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_user: {
      let userListUpdate = [...state.userList];
      let index = userListUpdate.findIndex(
        (user) => user.account === action.newUser.account
      );
      if (index !== -1) {
        alert("Account already exists!");

        return { ...state };
      }
      userListUpdate.push(action.newUser);
      console.log(userListUpdate);
      return { ...state, userList: userListUpdate };
    }
    case delete_user: {
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.account !== action.userAccount
        ),
      };
    }
    default:
      return { ...state };
  }
};

export default UserManagementReducer;
