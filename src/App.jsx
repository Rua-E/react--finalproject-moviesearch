import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieSearch from "./components/MoviesSearch";
import MovieResults from "./components/MovieResults";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieSearch/>}></Route>
          <Route path="/:Id" element={<MovieResults/>}></Route>
        </Routes>
     </Router>
  )
}

export default App
