import { Link } from "react-router-dom"
import './nav.css'
function Nav() {
  return(<>
          <div className="navDivContainer">
            <div className="m">
                <Link to={'/home'} className="navTittle">
                 <h2>ANIMEproject</h2>
                </Link>
            </div>
            <div className="m">
                <Link to={'/singin'}>
                    <button className="m buttonNav">Sing In</button>   
                </Link>
                <Link to={'/login'}>
                    <button className="m buttonNav ">Log In</button>
                </Link>
            </div>
        </div>
  </>)
}
export default Nav