import Home from "./components/home"
import { Routes, Route } from "react-router-dom";
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
import Listeninglectures from "./components/courses/duolingo/listening/listeninglectures";
import Luia from "./components/luia/luia";
import Lectures from "./components/courses/duolingo/Lectures/lectures";
import Describeeasy from "./components/courses/duolingo/describe/describeeasy";
import Writingeasy from "./components/courses/duolingo/writing/writingeasy";
import Writinghard from "./components/courses/duolingo/writing/writinghard";
import Writingmedium from "./components/courses/duolingo/writing/writingmedium";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/luia" element={<Luia />} />
        <Route path="/main" element={<Main />} />
      <Route path="/lectures" element={<Lectures />} />
      <Route path="/writingmedium" element={<Writingmedium />} />
      <Route path="/writinghard" element={<Writinghard />} />
      <Route path="/writingeasy" element={<Writingeasy />} />
      <Route path="/describeeasy" element={<Describeeasy />} />
        <Route path="/listeningeasy" element={<Listeningeasy />} />
        <Route path="/listeninghard" element={<Listeninghard />} />
        <Route path="/listeningmedium" element={<Listeningmedium />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/describe" element={<Describe />} />
        <Route path="/interactive" element={<Interactive />} />
      <Route path="/listeninglectures" element={<Listeninglectures />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
  );
}

export default App;
