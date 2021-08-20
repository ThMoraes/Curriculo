/* botão topo */
function linkBotaoHoverOn(){
    var nomebotaoMenu = document.getElementById("nomeBotaoMenu");

    nomebotaoMenu.innerHTML = "menu_open";
};
function linkBotaoHoverOff(){
    var nomebotaoMenu = document.getElementById("nomeBotaoMenu");

    nomebotaoMenu.innerHTML = "menu";
};

function abrirMenu(){
    var conteudoMenu = document.getElementById("conteudoMenu");
    var classConteudoMenu = document.getElementsByClassName("conteudoMenu");

    if (classConteudoMenu == "conteudoMenu" ) {
        conteudoMenu.classList.remove("conteudoMenu");
    } else {        
        conteudoMenu.classList.add("conteudoMenuOn");
    }

};














/* li do menu */
/* Tirar ancora interna do link e animar scroll ao clicar no menu */
$('.nome-menu-pagina').click(function(e){
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

    $('.menu').toggleClass('menu-mostrar');
    $('.cont-inf').toggleClass('cont-inf-ocultar');
    
    $('.nome-botao-menu').toggleClass('nome-botao-menu-oculta');
    $('.nome-botao-menu-close').toggleClass('nome-botao-menu-close-mostra');
    

});
/* botão menu */
$('#nome-botao-menu').click(function(e){
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


        $('.menu').toggleClass('menu-mostrar');
        $('.cont-inf').toggleClass('cont-inf-ocultar');
        
        $('.nome-botao-menu').toggleClass('nome-botao-menu-oculta');
        $('.nome-botao-menu-close').toggleClass('nome-botao-menu-close-mostra');

});
$('#nome-botao-menu-hover').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();


    $('.menu').toggleClass('menu-mostrar');
    $('.cont-inf').toggleClass('cont-inf-ocultar');
    
    $('.nome-botao-menu').toggleClass('nome-botao-menu-oculta');
    $('.nome-botao-menu-close').toggleClass('nome-botao-menu-close-mostra');

    
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
$('#nome-botao-menu-close').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();


    $('.menu').toggleClass('menu-mostrar');
    $('.cont-inf').toggleClass('cont-inf-ocultar');
    
    $('.nome-botao-menu').toggleClass('nome-botao-menu-oculta');
    $('.nome-botao-menu-close').toggleClass('nome-botao-menu-close-mostra');

    
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

$('#link-botao-inicio-pagina').click(function(e){
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

$('#nome-botao-menu').hover(function(){
    $('.nome-botao-menu').toggleClass('nome-botao-menu-oculta');
    $('.nome-botao-menu-hover').toggleClass('nome-botao-menu-hover-mostra');
    document.getElementById('nome-botao-menu-hover').style.background = "#87CEFA";
    document.getElementById('nome-botao-menu-hover').style.borderRadius = "50%";
    document.getElementById('nome-botao-menu-hover').style.margin = "0px 5px";
    document.getElementById('nome-botao-menu-hover').style.color = "#000";
});