'use script';

require(['videoFooter', 'header', 'videoList'], (videoFooter, header, videoList) => {
    videoList.init('label');
    header.init();
    videoFooter.init();
});