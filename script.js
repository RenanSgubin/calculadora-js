function insert(number){
    var valor = document.getElementsByClassName("area-result")[0].innerHTML;
    document.getElementsByClassName("area-result")[0].innerHTML = valor + number;
}

function clean(){
    document.getElementsByClassName("area-result")[0].innerHTML = "";
}

function calc(){
    var result = document.getElementsByClassName("area-result")[0].innerHTML;

    if(result){
        document.getElementsByClassName("area-result")[0].innerHTML = eval(result);
    }else{
        document.getElementsByClassName("area-result")[0].innerHTML = "Nada para calcular."
    }
}