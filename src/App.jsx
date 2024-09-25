import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import MovieSearch from "./components/MoviesSearch"
import MovieResults from "./components/MovieResults"
import DropDownMenu from "./components/DropDownMenu"

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieSearch/>}></Route>
          <Route path="/:post.Title" element={<MovieResults/>}></Route>
        </Routes>
      </>
     </Router>
  )
}

export default App
