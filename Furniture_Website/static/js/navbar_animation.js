$(document).ready(function(){
   
    materialsAnimation();
    scrollToElement();
    scrollToTop();

});

function materialsAnimation(){

    let materials = $('.navbar__material');

    for(let i = 0; i < materials.length; i++){

        materials.eq(i).css({
            'animation' : 'navbar-materials 4s ' + i + 's cubic-bezier(1,-0.03,.7,.91) forwards'
        });


    };

}

function scrollToElement(){

    $('.navbar__list-list-item').on('click', function(){

        $('.' + $(this).data('target'))[0].scrollIntoView({ 
            behavior: "smooth", 
        });

    });

};

function scrollToTop(){

    $('.to_the_top-icon').on('click', () => {

        $('.header')[0].scrollIntoView({ 
            behavior: "smooth", 
        });

    });

};
