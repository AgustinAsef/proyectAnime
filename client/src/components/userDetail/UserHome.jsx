import "./userHome.css"
function UserHome(userData) {

  const userName = userData.userData
  return(
  <div className="userHomeDivCOntainer">
    <div className="newSerieFormTittleContainer">
      <h2>Bienvenido otra vez {userName}</h2>
    </div>
  </div>
  )
}
export default UserHome