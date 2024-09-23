import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import MovieSearch from "./components/MoviesSearch"

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route>
            
          </Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movies" element={<MovieSearch/>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </>
     </Router>
  )
}

export default App
