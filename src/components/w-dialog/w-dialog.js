define(['share'], (share) => {
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
            document.getElementsByClassName('w-dialog-header-url')[0].innerText = url;
            document.getElementsByClassName('w-dialog-wrapper')[0].className = 'w-dialog-wrapper active';
        }
    };

    return dialog;
});