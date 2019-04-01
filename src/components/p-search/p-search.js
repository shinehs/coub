'use script';

require(['videoFooter', 'header', 'videoList'], (videoFooter, header, videoList) => {
    videoList.init(getQueryString('keyword'));
    header.init();
    videoFooter.init();

    function getQueryString(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) {return unescape(r[2]);}
        return null;
    }
});