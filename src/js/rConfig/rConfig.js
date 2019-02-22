'use strict';
var require = {
    // baseUrl: '../js',
    paths: {
        // global
        'ajax': '../../js/lib/ajax/ajax',
		'flexlayout': '../../js/lib/flexlayout/flexlayout',
		'echo': '../../js/lib/echo/echo',
		'vconsole': '../../js/lib/vConsole/vconsole.min',
		'iShare': '../../js/lib/iShare/iShare',
		// for widget
		'share': '../../components/w-share/w-share',
		'dialog': '../../components/w-dialog/w-dialog',
		'videoFooter': '../../components/w-videoFooter/w-videoFooter'
        // + yyl make
        // - yyl make
    },
    shim: {
        // artTemplate: {
        //     exports: 'artTemplate'
        // }
    }
};

if(typeof module === "object" && typeof module.exports === 'object'){
    module.exports = require;
}
