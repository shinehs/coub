'use script';

define([], () => {
    let timeId = 0;
    let navbar = {
        init() {
            this.addEventListener();
        },
        addEventListener() {
            let $menu = $('#navbarMenu')[0];
            // menu click
            $('.navbar-burger').on('click', () => {
                return false;
                $('#navbarMenu').toggleClass('is-active');
            });

            // click outside
            document.body.addEventListener('click', (e) => {
                if (!(document.getElementsByClassName('navbar')[0] === e.target || document.getElementsByClassName('navbar')[0].contains(e.target))) {
                    $('#navbarMenu').removeClass('is-active');
                }
            });

            // search
            $('.navbar-search,.navbar__search__cover,.navbar__search__content__btn.type__back').on('click', () => {
                // TODO
                $('.navbar__search').toggleClass('active');
            });
            $('.navbar__search__content__btn.type__search').on('click', () => {
                window.open('//www.xvidmate.com?keyword=' + $('.navbar__search__content__input').val().trim(),'_self');
            });
            $('.navbar__search__content__input').on('input', (e)=>{
                // clearTimeout(timeId);
                // timeId = setTimeout(function() {
                //     $.ajax({
                //         type: 'GET',
                //         url: '//www.xvidmate.com',
                //         data: { 'keyword': $('.navbar__search__content__input').val().trim()},
                //         dataType: 'json',
                //         success: function(data) {
                //             debugger;
                //         },
                //         error: function(err) {
                //             debugger;
                //         }
                //     });
                // }, 300);
            });
        }
    };
    return navbar;
});