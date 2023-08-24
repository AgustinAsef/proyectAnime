import { Link } from "react-router-dom"
import './nav.css'

function Nav() {
    return(
        <div className="navDivsContainer">
            <div className="m ">
                <Link to={'/home'} className="navLinkHomeContainer">
{/*                     <img src={logo} alt="" className="p navLinkHomeImg"/>
                    <div className="navLinkHome">
                        <h1 className="navLinkTittleOne">ANIMEpj.</h1>
                    </div>
 */}                </Link>
            </div>
            <div className="m">
                <Link className="m" to={"/singin"}>
                    <button className="button">Sing In</button>   
                </Link>
                <Link>
                    <button className="button" to={"/"}>Log In</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav