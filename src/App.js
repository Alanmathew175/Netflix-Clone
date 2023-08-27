import React from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Poster from "./Component/Poster/Poster";
import FileUpload from "./Component/Upload/Upload";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Poster title="Netflix Orginals" />
            <Poster title="Action" isSmall />
            <FileUpload />
        </div>
    );
}

export default App;
