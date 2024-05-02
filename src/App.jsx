import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Student from "./components/pages/developer/database/student/Student"
import Teacher from "./components/pages/developer/database/teacher/Teacher"
import Staff from "./components/pages/developer/database/staff/Staff"




function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/database/student" element={<Student/>}/>
        <Route path="/database/teacher" element={<Teacher/>}/>
        <Route path="/database/staff" element={<Staff/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
