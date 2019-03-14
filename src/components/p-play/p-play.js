'use script';

require(['echo', 'videoFooter', 'header'], (echo, videoFooter, header) => {
    if (location.href.includes('debugModal')) {
        require(['../js/lib/vConsole/vconsole.min.js'], (vconsole)=> {
            var vConsole = new vconsole();
            console.log('Hello world');
        });
    }

    $('.player')[0].onended = function() {
        $('.video-recommend').addClass('active');
    };

    $('.player')[0].oncanplay = function() {
        $('.player')[0].play();
    };

    $('.video-recommend .video-recommend__item,.video-recommend__item__child').on('click', function(e) {
        if ($(e.currentTarget).attr('data-videoUrl')) {
            let url = $(e.currentTarget).attr('data-videoUrl');
            let poster = $(e.currentTarget).attr('data-poster');
            $('.player')[0].src = url;
            $('.player')[0].poster = poster;
            $('.video-recommend').removeClass('active');
        }
    });

    header.init();
    videoFooter.init();
});

// fixed active
document.body.addEventListener('touchstart', () => { });