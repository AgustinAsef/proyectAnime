import Seasons from "../seasons/Seasons";

function Series(data) {
    const series = data.data;

    return (
        <>
            {series.map((serie) => (
                <div key={serie.id} className="seriesDivContainer m p">
                    <div className="seriesNameDivContainer p">
                        <h3>{serie.serieName}</h3>
                        <button className="button buttonWatchSeason">
                            <div className="arrowDown"></div>
                        </button>
                    </div>
                    <Seasons data={serie.seasons} />
                </div>
            ))}
        </>
    );
}

export default Series;
