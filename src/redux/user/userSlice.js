import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Ishola" | "ishola"},
    {id: 2, name: "Babalola"}, 
    {id: 3, name: "Ajani"}
]

const userSlice = createSlice({
   name: "users", 
   initialState, 
   reducers:{

   }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer