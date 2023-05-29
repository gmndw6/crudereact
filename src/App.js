import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./components/View";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </Router>
  );
}

export default App;
