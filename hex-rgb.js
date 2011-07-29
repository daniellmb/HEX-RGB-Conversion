(function(a){a.toRGB=function(a){var b=parseInt(a,16);return[b>>16,b>>8&255,b&255]},a.toHex=function(a,b,c){var d=(c|b<<8|a<<16).toString(16);return"000000".substr(0,6-d.length)+d}})(this)

