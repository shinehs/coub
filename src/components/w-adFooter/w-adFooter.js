define(['dialog'], (dialog) => {
    this.dialogObj = dialog.init();
    let videoFooter = {
        init() {
            this.addEventListener();
            return this;
        },
        addEventListener() {
            // share
            $('.video-detail__control__shareBtn').on('click', function() {
                self.dialogObj.show('www.google.com');
            });
            // show more info
            $('.video-detail__header__moreBtn').on('click', function() {
                $(this).toggleClass('show');
                $(this)
                    .closest('.video-detail')
                    .find('.video-detail__moreInfo')
                    .toggleClass('active');
            });
            // like btn
            $('.video-detail__control__likeBtn').on('click', function() {
                $(this).addClass('active');
            });
        }
    };

    return videoFooter;
});
