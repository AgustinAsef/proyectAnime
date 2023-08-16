import NewSerie from "../forms/newSerie";
import "./home.css";

function Home(data) {
    data = data.data;
    console.log(data[0]);

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
                    <h1>!Hola otra vez {data[0].userName}!</h1>
                    <NewSerie/>
                    <div>
                        {data[0].series.map((serie)=>
                            <div key={serie.id} className="seriesDivContainer m p">
                                <div className="seriesNameDivContainer p">
                                    <h3>{serie.serieName}</h3>
                                    <button className="button buttonWatchSeason"><div className='arrowDown'></div></button>
                                </div>
                                {serie.seasons.map((season)=>
                                <div key={season.id}>                                
                                    <div className="center m">
                                    <p className="seriesbr"></p>
                                        <div className="buttonWatchCaps">
                                            <h4>{season.seasonName}</h4>
                                            <button className="button buttonWatchSeason"><div className='arrowDown'></div></button>
                                        </div>                            
                                    </div>
                                    <div className="seriesCapsContainer">
                                        {season.caps.map((cap)=>
                                        <div key={cap.id}>
                                            <button className="seriesCaps m button capsButtons" id='cap3'>Cap. {cap.number}</button>     
                                        </div>
                                        )}
                                    </div>
                                </div>
                                )}                               
                            </div>
                        )}
                    </div>    
                </section>
            }
        </>
    );
}

export default Home;
