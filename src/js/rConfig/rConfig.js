'use strict';
var require = {
    // baseUrl: '../js',
    paths: {
        // global
        'ajax': '../../js/lib/ajax/ajax',
		'clipboard': '../../js/lib/zepto/clipboard.min',
        'flexlayout': '../../js/lib/flexlayout/flexlayout',
        'echo': '../../js/lib/echo/echo',
        'vconsole': '../../js/lib/vConsole/vconsole.min',
        'iShare': '../../js/lib/iShare/iShare',
        'iScroll': '../../js/lib/iScroll/iScroll',
        // for widget
        'header': '../../components/w-header/w-header',
        'share': '../../components/w-share/w-share',
        'dialog': '../../components/w-dialog/w-dialog',
        'videoFooter': '../../components/w-videoFooter/w-videoFooter',
        'videoList': '../../components/w-videoList/w-videoList',
        // + yyl make
        // - yyl make
    },
    shim: {
        // artTemplate: {
        //     exports: 'artTemplate'
        // }
    }
};

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = require;
}