import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentList from "./pages/studentList";
import AddStudent from "./pages/AddStudent";
import UpdateStudent from "./pages/UpdateStudent";
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/add" element={<AddStudent />}></Route>
          <Route path="/update/:id" element={<UpdateStudent />}></Route>
        </Routes>
    </div>
  );
}

export default App;
