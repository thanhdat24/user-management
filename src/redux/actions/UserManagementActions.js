import {
  add_user,
  delete_user,
  edit_user,
  update_user,
} from "../types/UserManagementTypes";

export const addUserAction = (newUser) => ({
  type: add_user,
  newUser,
});

export const deleteUserAction = (userAccount) => ({
  type: delete_user,
  userAccount,
});

export const editUserAction = (user) => ({
  type: edit_user,
  user,
});

export const updateUserAction = (newUser) => ({
  type: update_user,
  newUser,
});
