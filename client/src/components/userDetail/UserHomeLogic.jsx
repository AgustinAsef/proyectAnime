import Nav from "../nav/Nav";
import NewSerie from "./newSerie/NewSerie";
import Series from "./series/Series";
import UserHome from "./UserHome";

function UserHomeLogic(data) {
    const userData = data.data.userName;
    const seriesData = data.data.series;

    if (seriesData == undefined) {
        return (
            <>
                <Nav />
                <UserHome userData={userData} />
                <NewSerie data={data}/>
            </>
        );
    } else {
        return (
            <>
                <Nav />
                <div className="generalHomeDivCOntainer">
                  <UserHome userData={userData} />
                  <NewSerie data={data}/>
                  <Series seriesData={seriesData} />
                </div>
            </>
        );
    }
}
export default UserHomeLogic;
