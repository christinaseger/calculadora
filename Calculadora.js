function solve(){
    let currentVal = document.getElementById("display").value;
    let result = eval(currentVal);
    document.getElementById("display").value = result;
}

function clearDisplay(){
    document.getElementById("display").value = '';
}

function addValueDisplay(val){
    document.getElementById("display").value += val;
}

function del(){
    const currentVal = document.getElementById("display").value;
    document.getElementById("display").value = currentVal.slice(0,currentVal.length-1)
}