import "./singInForm.css";

function SingInForm() {
    return (
        <div className="m singInDivContainer">
            <h3>Ingresa tus datos por favor</h3>
            <form>
                <div className="p">
                    {"Nombre: "}
                    <input type="text" name="" id="" placeholder="Name" />
                </div>
                <div>
                    {"Apellido: "}
                    <input type="text" name="" id="" placeholder="Last name" />
                </div>
                <div className="p">
                    {"Email: "}
                    <input type="text" name="" id="" placeholder="Email" />
                </div>
                <div className="p">
                    {"Contrasena: "}
                    <input type="password" name="" id="" placeholder="Password" />
                </div>
                <div>
                    {"Confirma tu contrasena: "}
                    <input type='password' name="" id="" placeholder="Confirm your password"/>
                </div>
                <div className="p">
                    <button className="button" type="submit">Sing In</button>
                </div>
            </form>
        </div>
    );
}

export default SingInForm;
