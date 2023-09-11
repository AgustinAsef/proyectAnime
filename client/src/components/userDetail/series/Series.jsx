import { useEffect, useState } from "react";
import axios from "axios";
import Caps from "../caps/Caps";

import "./serie.css"


function Series(seriesData) { //recibe y mapea las series

  const [series, setSerie] = useState();

    async function deleteSerie(id) { //  recibe el id de la serie
        try {
            await axios({ //  el id se utiliza aqui para eliminarlo de la base de datos
                method: "delete",
                url: `https://proyectanime-production.up.railway.app/series/:${id}`,
            });
            let newSeriesArray = series.filter(serie => serie.id !== id) // aqui el id se utiliza para eliminarlo del array que se muestra en pantalla
            setSerie(newSeriesArray)
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{ //  setea el array de las series con la informacion recibida del componente padre
      setSerie(seriesData.seriesData)
    },[seriesData])

    if (series == undefined) { // si no hay series para mostrar muestra el mensaje
      return <div className="serieDivContainer serieTextAddContainer">Agrega series para verlas</div>;
    }else{
             return (
            <div className="serieDivContainer">
                {series.map((serie) => (
                    <div
                        key={serie.id + serie.serieName}
                        className="serieContainer m p"
                    >
                        <div className="serieTittleContainer p">
                            <h3>{serie.serieName}</h3>
                            <button
                                className="button"
                                onClick={() => {
                                    deleteSerie(serie.id);
                                }}>X</button>
                        </div>
                        <div className="capsContainer">
                            <Caps caps={serie.caps} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Series;
