import { useState } from "react";
import "./newSerie.css";

function NewSerie(data) {
  const [serie, setSerie] = useState("");
  const [caps, setCaps] = useState();

  function sendNewSerie() {
    console.log(serie);
    console.log(caps);
  }

  return (
    <div className="newSerieFormContainer p">
      <div className="newSerieFormTittleContainer">
        <button className="button buttonWatchSeason">Nueva Serie</button>
      </div>
      <form className="m p" id="newSerieForm" onSubmit={sendNewSerie}>
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
              onChange={(e) => setSerie(e.target.value)}
            />
          </div>
          <div>
            {"cuantas capitulos tiene?: "}
            <input
              type="number"
              name="capitulos"
              id="capitulos"
              className="m"
              required
              onChange={(e) => setCaps(e.target.value)}
            />
          </div>
        </div>
        <div className="m">
            <button className="button">Agregar</button>
          </div>
      </form>
    </div>
  );
}
export default NewSerie;
