import { useState } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import "./singInForm.css";

function SingInForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorConfirmPassword, setErrorConfirmPassword] =
        useState("notShow errorMsg");

    function formSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorConfirmPassword("show errorMsg");
        } else {
            setErrorConfirmPassword("notShow errorMsg");
            axios({
                method: "post",
                url: `http://localhost:3030/user/:${email}/:${password}/:${name}`,
            })
                .then(() => {
                    alert("usuario creado con exito");
                })
                .catch(() => {
                    alert("no se ha podido crear el usuario o este ya existe");
                });
        }
    }

    return (
        <div>
            <Nav />
            <div className="singInDivContainer">
                <div className=" p m singInContainer">
                    <h3>Ingresa tus datos por favor</h3>
                    <form onSubmit={formSubmit}>
                        <div className="p">
                            {"Nick name: "}
                            <input
                                type="text"
                                name="nickName"
                                id="nickName"
                                placeholder="Name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                minLength="5"
                                autoComplete="off"
                            />
                        </div>
                        <div className="p">
                            {"Email: "}
                            <input
                                type="email"
                                name="userEmail"
                                id="userEmail"
                                required
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                minLength="12"
                                autoComplete="none"
                            />
                        </div>
                        <div className="p">
                            {"Contrasena: "}
                            <input
                                type="password"
                                name="userPassword"
                                id="userPassword"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                minLength="8"
                            />
                        </div>
                        <div>
                            {"Confirma tu contrasena: "}
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                required
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className="p">
                            <button className="button" type="submit">
                                Sing In
                            </button>
                            <p className={errorConfirmPassword}>
                                las contrasenas no coinciden
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SingInForm;
