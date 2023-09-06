import Nav from "../nav/Nav";
import NewSerie from "./newSerie/NewSerie";
/* import Series from "./series/Series";
 */ import UserHome from "./UserHome";

function UserHomeLogic(data) {
    const userData = data.data.userName;
    return (
        <>
            <Nav />
            <UserHome userData={userData} />
            <NewSerie data={data.data} />
        </>
    );
}
export default UserHomeLogic;
