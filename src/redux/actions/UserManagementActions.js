import { add_user } from "../types/UserManagementTypes";

export const addUserAction = (newUser) => ({
  type: add_user,
  newUser,
});
