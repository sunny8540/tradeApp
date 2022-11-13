import React from "react";
import News from "./News";
import Contact from "./Contact";
// import CryptoCurrency from "./CryptoCurrency";
import Home from './Home';
import Mutual from './Mutual';
import './index.css';
import {Route,Routes} from "react-router-dom";
function App(){
    return(
        <>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<News />} />
            <Route  path="/Mutual" element={<Mutual />} />
            <Route  path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}
export default App;
    