import "./home.css";

function Home() {
    return (
        <section>
            <p className="p ">
                En esta pagina podras hacer el seguimiento de las series que ves online cuyas paginas no tienen formas para hacerlo, por eso he creado esta pagina, para que agregues las series que estas viendo, junto con las temporadas y sus capitulos, asi los vayas marcando cuando los veas.
                Puedes simplemente poner la serie, temporada y capitulos, o ponerles nombres a cada una de las cosas, como vos lo prefieras. 
            </p>
            <div className="seriesDivContainer m">
                <div className="seriesNameDivContainer p">
                    <h3>Nombre de la serie que estas viendo</h3>
                    <button className="button buttonWatchSeason">
                        ver temporadas
                    </button>
                </div>
                <div className="center p">
                    <p className="seriesbr"></p>
                    <div className="buttonWatchCaps">
                        <h4>Temporada 1 de la serie (puedes ponerle el nombre de la temporada si quieres)</h4>
                        <button className="button"> ver capitulos</button>
                    </div>
                </div>
                <div id="seriesCapsContainer" className="seriesCapsContainer">
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 1</label>
                        <input type="checkbox" name="cap1" id="cap1"/>
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 2</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 3</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 4</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 5</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 6</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 7</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 8</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 9</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 10</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                </div>
                <div className="center p">
                    <p className="seriesbr"></p>
                    <div className="buttonWatchCaps">
                        <h4>Temporada 2 de la serie</h4>
                        <button className="button"> ver capitulos</button>
                    </div>
                </div>
                <div id="seriesCapsContainer" className="seriesCapsContainer">
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 1</label>
                        <input type="checkbox" name="cap1" id="cap1" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 2</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 3</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 4</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 5</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 6</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 7</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 8</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 9</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 10</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 11</label>
                        <input type="checkbox" name="cap1" id="cap1" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 12</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 13</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 14</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 15</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 16</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 17</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 18</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 19</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 20</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                </div>
            </div>
            <div className="seriesDivContainer m">
                <div className="seriesNameDivContainer p">
                    <h3>Nombre de otra serie que estas viendo</h3>
                    <button className="button buttonWatchSeason">
                        ver temporadas
                    </button>
                </div>
                <div className="center p">
                    <p className="seriesbr"></p>
                    <div className="buttonWatchCaps">
                        <h4>Temporada 1 de la serie (puedes ponerle el nombre de la temporada si quieres)</h4>
                        <button className="button"> ver capitulos</button>
                    </div>
                </div>
                <div id="seriesCapsContainer" className="seriesCapsContainer">
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 1</label>
                        <input type="checkbox" name="cap1" id="cap1"/>
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 2</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 3</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 4</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 5</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 6</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 7</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 8</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 9</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 10</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                </div>
                <div className="center p">
                    <p className="seriesbr"></p>
                    <div className="buttonWatchCaps">
                        <h4>Temporada 2 de la serie</h4>
                        <button className="button"> ver capitulos</button>
                    </div>
                </div>
                <div id="seriesCapsContainer" className="seriesCapsContainer">
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 1</label>
                        <input type="checkbox" name="cap1" id="cap1" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 2</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 3</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 4</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 5</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 6</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 7</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 8</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 9</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 10</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap1">capitulo 11</label>
                        <input type="checkbox" name="cap1" id="cap1" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap2">capitulo 12</label>
                        <input type="checkbox" name="cap2" id="cap2" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap3">capitulo 13</label>
                        <input type="checkbox" name="cap3" id="cap3" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap4">capitulo 14</label>
                        <input type="checkbox" name="cap4" id="cap4" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap5">capitulo 15</label>
                        <input type="checkbox" name="cap5" id="cap5" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap6">capitulo 16</label>
                        <input type="checkbox" name="cap6" id="cap6" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap7">capitulo 17</label>
                        <input type="checkbox" name="cap7" id="cap7" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap8">capitulo 18</label>
                        <input type="checkbox" name="cap8" id="cap8" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap9">capitulo 19</label>
                        <input type="checkbox" name="cap9" id="cap9" />
                    </div>
                    <div className="seriesCaps m p">
                        <label htmlFor="cap10">capitulo 20</label>
                        <input type="checkbox" name="cap10" id="cap10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

{
    /* <div id="seriesCapsContainer" className="seriesCapsContainer">
<div className="seriesCaps m p">
    <label htmlFor="cap1">capitulo 1</label>
    <input type="checkbox" name="cap1" id="cap1" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap2">capitulo 2</label>
    <input type="checkbox" name="cap2" id="cap2" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap3">capitulo 3</label>
    <input type="checkbox" name="cap3" id="cap3" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap4">capitulo 4</label>
    <input type="checkbox" name="cap4" id="cap4" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap5">capitulo 5</label>
    <input type="checkbox" name="cap5" id="cap5" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap6">capitulo 6</label>
    <input type="checkbox" name="cap6" id="cap6" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap7">capitulo 7</label>
    <input type="checkbox" name="cap7" id="cap7" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap8">capitulo 8</label>
    <input type="checkbox" name="cap8" id="cap8" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap9">capitulo 9</label>
    <input type="checkbox" name="cap9" id="cap9" />
</div>
<div className="seriesCaps m p">
    <label htmlFor="cap10">capitulo 10</label>
    <input type="checkbox" name="cap10" id="cap10" />
</div>
</div> */
}
