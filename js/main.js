function disp(valu){
    document.getElementById("display").value+= valu
}
function solve(){
    let a = document.getElementById("display").value
    let b = eval(a)
    document.getElementById("display").value = b
}

function clr(){
    document.getElementById("display").value = ""
}