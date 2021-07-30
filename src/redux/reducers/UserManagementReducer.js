const initialState = {
  userList: [
    {
      No: "1",
      account: "thanhdat24",
      name: "Thành Đạt",
      password: "123",
      email: "thanhledatomon@gmail.com",
      phone: "0916671369",
      userType: true, //Customer
    },
    {
      No: "2",
      account: "ngocdiep11",
      name: "Ngọc Diệp",
      password: "123",
      email: "ngocdiep710@gmail.com",
      phone: "0946379177",
      userType: false, //Client
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
