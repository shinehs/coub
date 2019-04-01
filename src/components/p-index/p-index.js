'use script';

require(['videoFooter', 'header', 'videoList'], (videoFooter, header, videoList) => {
    videoList.init();
    header.init();
    videoFooter.init();
});