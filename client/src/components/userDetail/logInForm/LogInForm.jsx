import { useState } from "react";
import axios from "axios";
import UserHomeLogic from "../UserHomeLogic";
import "./logInForm.css";
import Nav from "../../nav/Nav";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState();

  async function logInputs(e) { //  manda al servidor el email y la contrasena para comprobarlos
    e.preventDefault(); 
    try {
      const data = await axios({
        method: "get",
        url: `https://proyectanime-production.up.railway.app/user/:${email}/:${password}`,
      });
      setData(data.data) //  en caso de que el email y la contrasena sean correctos setea la informacion en un estado
    } catch (error) {
     alert('mail o contrasena incorrectos')
    }
  }

  if (!data) { //  en caso de que no haya informacion se muestra el formulario, si hay informacion se muestra el desgloce de las series
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
