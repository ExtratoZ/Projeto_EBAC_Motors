$(document).ready(function() {
    $('#carousel_images').slick({
        autoplay:true,
        arrows:false
    });

    $('#menu_hamburguer').click(function() {
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.'
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})