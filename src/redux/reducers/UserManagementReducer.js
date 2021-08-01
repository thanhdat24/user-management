import {
  add_user,
  delete_user,
  edit_user,
  update_user,
} from "../types/UserManagementTypes";

const initialState = {
  disableButton: true,
  disableAccount: false,
  userList: [
    {
      id: "1",
      account: "thanhdat24",
      name: "Thành Đạt",
      password: "123",
      email: "thanhledatomon@gmail.com",
      phone: "0916671369",
      userType: "Customer", //Customer
    },
    {
      id: "2",
      account: "ngocdiep11",
      name: "Ngọc Diệp",
      password: "123",
      email: "ngocdiep710@gmail.com",
      phone: "0946379177",
      userType: "Client", //Client
    },
  ],
  userEdit: {
    id: "",
    account: "",
    name: "",
    password: "",
    email: "",
    phone: "",
    userType: "Customer", //Customer
  },
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
      state.userEdit = {
        account: " ",
        name: "",
        password: "",
        phone: "",
        email: "",
        userType: "Customer",
      };
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
    case edit_user: {
      return {
        ...state,
        userEdit: action.user,
        disableButton: false,
        disableAccount: true,
      };
    }
    case update_user: {
      let { name, password, email, phone, userType } = action.newUser;
      state.userEdit = {
        ...state.userEdit,
        name: name,
        password: password,
        email: email,
        phone: phone,
        userType: userType,
      };

      let userListUpdate = [...state.userList];
      let index = userListUpdate.findIndex(
        (user) => user.account === state.userEdit.account
      );

      if (index !== -1) {
        userListUpdate[index] = state.userEdit;
        state.userEdit = {
          account: "",
          name: "",
          password: "",
          phone: "",
          email: "",
          userType: "Customer",
        };
      }

      return {
        ...state,
        userList: userListUpdate,
        disableButton: true,
        disableAccount: false,
      };
    }
    default:
      return { ...state };
  }
};

export default UserManagementReducer;
