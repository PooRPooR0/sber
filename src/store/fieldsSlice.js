import { createSlice } from "@reduxjs/toolkit";

export const fieldsSlice = createSlice({
    name: "fields",
    initialState: {
        value: [
            {
                name: "surname",
                label: "Фамилия",
                showInDetails: true,
                type: "text",
            },
            {
                name: "name",
                label: "Имя",
                showInDetails: true,
                type: "text"
            },
            {
                name: "secondName",
                label: "Отчество",
                showInDetails: true,
                type: "text"
            },
            {
                name: "birthday",
                label: "День рождения",
                showInDetails: true,
                type: "date"
            },
            {
                name: "tabel",
                label: "Табельный номер",
                showInDetails: true,
                type: "number"
            },
            {
                name: "position",
                label: "Должность",
                showInDetails: true,
                type: "autocomplete",
                options: "positions"
            },
            {
                name: "unit",
                label: "Отдел",
                showInDetails: true,
                type: "autocomplete",
                options: "units"
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