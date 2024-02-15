// Simplificando Jquery
// $(document).ready(function(){
//     $('button').click(function(){
//         $('h1').hide();
//     });
// });

// Alterando CSS
// $(function(){
//     $('#azul').click(function() {
//         $('p').css('background-color', 'blue');
//     });

//     $('#vermelho').click(function() {
//         $('p').css('background-color', 'red');
//     });
// });

// Efeito fade
// $(function(){
//     $('#azul').click(function() {
//         $('p').css('background-color', 'blue');
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();    
//     });

//     $('#vermelho').click(function() {
//         $('p').css('background-color', 'red');
//         $('p').fadeOut('slow');
//         $('p').delay(1000);
//         $('p').fadeIn('slow');
//     });
// });

// Delay
// $(function(){
//     $('#azul').click(function() {
//         $('p').css('background-color', 'blue');
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();    
//     });

//     $('#vermelho').click(function() {
//         $('p').css('background-color', 'red');
//         $('p').fadeOut(2000);
//         $('p').fadeIn(4000);
//     });
// });

// Gravando mensagens
// $(function(){
//     $('#azul').click(function() {
//         $('p').css('background-color', 'blue');
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();    
//     });

//     $('#vermelho').click(function() {
//         $('p').css('background-color', 'red');
//         $('#mensagem').text("Cor alterada em teste");
//         $('#mensagem').css('color', 'red');
//         $('#mensagem').css('border', '1px solid red');
//         $('#mensagem').delay(3000);
//         $('#mensagem').fadeOut('fast');
//     });
// });

// Encadeamento em bloco
// $(function(){
//     $('#azul').click(function() {
//         $('p')
//             .css('background-color', 'blue')
//             .fadeOut()
//             .delay(1000)
//             .fadeIn();    
//     });

//     $('#vermelho').click(function() {
//         $('p').css('background-color', 'red');
//         $('#mensagem')
//             .text("Cor alterada em teste")
//             .css('color', 'red')
//             .css('border', '1px solid red')
//             .delay(3000)
//             .fadeOut('fast');
//     });
// });

// Declaração múltipla de CSS
$(function(){
    $('#azul').click(function() {
        $('p')
            .css('background-color', 'blue')
            .fadeOut()
            .delay(1000)
            .fadeIn();    
    });

    $('#vermelho').click(function() {
        $('p').css('background-color', 'red');
        $('#mensagem')
            .text("Cor alterada em teste")
            .css({color:'red', border:'1px solid red'})
            .delay(3000)
            .fadeOut('fast')
            .addClass('green')
        $('button').removeClass('red');
    });
});

// Slideshow
// $(function(){
//     $('#l1').click(function(){
//         $('#1').show();
//         $('#2').hide();
//         $('#3').hide();
//         $('#4').hide();
//         $('#l').hide();
//     });

//     $('#l2').click(function(){
//         $('#1').hide();
//         $('#2').show();
//         $('#3').hide();
//         $('#4').hide();
//         $('#5').hide();
//     });

//     $('#l3').click(function(){
//         $('#1').hide();
//         $('#2').hide();
//         $('#3').show();
//         $('#4').hide();
//         $('#5').hide();
//     });

//     $('#l4').click(function(){
//         $('#1').hide();
//         $('#2').hide();
//         $('#3').hide();
//         $('#4').show();
//         $('#5').hide();
//     });

//     $('#l5').click(function(){
//         $('#1').hide();
//         $('#2').hide();
//         $('#3').hide();
//         $('#4').hide();
//         $('#5').show();
//     });
// });