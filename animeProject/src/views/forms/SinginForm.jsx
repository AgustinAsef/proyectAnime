import { useState } from "react";
import "./singInForm.css";
import axios from "axios";

function SingInForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorConfirmPassword, setErrorConfirmPassword] =
        useState("notShow errorMsg");
    const [userInfo, setUserInfo] = useState({});

    function formSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorConfirmPassword("show errorMsg");
        } else {
            setErrorConfirmPassword("notShow errorMsg");
            setUserInfo({
                userName: name,
                userEmail: email,
                userPassword: password,
            });
            axios({
                method: "post",
                url: "http://localhost:3030/user",
                data: { userInfo },
            }).catch(function (error) {
                if (error.response) {
                    alert(error.response.data);
                }
            });
        }
    }

    return (
        <div className="m singInDivContainer">
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
    );
}

export default SingInForm;
