$(document).ready(function(){
    
    videoAnimation();

});

async function videoAnimation(){

    let videos = $('.crafts-video')

    while(true){

        for(let i = 0; i < videos.length; i++){
        
            videos.eq(i).css({
                'transform' : 'scale(1.1)',
                'box-shadow' : '5px 5px 10px black',
                'opacity' : '1'
            })
    
            videos.eq(i)[0].play()
    
            await new Promise(resolve => setTimeout(resolve, 5000));
    
            videos.eq(i).css({
                'transform' : 'scale(1)',
                'box-shadow' : 'none',
                'opacity' : '0.6'
            })
            
            videos.eq(i)[0].pause()
    
        };

    };

};