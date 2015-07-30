'use strict';

require('crash-reporter').start();

(function(){
    var app           = require('app');
    var browserWindow = require('browser-window');
    
    var mainWindow = null;
    
    app.on('window-all-closed', function(){
        app.quit();
    });
    
    app.on('ready', function() {
        mainWindow = new browserWindow({width: 800, height: 600});
        mainWindow.loadUrl('file://' + __dirname + '/index.html');
        mainWindow.on('closed', function(){
            mainWindow = null;
        });
    });
})();
