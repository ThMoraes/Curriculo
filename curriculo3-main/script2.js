function menu(){
    var id = document.getElementById('nomeBotaoMenu');
    var th = $(id).attr('innerHTML');

    
    var nomeBotaoMenu = document.getElementById('nomeBotaoMenu');


    if (th == "menu") {
        nomeBotaoMenu.innerHTML = "menu";
    }
    else if (th == "close") {
        nomeBotaoMenu.innerHTML = "close";
    }
    else{
    }
}

/*over botao menu*/
/* function overOn(){

    var botao = document.getElementById("nomeBotaoMenu");

    if (botao == "menu"){
        botao.innerHTML = "menu";
        botao.style.background = "";
        botao.style.borderRadius = "";
        botao.style.color = "";
    }
    else{        
        botao.innerHTML = "close";
        botao.style.background = "";
        botao.style.borderRadius = "";
        botao.style.color = "";
    }
};
function overOff(){

    var botao = document.getElementById("nomeBotaoMenu");

    if (botao == "menu"){
        botao.innerHTML = "menu";
        botao.style.background = "";
        botao.style.borderRadius = "";
        botao.style.color = "";
    }
    else{        
        botao.innerHTML = "close";
        botao.style.background = "";
        botao.style.borderRadius = "";
        botao.style.color = "";
    }
}; */