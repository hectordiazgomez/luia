import Home from "./components/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/courses/duolingo/main";
import Aieasy from "./components/courses/duolingo/ai/aieasy";
import Listeningeasy from "./components/courses/duolingo/listening/listeningeasy"
import Listeningmedium from "./components/courses/duolingo/listening/listeningmedium"
import Listeninghard from "./components/courses/duolingo/listening/listeninghard"
import Writing from "./components/courses/duolingo/writing/writing";
import Listening from "./components/courses/duolingo/listening/listening";
import Vocabulary from "./components/courses/duolingo/vocabulary/vocabulary";
import Ai from "./components/courses/duolingo/ai/ai";
import Describe from "./components/courses/duolingo/describe/describe";
import Interactive from "./components/courses/duolingo/interactive/interactive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/listeningeasy" element={<Listeningeasy />} />
        <Route path="/listeninghard" element={<Listeninghard />} />
        <Route path="/listeningmedium" element={<Listeningmedium />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/describe" element={<Describe />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </Router>
  );
}

export default App;
