import './home.css'
import checkImg from'../imgs/check.png'
import NewSerie from '../forms/newSerie'
function HomeDePrueba() {
    function showSeasons() {
        if (document.getElementById('seasonsContainer').style.display == 'none' || document.getElementById('seasonsContainer').style.display == '') {
            document.getElementById('seasonsContainer').style.display = 'flex'
        }else{
            document.getElementById('seasonsContainer').style.display = 'none'
            document.getElementById('capsContainer').style.display = 'none'
        }
    }
    
    function showCaps() {
        if (document.getElementById('capsContainer').style.display == 'none' || document.getElementById('capsContainer').style.display == '') {
            document.getElementById('capsContainer').style.display = 'flex'
        }else{
            document.getElementById('capsContainer').style.display = 'none'
        }
    }

    function checkButton() {
        const buttonContainer = document.getElementById('cap1')
        const buttonDiv = document.getElementById('cap1Div')
        const buttonImg = document.getElementById('checked')
        if (!buttonImg) {

            buttonDiv.remove()
            let check = document.createElement('img')
            check.classList.add('imgCheckCaps')
            check.setAttribute("src", checkImg)
            check.setAttribute('id',"checked")
            buttonContainer.appendChild(check)            
        }else{

            buttonImg.remove()
            let unCheck = document.createElement('div')
            unCheck.setAttribute('id',"cap1Div")
            buttonContainer.appendChild(unCheck)
            document.getElementById('cap1Div')
            document.getElementById("cap1Div").innerHTML = "Cap. 1"
        }
    }
    return(
        <>
        <NewSerie/>
        <div className="seriesDivContainer m">
        <div className="seriesNameDivContainer p">
            <h3>Nombre de la serie que estas viendo</h3>
            <button className="button buttonWatchSeason" onClick={showSeasons}><div className='arrowDown'></div></button>
        </div>
        <div className="center p notShow" id="seasonsContainer">
            <p className="seriesbr"></p>
            <div className="buttonWatchCaps">
                <h4>Temporada 1 de la serie (puedes ponerle el nombre de la temporada si quieres)</h4>
                <button className="button" onClick={showCaps}><div className='arrowDown'></div></button>
            </div>
        </div>
        <div className="seriesCapsContainer notShow" id='capsContainer'>
            <button className="seriesCaps m button capsButtons" id='cap1' onClick={checkButton}>
                <div id='cap1Div'>Cap. 1</div>
            </button>
            <button className="seriesCaps m button capsButtons" id='cap2'>Cap. 2</button>
            <button className="seriesCaps m button capsButtons" id='cap3'>Cap. 3</button>
            <button className="seriesCaps m button capsButtons" id='cap4'>Cap. 4</button>
            <button className="seriesCaps m button capsButtons" id='cap5'>Cap. 5</button>
            <button className="seriesCaps m button capsButtons" id='cap6'>Cap. 6</button>
            <button className="seriesCaps m button capsButtons" id='cap7'>Cap. 7</button>
            <button className="seriesCaps m button capsButtons" id='cap8'>Cap. 8</button>
            <button className="seriesCaps m button capsButtons" id='cap9'>Cap. 9</button>
            <button className="seriesCaps m button capsButtons" id='cap10'>Cap. 10</button>
        </div>
    </div>
    </>
    )
}

export default HomeDePrueba