import { createSlice } from "@reduxjs/toolkit";

export const workersSlice = createSlice({
    name: "workers",
    initialState: {
        value: [
            {
                surname: "Kasenbekov",
                name: "Oleg",
                secondName: "Rinatovich",
                birthday: new Date('2002-04-14'),
                tabel: 1,
                position: "React Frontend Developer",
                unit: "Main",
                changeDate: Date.now(),
            }
        ]
    },

})

export default workersSlice.reducer