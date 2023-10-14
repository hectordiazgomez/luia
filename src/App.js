import Home from "./components/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/courses/duolingo/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
