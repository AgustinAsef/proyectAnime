import { useState } from "react";
import Caps from "../caps/Caps";
function Series(data) {
    const [show, setShow] = useState("notShow");
    const series = data.data;

    function showCaps() {
        if (show == "notShow") {
            setShow("show");
        } else {
            setShow("notShow");
        }
    }

    return (
        <>
            {series.map((serie) => (
                <div key={serie.id + serie.serieName} className="seriesDivContainer m p">
                    <div className="seriesNameDivContainer p">
                        <h3>{serie.serieName}</h3>
                        <button
                            className="button buttonWatchSeason"
                            onClick={showCaps}
                        >
                            <div className="arrowDown"></div>
                        </button>
                    </div>
                    <div  className="seriesCapsContainer">
                        <div className={show}>
                            <Caps data={serie.caps}/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Series;
