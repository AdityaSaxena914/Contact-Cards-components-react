import React, { useState } from "react";
import "./AddUser.css"
const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim values to avoid spaces-only input
    if (!name.trim() || !gender.trim() || !age.trim()) {
      alert("All fields are mandatory!");
      return;
    }
    if (!isNaN(name.trim())) {
      alert("Name can't be a number.");
      return;
    }


    const ageNum = parseInt(age);
    const genderLower = gender.toLowerCase();

    if (genderLower !== "male" && genderLower !== "female") {
      alert("Gender must be either 'male' or 'female'");
      return;
    }

    if (isNaN(ageNum) || ageNum <= 0) {
      alert("Age must be a positive number");
      return;
    }

    onAddUser({
      name: name.trim(),
      gender: genderLower,
      age: ageNum,
    });

    // Reset
    setName("");
    setGender("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Add User</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        placeholder="Gender (male/female)"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      /><br />
      <input
        placeholder="Age"
        type="number"
        min="1"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
