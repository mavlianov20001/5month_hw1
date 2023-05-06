import './App.css'
import {Route, Routes} from "react-router-dom";
import Products from "./components/Products/Products.jsx";
import Korzina from "./components/Korzina/Korzina.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route index element={<Products/>}/>
                <Route path='/korzina' element={<Korzina/>}/>
            </Routes>
        </>
    )
}

export default App
