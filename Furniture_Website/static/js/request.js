$(document).ready(function(){
   
    buttonAnimation();
    sendRequest();

});

async function buttonAnimation(){

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    $('.request_input').on('keyup', function(event){
        
        let inputs = $('.request_input');
        let button = $('.btn_request');
        let input_data = [];

        for(let i = 0; i < inputs.length; i++){

            if(inputs.eq(i).val() !== ''){
                if(inputs.eq(i).attr('placeholder') === 'Email'){
                    if(emailRegex.test(inputs.eq(i).val())){
                        input_data.push(inputs.eq(i).val())
                    }
                }
                else{
                    input_data.push(inputs.eq(i).val())
                }
            }

        };

        if(input_data.length === 4){
            button.addClass('btn--active')
        }
        else{
            button.removeClass('btn--active')
        }

    });

};

async function sendRequest(){

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    $('.btn_request').on('click', function(){

        let inputs = $('.request_input');
        let formData = {};

        if($(this).hasClass('btn--active')){

            $(this).addClass('btn--send').text('Wird gesendet...')
            $('.request_form').addClass('request_form--sending')
            
            for(let i = 0; i < inputs.length; i++){

                formData[inputs.eq(i).attr('placeholder')] = inputs.eq(i).val()
                
            };

            $.ajax({
                type: 'POST',
                url: '/request/', 
                data: JSON.stringify(formData),  
                dataType: 'json',
                headers: {
                    'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    
                    console.log(response)
                    
                    cleanForm();
                    
                    createMessage(level ='success', text='Ihre Anfrage wurde versendet');

                },
                error: function(error) {
                    
                    console.log(error)

                    cleanForm();

                    createMessage(level ='error', text='Es ist ein Fehler aufgetreten');

                }
            });

        }
        else{
            
            for(let i = 0; i < inputs.length; i++){

                if(inputs.eq(i).val() !== ''){
                    if(inputs.eq(i).prop('name') === 'email'){
                        if(!emailRegex.test(inputs.eq(i).val())){
                            inputs.eq(i).css({
                                'animation' : 'input_error 0.5s ease'
                            })
                        }
                    }
                }
                else{
                    inputs.eq(i).css({
                        'animation' : 'input_error 0.5s ease'
                    })
                }

                inputs.eq(i).on('animationend', function(){
                    $(this).css({
                        'animation' : 'none'
                    });
                });
    
            };

        }

    });

};

function cleanForm(){

    let form = $('.request_form');
    let button = $('.btn_request');
    let inputs = $('.request_input');

    button.removeClass('btn--send').removeClass('btn--active').text('Nachricht senden')
    form.removeClass('request_form--sending')

    for(let i = 0; i < inputs.length; i++){
        
        inputs.eq(i).val('')

    };
    
};

async function createMessage(level, text){

    let message_list = $('.message_list')
    let new_message = $('<li>' + text + '</li>')
    
    new_message.addClass('messages')

    new_message.appendTo(message_list)

    await new Promise(resolve => setTimeout(resolve, 500));

    new_message.addClass('messages--' + level)

    await new Promise(resolve => setTimeout(resolve, 7000));
    
    new_message.addClass('messages--ending' )

};
