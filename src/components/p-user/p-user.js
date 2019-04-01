'use script';

require(['videoFooter', 'header', 'videoList'], (videoFooter, header, videoList) => {
    videoList.init('user');
    header.init();
    videoFooter.init();
    
});