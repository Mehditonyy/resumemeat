import Navbar from "./Navbar"
import Home from "./pages/Home"
import Youtube from "./pages/Youtube"
import Cloner from "./pages/Cloner"
import Hangman from "./pages/Hangman"
import Diary from "./pages/Diary"
import Milkman from "./pages/Milkman"
import Reddit from "./pages/Reddit"
import Hungrypets from "./pages/Hungrypets"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Spammer from "./pages/Spammer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/Hangman" element={<Hangman />} />
        <Route path="/Hungrypets" element={<Hungrypets />} />
        <Route path="/Milkman" element={<Milkman />} />
        <Route path="/Cloner" element={<Cloner />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Spammer" element={<Spammer />} />
        <Route path="/Reddit" element={<Reddit />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
