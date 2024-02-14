$(document).ready(function(){
    
    impressumHandling();
    privacyPolicyHandling();

});

var impressum = $('.section--impressum');
var privacy_policy = $('.section--privacy_policy');

function impressumHandling(){

    $('.impressum-btn').on('click', () => {

        if(impressum.css('display') === 'none'){

            impressum.css({
                'display' : 'flex',
            });
    
            $('.section--impressum')[0].scrollIntoView({ 
                behavior: "smooth", 
            });

        }
        else{

            $('.header')[0].scrollIntoView({ 
                behavior: "smooth", 
            });

            impressum.css({
                'display' : 'none',
            });
            privacy_policy.css({
                'display' : 'none'
            });

        };

    });

};

function privacyPolicyHandling(){

    $('.privacy_policy-btn').on('click', () => {

        if(privacy_policy.css('display') === 'none'){

            privacy_policy.css({
                'display' : 'flex',
            });
    
            $('.section--privacy_policy')[0].scrollIntoView({ 
                behavior: "smooth", 
            });

        }
        else{

            $('.header')[0].scrollIntoView({ 
                behavior: "smooth", 
            });

            privacy_policy.css({
                'display' : 'none',
            });

            impressum.css({
                'display' : 'none',
            });

        };

    });

};