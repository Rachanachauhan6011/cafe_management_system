import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: "",
    email: "",
};
const adminSlice = createSlice({
    name : "admin",
    initialState,
    reducers : {
        setAdminDetails : (state , action) => {
            const {name , email} = action.payload
            state.name = name
            state.email = email
        },
        removeAdminDetails : (state ) => {
            return initialState
        }
    }
})

export const {setAdminDetails, removeAdminDetails} = adminSlice.actions

export default adminSlice.reducer