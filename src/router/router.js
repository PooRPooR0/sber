import { createBrowserRouter } from "react-router-dom";
import AddWorker from "../pages/AddWorker";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/new-worker',
        element: <AddWorker />
    },
    {
        path: '/settings',
        element: <Settings />
    }
])

export default router