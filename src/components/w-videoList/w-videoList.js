'use script';

require(['iScroll'], (iScroll) => {
    // let myScroll = new iScroll('.rec-video-list', {
    //     mouseWheel: false,
    //     scrollbars: true,
    //     fadeScrollbars:true,
    //     bounce: true // 容器边沿的反弹动画 
    // });
    let timeId = 0;
    let hpageNo = 1;
    let fpageNo = 1;
    let rpageNo = 1;
    let scrollLoad = {
        init () {
            this.bindEvent();
        },
        bindEvent() {
            let self = this;
            $(document, window).bind('scroll', function(e) {
                clearTimeout(timeId);
                let scrollH = $(window).height();
                let scrollT = $(window).scrollTop();
                timeId = setTimeout(function() {
                    // 这里区分3个不同情况的广告内容进行加载。
                    // normalLi adBig adnNormal
                    if (scrollT > scrollH * 0.6) {
                        debugger;
                        $('.rec-video-list .ul-loader').addClass('active');
                        self.getType();
                        $.ajax({
                            type: 'GET',
                            url: '//www.xvidmate.com',
                            data: {
                                'page': self.getPageNo(),
                                'tag': window.tag?window.tag:1,
                                'type': self.getType()
                            },
                            dataType: 'json',
                            success: function(data) {
                                $('.rec-video-list .ul-loader').removeClass('active');
                                debugger;
                                let _data = [
                                    {
                                        type:'s-ad',
                                        name:'xxx',
                                        view:123,
                                        up:12,
                                        share:123,
                                        auther:'aaa',
                                        image:'#',
                                        url:'#',
                                        is_up:0
                                    }
                                ];//data.data;
                                let res = [];
                                // if (data.code == 200) {
                                for (let i=0, len=_data.length;i<len;i++) {
                                    res.push(self.buildTemple(_data[i]));
                                }
                                // }
                                debugger;
                                $('.rec-video-list ul').append(res.join(' '));
                            },
                            error: function(err) {
                                debugger;
                            }
                        });
                    }
                }, 300);
            });
        },
        getType() {
            let index = $('.w-nav .active').index();
            if (index === 0) {
                return 'Hot';
            } else if (index === 1) {
                return 'Fresh';
            } else {
                return 'Rising';
            }
        },
        getPageNo() {
            let type = this.getType();
            if ('Hot' === type) {
                return ++hpageNo;
            } else if ('Fresh' === type) {
                return ++fpageNo;
            } else {
                return ++rpageNo;
            }
        },
        buildTemple(data) {
            let temp = '';
            if (data.type == 'video') {
                temp = $('.videoTemp .normalLi')[0].outerHTML;
            } else if (data.type == 's-ad') {
                temp = $('.videoTemp .adCover__normal')[0].outerHTML;
            } else {
                temp = $('.videoTemp .adCover__big')[0].outerHTML;
            }
            return temp.replace(/\$url/g, data.url).replace(/\$img/g, data.image).replace(/\$name/g, data.name).replace(/\$owner/g, data.auther).replace(/\$like/g, data.up).replace(/\$share/g, data.share);
        }
    };
    scrollLoad.init();
    // videoFooter.init();
    // document.documentElement.style.overflow='hidden';
});