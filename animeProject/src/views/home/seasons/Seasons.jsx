import Caps from "../caps/Caps";

function Seasons(data) {
    const seasons = data.data

    return (
        <>
            {seasons.map((season) => (
                <div className="center m" key={season.id+season.seasonName}>
                    <p className="seriesbr"></p>
                    <div className="buttonWatchCaps">
                        <h4>{season.seasonName}</h4>
                        <button className="button buttonWatchSeason">
                            <div className="arrowDown"></div>
                        </button>
                    </div>
                    <div className="seriesCapsContainer">
                        <Caps data={season.caps} season={season.id}/>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Seasons;
