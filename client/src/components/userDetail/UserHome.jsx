
function UserHome(userData) {

  const userName = userData.userData
  return(
  <>
    <div className="newSerieFormTittleContainer">
      <h2>Bienvenido otra vez {userName}</h2>
    </div>
  </>
  )
}
export default UserHome