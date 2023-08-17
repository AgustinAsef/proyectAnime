import './newSerie.css'
function NewSerie() {

    function showNewSeriesForm() {
        if (document.getElementById('newSerieForm').style.display == 'none' || document.getElementById('newSerieForm').style.display == '') {
            document.getElementById('newSerieForm').style.display = 'flex'
        }else{
            document.getElementById('newSerieForm').style.display = 'none'
        }
    }
    
    return (
        <div className=" ">
                <div className="newSeriesDiv  m">
                    <h3 className='p'>Nueva Serie</h3>
                    <button className="button buttonWatchSeason" onClick={showNewSeriesForm}><div>+</div></button>
                </div>
            <form className='notShow newSeriesDivForm m p' id='newSerieForm'>
                <div>
                    {"Serie: "}
                    <input type="text" name="" id="" placeholder="Name" className='m'/>
                </div>
                <div>
                    {"Temporadas: "}
                    <input type="number" name="" id="" placeholder="Last name" className='m'/>
                </div>
                <div>
                    {"Capitulos: "}
                    <input type="number" name="" id="" placeholder="capitulos" className='m'/>
                </div>
                <div>
                    <button className='button'>Agregar</button>                    
                </div>
            </form>
        </div>     
    );
}

export default NewSerie;