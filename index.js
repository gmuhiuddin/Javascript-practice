let userName = document.getElementById('userNameInp');
let updBtn = document.getElementById("updBtn");

updBtn.addEventListener("click",() => {
    localStorage.setItem("User name" , userName.value)
    let LSName = localStorage.getItem('User name')
    let nameSpan= document.getElementById('nameSpan') 
    nameSpan.innerText = LSName
})
function getValue (){
    let nameSpan= document.getElementById('nameSpan') 
    let LSName = localStorage.getItem('User name')
    nameSpan.innerText = LSName
}
getValue()
JSON.stringify()