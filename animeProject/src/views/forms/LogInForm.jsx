import axios from "axios";
import { useState } from "react";
import HomeLogic from "../../logic/home/HomeLogic";

function LogInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState("notShow");

    const [userData, setUserData] = useState([])
    
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
    const data = [
        {
            id: 1,
            userName: "agustin",
            userMail: "agustin@gmail.com",
            userPasword: "1234",
            series: [
                {
                    id: 1,
                    serieName: "Neon Genesis Evangelion",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: false,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: false,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: false,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: false,
                        },
                    ],
                },
                {
                    id: 2,
                    serieName: "Nanatsu no Taizai",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: true,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: true,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: true,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: true,
                        },
                        {
                            id: 8,
                            number: 8,
                            isCheck: true,
                        },
                        {
                            id: 9,
                            number: 9,
                            isCheck: true,
                        },
                        {
                            id: 10,
                            number: 10,
                            isCheck: true,
                        },
                        {
                            id: 11,
                            number: 11,
                            isCheck: true,
                        },
                    ],
                },
            ],
        },
    ];

if (!data) {
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
}else{
    return(
        <HomeLogic data={data}/>
    )
}

}
export default LogInForm;
