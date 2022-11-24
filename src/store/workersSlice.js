import { createSlice } from "@reduxjs/toolkit";

export const workersSlice = createSlice({
    name: "workers",
    initialState: {
        value: [
            {
                id: Date.now(),
                surname: "Kasenbekov",
                name: "Oleg",
                secondName: "Rinatovich",
                birthday: "2022-09-01",
                tabel: 1,
                position: "React Frontend Developer",
                unit: "Отдел 1",
                changeDate: Date.now(),
            }
        ]
    },
    reducers: {
        updateWorker: (state, action) => {
            state.value = [ ...state.value.filter((worker) => worker.id !== action.payload.id), action.payload]
        }
    }
})

export const {updateWorker} = workersSlice.actions;

export default workersSlice.reducer