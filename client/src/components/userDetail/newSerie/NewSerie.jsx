import { useState } from "react";
import axios from "axios";
import Series from "../series/Series";
import "./newSerie.css";

function NewSerie(data) {
    const userId = data.data.id;

    const [serieData, setSerieData] = useState(data.data.series)
    const [serieName, setSerieName] = useState("");
    const [caps, setCaps] = useState(0);

    const [show, setShow] = useState("notShow");


    function showNewSerieForm() { //  cambia la visibilidad del formulario alterando el estado
        if (show == "show") {
            setShow("notShow");
        } else {
            setShow("show");
        }
    }

    async function sendNewSerie(e) { //  envia al servidor la informacion de el nombre de la serie, la cantidad de capitulos y el id del usuario      
        e.preventDefault();          //  para crear una nueva serie
        try {
            let newSerie = await axios({
                method: "post",
                url: `https://proyectanime-production.up.railway.app/series/:${serieName}/:${caps}/:${userId}`,
            });
            showNewSerieForm()
            if (serieData === undefined) { //  si el array de la informacion esta vacio agrega la respuesta del servidor
              setSerieData([newSerie.data]);
            }else{ //  si no, suma al array de la informacion la data recibida del servidor
              setSerieData(serieData.concat(newSerie.data));           
            }
        } catch (error) {
            alert("error");
        }
    }

    return (
        <div>
            <div className="newSerieFormContainer">
            <div className="newSerieFormTittleContainer">
                <button
                    className="button buttonWatchSeason"
                    onClick={showNewSerieForm}>
                      Nueva Serie
                </button>
            </div>
            <form className="m p" id="newSerieForm" onSubmit={sendNewSerie}>
                <div className={show}>
                    <div className="newSerieFormInputs">
                        <div>
                            {"que vas a ver hoy?: "}
                            <input
                                type="text"
                                name="serie"
                                id="serie"
                                className="m"
                                required
                                autoComplete="off"
                                onChange={(e) => setSerieName(e.target.value)}
                            />
                        </div>
                        <div>
                            {"cuantas capitulos tiene?: "}
                            <input
                                type="number"
                                name="capitulos"
                                min={1}
                                id="capitulos"
                                className="m"
                                required
                                onChange={(e) => setCaps(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="m">
                        <button className="button" type="submit">Agregar</button>
                    </div>
                </div>
            </form>
            </div>
            <div>
                <Series seriesData={serieData} />
            </div>
        </div>
    );
}

export default NewSerie;
