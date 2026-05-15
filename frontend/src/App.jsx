import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home   from "./pages/Home";
import Login  from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="app-main">
                    <Routes>
                        <Route path="/"       element={<Home />}   />
                        <Route path="/login"  element={<Login />}  />
                        <Route path="/signup" element={<Signup />} />
                        {/* Add more routes here */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;