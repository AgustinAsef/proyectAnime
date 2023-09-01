import { useState } from "react";
import axios from "axios";
import UserHomeLogic from "../UserHomeLogic";
import "./logInForm.css";
import Nav from "../../nav/Nav";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState();

  async function logInputs(e) {
    e.preventDefault();
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:3030/user/:${email}/:${password}`,
      });
      setData(data.data)
    } catch (error) {
     alert('mail o contrasena incorrectos')
    }
  }

  if (!data) {
    return (
      <div>
        <Nav />
        <div className="logInDivContainer">
          <div className="m p logInContainer">
            <h3>Ingresa tus datos por favor</h3>
            <form onSubmit={logInputs}>
              <div className="m">
                {"Email: "}
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  required
                  placeholder="Email"
                  minLength="12"
                  autoComplete="none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="m">
                {"Contrasena: "}
                <input
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  required
                  placeholder="Password"
                  minLength="2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="m">
                <button className="button" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <UserHomeLogic data={data} />;
  }
}
export default LogInForm;
