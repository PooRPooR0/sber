import { createSlice } from "@reduxjs/toolkit";

export const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        value: [
            {
                name: "Фамилия",
                showInDetails: true
            },
            {
                name: "Имя",
                showInDetails: true
            },
            {
                name: "Отчество",
                showInDetails: true
            },
            {
                name: "День рождения",
                showInDetails: true
            },
            {
                name: "Табельный номер",
                showInDetails: true
            },
            {
                name: "Должность",
                showInDetails: true
            },
            {
                name: "Отдел",
                showInDetails: true
            },
        ]
    },
    reducers: {
        changeShowInDetails: (state, action) => {
            const index = state.value.findIndex(field => field.name === action.payload)
            state.value[index].showInDetails = !state.value[index].showInDetails
        } 
    }
})

export const {changeShowInDetails} = fieldsSlice.actions

export default fieldsSlice.reducer