import { Link } from "react-router-dom";
import gitImg from '../../imgs/github-mark-white.png'
import linkedin from '../../imgs/linkedin.png'
import "./mesagge.css";

function FirstMessage() {
  return (
    <>
      <div className="messageDivContainer">
        <div className="messageContainer m p">
          <h1>Bienvenido a mi pagina</h1>
          <p className="p m">
            mi nombre es Agustin y esta pagina esta pensada para que puedas
            llevar al dia que capitulo de que serie estas viendo,
            ya que algunas paginas de dudosa procedencia no tienen formas faciles de hacerlo
          </p>
          <div>
            <p>dejo algunos links a mis cuentas personales:</p>
            <div className="personalLinksContainer">
              <a href="https://github.com/AgustinAsef"><img src={gitImg} alt="logo de Github" className="logoGit m p"/></a>
              <a href="https://www.linkedin.com/in/agustin-battigane-asef/"><img src={linkedin} alt="logo de linkedin" className="logoGit m p"/> </a>
            </div>
          </div>
          <div>
            <Link to={'/home'}>
              <button className="button">empecemos</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default FirstMessage;
