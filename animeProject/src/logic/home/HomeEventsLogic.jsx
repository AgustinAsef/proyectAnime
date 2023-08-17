import checkImg from '../../views/imgs/check.png'

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

export default { showSeasons, showCaps, checkButton }