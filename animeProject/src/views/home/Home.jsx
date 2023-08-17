import NewSerie from "../forms/newSerie";
import "./home.css";
import Series from "./series/series";

function Home(data) {
    const user = {
        userId: data.data[0].id,
        userMail: data.data[0].userMail,
        userName: data.data[0].userName,
        userPasword: data.data[0].userPasword,
        userSeries: data.data[0].series
    }
    
    return (
        <>
            {
                <section>
                    <p className="p ">
                        En esta pagina podras hacer el seguimiento de las series
                        que ves online cuyas paginas no tienen formas para
                        hacerlo, por eso he creado esta pagina, para que
                        agregues las series que estas viendo, junto con las
                        temporadas y sus capitulos, asi los vayas marcando
                        cuando los veas. Puedes simplemente poner la serie,
                        temporada y capitulos, o ponerles nombres a cada una de
                        las cosas, como vos lo prefieras.
                    </p>
                    <h1>!Hola otra vez {user.userName}!</h1>
                    <NewSerie/>
                    <div>
                        <Series data={user.userSeries}/>
                    </div>    
                </section>
            }
        </>
    );
}

export default Home;
