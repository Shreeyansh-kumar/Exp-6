import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    skills: [],
    address: "",
    state: "",
    age: ""
  });

  const states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi (NCT)",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];
  const skillOptions = ["Java", "Python", "React", "C++"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
DOB: ${formData.dob}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}
Age: ${formData.age}`
    );
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      skills: [],
      address: "",
      state: "",
      age: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br /><br />

        {/* Last Name */}
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br /><br />

        {/* Gender */}
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        /> Female
        <br /><br />

        {/* DOB */}
        <label>DOB: </label>
        <input
          type="datetime-local"
          name="dob"
          value={formData.dob}
          max={new Date().toISOString().slice(0, 16)}
          onChange={handleChange}
        />
        <br /><br />

        {/* Skills */}
        <label>Skills: </label>
        {skillOptions.map((skill) => (
          <span key={skill}>
            <input
              type="checkbox"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleCheckbox}
            />
            {skill}
          </span>
        ))}
        <br /><br />

        {/* Address */}
        <label>Address: </label><br />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br /><br />

        {/* State */}
        <label>State: </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          {states.map((st) => (
            <option key={st} value={st}>{st}</option>
          ))}
        </select>
        <br /><br />

        {/* Age */}
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default App;