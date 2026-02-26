import { useState } from "react";
import { addStudent } from "../api/api";
import { useNavigate } from "react-router-dom";
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
function AddStudent() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    gender: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addStudent(formData);
      setTimeout(() => {
        navigate("/");
      }, 1500);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        gender: "",
        designation: "",
      });
    } catch (err) {
      console.log("There is something wrong. ", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName"></label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="lastName"></label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="age"></label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="gender"></label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="designation"></label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            required
          ></input>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
}
export default AddStudent;
