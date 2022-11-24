import { createBrowserRouter } from "react-router-dom";
import AddWorker from "../pages/AddWorker";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/new-worker',
        element: <AddWorker />
    }
])

export default router