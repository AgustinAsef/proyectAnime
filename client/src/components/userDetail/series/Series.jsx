/* import { useState } from "react";
 */import Caps from "../caps/Caps";

function Series(seriesData) {
/*   const [show, setShow] = useState("notShow");
 */  const series = seriesData.seriesData;
/*   function showCaps() {
    if (show == "notShow") {
      setShow("show");
    } else {
      setShow("notShow");
    }
  } */

  return (
    <>
      {series.map((serie) => (
        <div key={serie.id + serie.serieName} className="serieContainer m p">
          <div className="serieTittleContainer p">
            <h3>{serie.serieName}</h3>
            <button className="button">X</button>
          </div>
          <div className="capsContainer">
            <Caps caps={serie.caps}/>
          </div>
        </div>
      ))}
    </>
  );
}
export default Series;
