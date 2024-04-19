import React from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
    </div>
  );
}

export default App;
