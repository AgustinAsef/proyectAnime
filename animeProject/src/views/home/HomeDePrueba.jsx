 import "./home.css";
function HomeDePrueba() {/*
    function showSeasons() {
        if (
            document.getElementById("seasonsContainer").style.display ==
                "none" ||
            document.getElementById("seasonsContainer").style.display == ""
        ) {
            document.getElementById("seasonsContainer").style.display = "flex";
        } else {
            document.getElementById("seasonsContainer").style.display = "none";
            document.getElementById("capsContainer").style.display = "none";
        }
    }

    function showCaps() {
        if (
            document.getElementById("capsContainer").style.display == "none" ||
            document.getElementById("capsContainer").style.display == ""
        ) {
            document.getElementById("capsContainer").style.display = "flex";
        } else {
            document.getElementById("capsContainer").style.display = "none";
        }
    }

    function checkButton() {
        const buttonContainer = document.getElementById("cap1");
        const buttonDiv = document.getElementById("cap1Div");
        const buttonImg = document.getElementById("checked");
        if (!buttonImg) {
            buttonDiv.remove();
            let check = document.createElement("img");
            check.classList.add("imgCheckCaps");
            check.setAttribute("src", checkImg);
            check.setAttribute("id", "checked");
            buttonContainer.appendChild(check);
        } else {
            buttonImg.remove();
            let unCheck = document.createElement("div");
            unCheck.setAttribute("id", "cap1Div");
            buttonContainer.appendChild(unCheck);
            document.getElementById("cap1Div");
            document.getElementById("cap1Div").innerHTML = "Cap. 1";
        }
    }
    return (
        <>
            <NewSerie />
            {series.map((serie) => (
                <div key={serie.id} className="seriesDivContainer m p">
                    <div className="seriesNameDivContainer p">
                        <h3>{serie.serieName}</h3>
                        <button className="button buttonWatchSeason">
                            <div className="arrowDown"></div>
                        </button>
                    </div>
                    {seasons.map((season) => (
                        <div
                            className="center m"
                            key={season.id + season.seasonName}
                        >
                            <p className="seriesbr"></p>
                            <div className="buttonWatchCaps">
                                <h4>{season.seasonName}</h4>
                                <button className="button buttonWatchSeason">
                                    <div className="arrowDown"></div>
                                </button>
                            </div>
                            <div className="seriesCapsContainer">
                                {caps.map((cap) => (
                                    <div key={cap.id} id="capsContainer">
                                        <button
                                            className="seriesCaps m button capsButtons"
                                            id="cap3"
                                        >
                                            Cap. {cap.number}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );*/
}

export default HomeDePrueba;
 