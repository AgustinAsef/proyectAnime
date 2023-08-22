import axios from "axios";
import { useState } from "react";

function LogInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState("notShow");
    async function logInputs(e) {
        e.preventDefault();
        try {
            const data = await axios({
                method: "get",
                url: `http://localhost:3030/user/:${email}/:${password}`,
            });
            console.log(data);
            setShowErrorMsg("notShow");
        } catch (error) {
            if (error.response) {
                setErrorMsg(error.response.data);
                setShowErrorMsg("errorMsg");
            }
        }
    }
    return (
        <div className="m singInDivContainer">
            <h3>Ingresa tus datos por favor</h3>
            <form onSubmit={logInputs}>
                <div className="p">
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
                <div className="p">
                    {"Contrasena: "}
                    <input
                        type="password"
                        name="userPassword"
                        id="userPassword"
                        required
                        placeholder="Password"
                        minLength="8"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="p">
                    <button className="button" type="submit">
                        Log In
                    </button>
                    <p className={showErrorMsg}>{errorMsg}</p>
                </div>
            </form>
        </div>
    );
}
export default LogInForm;
