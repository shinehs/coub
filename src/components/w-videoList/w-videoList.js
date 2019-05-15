'use script';

define([], () => {
    let timeId = 0;
    let pageNo = 1;
    let searchKeyword = '';
    let pageType = '';
    let noMore = false;
    let scrollLoad = {
        init (type, keyword) {
            if (keyword) {
                searchKeyword = keyword;
            }
            if (type) {
                pageType = type;
            }
            this.bindEvent();
        },
        bindEvent() {
            let self = this;
            $(document, window).bind('scroll', function(e) {
                clearTimeout(timeId);
                let scrollT = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                if (noMore) {
                    return false;
                }
                timeId = setTimeout(function() {
                    // 这里区分3个不同情况的广告内容进行加载。
                    // normalLi adBig adnNormal
                    if (self.getScrollTop() + self.getClientHeight() + 150 > scrollT) {
                        $('.rec-video-list .ul-loader').addClass('active');
                        $.ajax({
                            type: 'GET',
                            url: '//www.xvidmate.com',
                            data: {
                                'page': ++pageNo,
                                'tag': window.tag?window.tag:1,
                                'type': searchKeyword?'':self.getType(),
                                'keyword': searchKeyword
                            },
                            dataType: 'json',
                            success: function(data) {
                                $('.rec-video-list .ul-loader').removeClass('active');
                                let resData = JSON.parse(data);
                                if (resData && resData.code === 200) {
                                    let _data = resData.data;
                                    let res = [];
                                    if (_data.length > 0) {
                                        for (let i=0, len=_data.length;i<len;i++) {
                                            res.push(self.buildTemple(_data[i]));
                                        }
                                    } else {
                                        noMore = true;
                                        $('.loading__icon').addClass('hidden');
                                        $('.ul-loader').append('<p style="text-align:center;">no more videos~</p>');
                                        $('.ul-loader').addClass('active');
                                    }
                                    $('.rec-video-list ul').append(res.join(' '));
                                }
                            },
                            error: function(err) {
                                console.log(err);
                            }
                        });
                    }
                }, 300);
            });
        },
        getType() {
            if (pageType) {
                return pageType;
            }
            let index = $('.w-nav .active').index();
            if (index === 0) {
                return 'Hot';
            } else if (index === 1) {
                return 'Fresh';
            } else {
                return 'Rising';
            }
        },
        buildTemple(data) {
            let temp = '';
            if (data.type == 'video') {
                temp = $('#normalLi')[0].innerHTML;
            } else if (data.type == 's-ad') {
                temp = $('#adCover__normal')[0].innerHTML;
            } else {
                temp = $('#adCover__big')[0].innerHTML;
            }
            return temp.replace(/\$shareurl/g, data.url)
            .replace(/\$url/g, data.url)
            .replace(/\$img/g, data.image)
            .replace(/\$name/g, data.name)
            .replace(/\$owner/g, data.author)
            .replace(/\$like/g, data.up)
            .replace(/\$share/g, data.share);
        },
        getClientHeight() {
            var clientHeight = 0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
            } else {
                clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            return clientHeight;
        },
        getScrollTop() {
            var scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        }
    };
    return scrollLoad;
});