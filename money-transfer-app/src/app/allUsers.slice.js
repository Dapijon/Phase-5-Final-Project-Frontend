import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    users:[]
}
 
const allUserSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {}
})

