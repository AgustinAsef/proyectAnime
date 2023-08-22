import { useState } from "react";
import Series from "../home/series/Series";
import "./newSerie.css";

function NewSerie(data) {
    const [newData, setNewData] = useState(data.data)
    
   /*  const newData = data.data; */
    const newSerie = {
        serieName: "",
        caps: [],
    };

    const [serie, setSerie] = useState("");
    const [caps, setCaps] = useState();

    function createImputs(e) {
        e.preventDefault();

        newSerie.serieName = serie;
        for (var i = 0; i < caps; i++) {
            newSerie.caps.push({
                id: i + 1,
                number: i + 1,
                isCheck: false,
            });
        }
       setNewData([...newData, newSerie]);
    }

    return (
        <div className=" ">
            <div className="newSeriesDiv  m">
                <h3 className="p">Nueva Serie</h3>
                <button className="button buttonWatchSeason">
                    <div>+</div>
                </button>
            </div>
            <form className="newSeriesDivForm m p" id="newSerieForm">
                <div>
                    <div>
                        {"que estas viendo?: "}
                        <input
                            type="text"
                            name="serie"
                            id="serie"
                            placeholder="nombre de la serie"
                            className="m"
                            onChange={(e) => setSerie(e.target.value)}
                        />
                    </div>
                    <div>
                        {"capitulos: "}
                        <input
                            type="number"
                            name="capitulos"
                            id="capitulos"
                            placeholder="cuantas capitulos tiene"
                            className="m"
                            onChange={(e) => setCaps(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="button" onClick={createImputs}>
                            Agregar capitulos
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <Series data={newData} />
            </div>
        </div>
    );
}
export default NewSerie;
