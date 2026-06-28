const displayr = document.getElementById("display");

function display(input) {
    displayr.value += input;
}
function clearr() {
    displayr.value = "";
}
function resulte() {
    try{
    displayr.value = eval(displayr.value);
    }
    catch(Error){
        displayr.value="error";
    }
}
    function rem(){
        displayr.value=displayr.value.slice(0,-1);
    }
