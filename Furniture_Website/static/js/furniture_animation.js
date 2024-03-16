$(document).ready(function(){

    slideAnimation();

});

async function slideAnimation(){

    let slides = $('.image-card')

    while(true){

        for(let i = 0; i < slides.length; i++){

            slides.eq(i).css({
                'opacity' : '1',
                'z-index' : '99'
            });

            await new Promise(resolve => setTimeout(resolve, 3500));

            slides.eq(i).css({
                'opacity' : '0',
                'z-index' : '1'
            });

        };

    };

};
