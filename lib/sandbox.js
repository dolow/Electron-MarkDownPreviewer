'use strict';

var MDPreview = function(){};
MDPreview.prototype =
{
    _modules : {},
    module : function(name)
    {
        if (this._modules[name] == null)
            this._modules[name] = require(name);
        
        return this._modules[name];
    },
    saveContent : function(content)
    {
        var preview = this;
        
        this.module('remote').require('dialog').showSaveDialog({
            title   :'choose saving directory',
            defaultPath : './README.md'
        },
        function(filePathAndName) {
            preview.module('fs').writeFile(filePathAndName, content, function(err) {
                if (!err)
                    alert('Saved successfully!');
            });
        });
    }
};

