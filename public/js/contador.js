//const Morador = require('../../src/controller/morador');
/*
var $wrapper = document.querySelector('.wrapper'),
        // Pega a string do conteúdo atual
        HTMLTemporario = $wrapper.innerHTML,
        // Novo HTML que será inserido
        HTMLNovo = "ola mundo";
    
        // Concatena as strings colocando o novoHTML antes do HTMLTemporario
        HTMLTemporario = HTMLNovo + HTMLTemporario;
    
        // Coloca a nova string(que é o HTML) no DOM
        $wrapper.innerHTML = HTMLTemporario;
*/

var count = new Number();
var count = 11;

function start(){
        if((count -1 ) >= 0){
                count = count - 1;
                tempo.innerText=count;
                setTimeout('start();', 1000);

                if (count == 0) {
                        //window.location.href = "/";
                        window.location.replace('/', {danger: " "});
                }
        }
        

}