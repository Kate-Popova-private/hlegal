import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <RouterProvider router={createBrowserRouter(createRoutesFromElements(
            <Route path="/" element={<Home/>}>

            </Route>
        ))
        }/>
    );
}

export default App;
