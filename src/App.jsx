import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Layout/Layout";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />    
        </Routes>
      </Router>
    </>
  );
}

export default App;
