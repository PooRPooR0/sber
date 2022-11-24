import { createSlice } from "@reduxjs/toolkit";

export const positionsSlice = createSlice({
    name: "positions",
    initialState: {
        value: [
            "React Frontend Developer"
        ]
    },

})

export default positionsSlice.reducer