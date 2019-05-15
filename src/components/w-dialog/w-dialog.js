define(['share','clipboard'], (share, clipboard) => {
    let clipboardObj = null;
    let dialog = {
        init() {
            this.addEventListener();
            return this;
        },
        addEventListener() {
            // close
            document.getElementsByClassName('w-dialog-footer')[0].addEventListener('click', function(evnet) {
                document.getElementsByClassName('w-dialog-wrapper')[0].className = 'w-dialog-wrapper';
            });
            document.getElementsByClassName('w-dialog-cover')[0].addEventListener('click', function(evnet) {
                document.getElementsByClassName('w-dialog-wrapper')[0].className = 'w-dialog-wrapper';
            });
            // share
            document.getElementsByClassName('w-dialog-shareList')[0].addEventListener('click', function(event) {
                document.getElementsByClassName('_shareBtn_'+event.target.dataset.target)[0].click();
            });
        },
        show(url) {
            share.init(url);
            $('.w-dialog-header-url').text(url);
            $('.w-dialog-wrapper').addClass('w-dialog-wrapper active');
            $('.w-dialog-header-btn').attr('data-clipboard-text', url);
            clipboardObj = new clipboard('.w-dialog-header-btn');
            $('.w-dialog-header-btn').text('copy').removeClass('success');
            clipboardObj.on('success', function(e) {
               $('.w-dialog-header-btn').text('copyed').addClass('success');
            });
            // clipboardObj.on('error', function(e) {
            //     console.log(e);
            //     alert("测试1复制失败！请手动复制")
            // });
        }
    };

    return dialog;
});