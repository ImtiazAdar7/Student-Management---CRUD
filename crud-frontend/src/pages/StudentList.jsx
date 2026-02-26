import { getAllStudents, deleteStudent } from "../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
function StudentList() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const res = await getAllStudents();
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchStudents();
  };
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setTimeout(() => {
        fetchStudents();
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredStudent = students.filter((s) => {
    return (
      s.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) &&
      s.lastName.toLowerCase().includes(filter.lastName.toLowerCase()) &&
      s.email.toLowerCase().includes(filter.email.toLowerCase())
    );
  });

  return (
    <div>
      <div className="intro">
        <h1>Student Management [CRUD] - Imtiaz Adar</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => navigate("/add")}>
          Add Student
        </button>
        <br></br>
        <div>
          <h1>Search By First Name, Last Name or Email</h1>
        </div>
        <div>
          <label htmlFor="firstName"></label>
          <input
            type="text"
            name="firstName"
            value={filter.firstName}
            placeholder="First Name"
            onChange={handleFilterChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName"></label>
          <input
            type="text"
            name="lastName"
            value={filter.lastName}
            placeholder="Last Name"
            onChange={handleFilterChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            value={filter.email}
            placeholder="Email"
            onChange={handleFilterChange}
          ></input>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudent.map((s) => (
            <tr key={s.ID}>
              <td data-label="First Name">{s.firstName}</td>
              <td data-label="Last Name">{s.lastName}</td>
              <td data-label="Email">{s.email}</td>
              <td data-label="Age">{s.age}</td>
              <td data-label="Gender">{s.gender}</td>
              <td data-label="Designation">{s.designation}</td>
              <td data-label="Actions">
                <button onClick={() => navigate(`/update/${s.ID}`)}>
                  Update
                </button>
                <button onClick={() => handleDelete(s.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>&copy; 2026, All rights reserved, Imtiaz Adar</p>
    </div>
  );
}
export default StudentList;
