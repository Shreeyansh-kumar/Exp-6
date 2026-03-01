import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|[a-zA-Z]{2,})$/;
    if (!emailPattern.test(email)) {
      newErrors.email =
        "Email must contain @ and valid domain (.com, .in, or country code)";
    }

    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z][A-Za-z0-9!@#$%^&*]{4,}$/;

    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must start with capital letter, contain at least one number, one special character, and be at least 5 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful ✅");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Client-Side Validation Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;