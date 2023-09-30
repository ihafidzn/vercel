import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users", //untuk penamaan slice
  initialState: userList, //data awal di store
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const {
        id,
        productName,
        productCategory,
        productFreshness,
        productPrice,
        ImageFile,
        ImageUrl,
        additionalDescription,
      } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.productName = productName;
        uu.productCategory = productCategory;
        uu.productFreshness = productFreshness;
        uu.productPrice = productPrice;
        uu.ImageFile = ImageFile;
        uu.ImageUrl = ImageUrl;
        uu.additionalDescription = additionalDescription;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
