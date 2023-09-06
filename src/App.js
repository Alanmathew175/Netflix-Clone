import React from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import ModalExample from "./Component/Modal/Modal";
import Navbar from "./Component/Navbar/Navbar";
import Poster from "./Component/Poster/Poster";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Poster title="Netflix Orginals" />
            <Poster title="Action" isSmall />
            <ModalExample />
            {/* <FileUpload /> */}
        </div>
    );
}

export default App;
