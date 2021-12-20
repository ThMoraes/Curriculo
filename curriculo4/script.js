/* li do menu */
/* Tirar ancora interna do link e animar scroll ao clicar no menu */
$('.nomeBotaoMenu').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    

});

$('.nomeBotaoMenuHover').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    

});

$('.nomeBotaoMenuClose').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    

});

$('.nomeBotaoMenu').hover(function(){
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuHover').toggleClass('nomeBotaoMenuHoverMostrar');
    document.getElementById('nomeBotaoMenuHover').style.background = "#87CEFA";
    document.getElementById('nomeBotaoMenuHover').style.borderRadius = "50%";
    document.getElementById('nomeBotaoMenuHover').style.margin = "0px 5px";
    document.getElementById('nomeBotaoMenuHover').style.color = "#000";
});


$('.menuPagina').click(function(e){
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


    
    
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
});