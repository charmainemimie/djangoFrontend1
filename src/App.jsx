
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage';

function App() {


  return (
    <>

  
    <Router>
      <Routes>
        <Route path='/' element={  <SignupPage/>}/>
        <Route path='/home' element={  <HomePage/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
