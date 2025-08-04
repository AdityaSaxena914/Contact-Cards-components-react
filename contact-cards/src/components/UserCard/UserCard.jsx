import React from "react";
import maleImg from "../../assets/male.png";
import femaleImg from "../../assets/female.png";
import "./UserCard.css"

const UserCard = ({ user }) => {
  const imgSrc = user.gender === "male" ? maleImg : femaleImg;

  return (
    <div className="info">
      <img src={imgSrc} alt="avatar" width="50" />
      <h4>{user.name}</h4>
      <p>{user.gender}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserCard;
