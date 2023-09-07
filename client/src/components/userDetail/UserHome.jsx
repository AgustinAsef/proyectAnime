import "./userHome.css"
function UserHome(userData) {

  const userName = userData.userData //recibe la informacion del usuario y muesta el nombre nomas

  return(
  <div className="userHomeDivCOntainer">
    <div className="newSerieFormTittleContainer">
      <h2>Bienvenido otra vez {userName}</h2>
    </div>
  </div>
  )
}
export default UserHome