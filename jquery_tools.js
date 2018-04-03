
$.waitFor=function(elemento, func, timeout, func_error){
	var c=0;
	var loop=setInterval(function(){
		if ($(elemento).size()>0) {
			func();
			clearInterval(loop);
		}
		if(c>=timeout)  clearInterval(loop);
		c+=0.5;

	},500);
}
