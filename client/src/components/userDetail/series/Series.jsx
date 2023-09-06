import { useEffect, useState } from "react";
import axios from "axios";
import Caps from "../caps/Caps";

import "./serie.css"


function Series(seriesData) {

  const [series, setSerie] = useState() ;

    async function deleteSerie(id) {
        try {
            await axios({
                method: "delete",
                url: `http://localhost:3030/series/:${id}`,
            });
            let newSeriesArray = series.filter(serie => serie.id !== id)
            setSerie(newSeriesArray)
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
      setSerie(seriesData.seriesData)
    },[seriesData])

    if (series == undefined) {
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
