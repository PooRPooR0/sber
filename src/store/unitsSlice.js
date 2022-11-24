import { createSlice } from "@reduxjs/toolkit";

export const unitsSlice = createSlice({
    name: "units",
    initialState: {
        value: [
            'Отдел 1',
            'Отдел 2',
            'Отдел 3',
            'Отдел 4',
            'Отдел 5',
        ]
    },
    reducers: {

    }
})


export default unitsSlice.reducer