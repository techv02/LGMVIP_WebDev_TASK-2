import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      console.log(data.results[0]);
      const d = data.results[0];
      setDetails(d);
      setFirst(d.name["first"]);
      setLast(d.name["last"]);
      setTitle(d.name["title"]);
      setGender(d.gender);
      setImage(d.picture["large"]);
      setEmail(d.email);
      console.log("Vinayak Gupta", d.gender);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ backgroundColor: "#FFE1AF" }}>
      <nav class="navbar navbar-light justify-content-start" style={{backgroundColor: "#F98404"}}>
        <a
          class="navbar-brand"
          style={{
            marginRight: "31%",
            fontSize: "20px",
            color: "#FCECDD",
            fontWeight: "bold",
          }}
        >
          Lets Grow More
        </a>

        <button class="btn btn-primary btn-lg rainbow rainbow-1" onClick={() => getUser()} style={{color:"#FCECDD",backgroundColor:"#C51350"}}>
          Click to get new User
        </button>
      </nav>

      <div
        class="card"
        style={{
          width: "33rem",
          marginLeft: "40%",
          marginTop: "5%",
          border :"10px inset #FF4C29",
          backgroundColor: "#FBF4E9",
        }}
      >
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title" style={{ fontWeight: "bold",color:"orangered" }}>
            Name
          </h5>
          <p class="card-text" style={{color:"black"}}>
            {title} {first} {last}
          </p>
          <p style={{color:"orangered"}}>--------------------------------------------------</p>
          <h5 class="card-title" style={{ fontWeight: "bold",color:"orangered" }}>
            Gender
          </h5>
          <p class="card-text" style={{color:"black"}}>{gender}</p>
          <p style={{color:"orangered"}}>--------------------------------------------------</p>
          <h5 class="card-title" style={{ fontWeight: "bold",color:"orangered" }}>
            Email
          </h5>
          <p class="card-text" style={{color:"black"}}>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;