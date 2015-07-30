'use strict';

var MDPreview = function(){};
MDPreview.prototype =
{
    _modules : {},
    module : function(name)
    {
        if (MDPreview.prototype._modules[name] == null)
            MDPreview.prototype._modules[name] = require(name);
        
        return MDPreview.prototype._modules[name];
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

