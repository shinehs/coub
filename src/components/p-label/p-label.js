'use script';

require(['videoFooter', 'header'], (videoFooter, header) => {
    // let myScroll = new IScroll('.rec-video-list', {
    //     mouseWheel: false,
    //     scrollbars: true,
    //     fadeScrollbars:true,
    //     bounce: true // 容器边沿的反弹动画 
    // });
    header.init();
    videoFooter.init();
    // document.documentElement.style.overflow='hidden';
});