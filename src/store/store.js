import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "./workersSlice"
import positionsReducer from "./positionsSlice"
import unitsReducer from "./unitsSlice"
import fieldsReducer from "./fieldsSlice"

export default configureStore({
    reducer: {
        workers: workersReducer,
        positions: positionsReducer,
        units: unitsReducer,
        fields: fieldsReducer,
    }
})