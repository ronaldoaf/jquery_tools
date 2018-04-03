
$.waitFor=function(elemento, func, timeout, func_error){
    if( typeof timeout === "undefined" ) timeout=30;
    if( typeof func_error === "undefined" ) func_error=function(){};
	var c=0;
	var loop=setInterval(function(){
		if ($(elemento).size()>0) {
			func();
			clearInterval(loop);
		}
		if(c>=timeout)  {
            clearInterval(loop);
            func_error();
        }
		c+=0.5;

	},500);
};


jQuery.fn.extend({
  textOnly: function() {
     return this.clone().children().remove().end().text();  
   }
});
