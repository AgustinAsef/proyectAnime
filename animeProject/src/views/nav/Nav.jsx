import { Link } from "react-router-dom"
import logo from '../imgs/logo.png'
import './nav.css'

function Nav() {
    return(
        <div className="navDivsContainer">
            <div className="m ">
                <Link to={'/home'} className="navLinkHomeContainer">
                    <img src={logo} alt="" className="p navLinkHomeImg"/>
                    <div className="navLinkHome">
                        <h1 className="navLinkTittleOne">ANIMEpj.</h1>
                    </div>
                </Link>
            </div>
            <div className="m">
                <Link className="m">
                    <button className="navButtonLinkSing">Sing In</button>   
                </Link>
                <Link>
                    <button className="navButtonLinkLog">Log In</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav