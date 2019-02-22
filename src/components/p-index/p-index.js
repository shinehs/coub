'use script';

require(['echo', 'videoFooter'], (echo, videoFooter) => {
    if (location.href.includes('debugModal')) {
        require(['../js/lib/vConsole/vconsole.min.js'], (vconsole)=> {
            var vConsole = new vconsole();
            console.log('Hello world');
        });
    }

    

    let navbar = {
        init() {
            this.addEventListener();
            this.lazyLoad();
        },
        lazyLoad() {
            window.Echo.init({
                offset: 0,
                throttle: 0
            });
        },
        addEventListener() {
            let $menu = $('#navbarMenu')[0];
            // menu click
            $('.navbar-burger').on('click', () => {
                if (!$menu.classList.toString().includes('is-active')) {
                    $menu.classList.add('is-active');
                } else {
                    $menu.classList.remove('is-active');
                }
            });

            // click outside
            document.body.addEventListener('click', (e) => {
                if (!(document.getElementsByClassName('navbar')[0] === e.target || document.getElementsByClassName('navbar')[0].contains(e.target))) {
                    $menu.classList.remove('is-active');
                }
            });

            // search
            $('.navbar-search').on('click', () => {
                // TODO
            });
            this.videoEvent();
        },
        videoEvent() {
            // auto play
            // $('#videoDemo').addEventListener('canplay', () => {
            //     alert('autoPlay');
            //     $('#videoDemo').play();
            // });
            //play end 
            $('#videoDemo').on('ended', () => {

            });
        },
        playNext() {
            debugger;
        }
    };
    navbar.init();
    videoFooter.init();
});

// fixed active
document.body.addEventListener('touchstart', () => { });