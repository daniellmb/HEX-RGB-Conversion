(function(a){a["toRGB"]=function(a){var b=parseInt(a,16);return[b>>16,b>>8&255,b&255]};a["toHex"]=function(a,b,c){return(c|b<<8|a<<16|1<<24).toString(16).slice(1)}})(this);
