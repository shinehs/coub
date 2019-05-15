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
            $('.w-dialog-header-btn').on('click', function() {
                let url = $('.w-dialog-header-url').text();
                // 动态创建 input 元素
                var aux = document.createElement("input");

                // 获得需要复制的内容
                aux.setAttribute("value", url);

                // 添加到 DOM 元素中
                document.body.appendChild(aux);

                // 执行选中
                // 注意: 只有 input 和 textarea 可以执行 select() 方法.
                aux.select();

                // 获得选中的内容
                var content = window.getSelection().toString();

                // 执行复制命令
                document.execCommand("copy");

                // 将 input 元素移除
                document.body.removeChild(aux);
                alert(1);
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