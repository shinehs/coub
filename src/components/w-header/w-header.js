'use script';

define([], () => {
    let navbar = {
        init() {
            this.addEventListener();
        },
        addEventListener() {
            let $menu = $('#navbarMenu')[0];
            // menu click
            $('.navbar-burger').on('click', () => {
                $('#navbarMenu').toggleClass('is-active');
            });

            // click outside
            document.body.addEventListener('click', (e) => {
                if (!(document.getElementsByClassName('navbar')[0] === e.target || document.getElementsByClassName('navbar')[0].contains(e.target))) {
                    $('#navbarMenu').removeClass('is-active');
                }
            });

            // search
            $('.navbar-search').on('click', () => {
                // TODO
            });
        }
    };
    return navbar;
});