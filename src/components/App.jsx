import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Fruit from "./Fruit";
import Navbar from "./Navbar";
import Vegetable from "./Vegetable";
import DairyProducts from "./DairyProducts";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/gemuese" element={<Vegetable />}/>
                        <Route path="/obst" element={<Fruit />}/>
                        <Route path="/milch" element={<DairyProducts />}/>
                    </Routes>
                </div>   
            </div>
        </Router>
    );
}
