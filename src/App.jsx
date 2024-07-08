// import css
import './App.css'

// import react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import components
import Navbar from './components/Navbar/Navbar'

// import pages
import Home from './pages/Home/Home'
import MovieDetail from './pages/MovieDetail/MovieDetail'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
