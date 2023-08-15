function LogInForm() {
    return (
        <div className="m singInDivContainer">
            <h3>Ingresa tus datos por favor</h3>
            <form>
                <div className="p">
                    {"Email: "}
                    <input type="text" name="" id="" placeholder="Email" />
                </div>
                <div className="p">
                    {"Contrasena: "}
                    <input type="text" name="" id="" placeholder="Password" />
                </div>
                <div className="p">
                    <button className="button" type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LogInForm;
