import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Student from "./components/pages/developer/database/Student"


function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/database" element={<Student/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
