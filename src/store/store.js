import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "./workersSlice"
import positionsReducer from "./positionsSlice"
import unitsReducer from "./unitsSlice"

export default configureStore({
    reducer: {
        workers: workersReducer,
        positions: positionsReducer,
        units: unitsReducer,
    }
})