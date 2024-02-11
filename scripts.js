const form = document.querySelector("form")
const masc = document.querySelector(".mascara-form")

function cliqueiNoBotao(){
    form.style.left="50%"
    form.style.transform="translateX(-50%)"
    masc.style.visibility="visible"
}
function cliqueiNaMasc(){
    form.style.left="-300px"
    form.style.transform="translateX(0%)"
    masc.style.visibility="hidden"
}