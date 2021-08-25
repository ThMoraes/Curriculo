/* li do menu */
/* Tirar ancora interna do link e animar scroll ao clicar no menu */
$('.nomeMenuPagina').on('click', function(e){
    
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');


    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Distância entre o conteúdo da tag <a> até o top */
    targetOffset = $(id).offset().top,
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Animação */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da animação*/500);  

});

/* botão menu */

$('#nomeBotaoMenu').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
});

$('#nomeBotaoMenuHover').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
});

$('#nomeBotaoMenuClose').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
});

/*over botao menu*/
function overOn(){

    var botao = document.getElementById("nomeBotaoMenu");

    botao.innerHTML = "menu_open";
    botao.style.background = "#87CEFA";
    botao.style.borderRadius = "50%";
    botao.style.color = "#000";
};
function overOff(){

    var botao = document.getElementById("nomeBotaoMenu");

    botao.innerHTML = "menu";
    botao.style.background = "";
    botao.style.borderRadius = "";
    botao.style.color = "";
};