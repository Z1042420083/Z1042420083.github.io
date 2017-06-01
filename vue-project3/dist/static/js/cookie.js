function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');   //通过 ; 号来分离每个cookie
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];      //通过遍历依次把cookie读取出来
		while(c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return unescape(c.substring(name.length, c.length));
		}
		return "";   //cookie不存在就返回空
	}
}

function setCookie(cname, cvalue, exdays) {   //cookie的name, value, expires
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + escape(cvalue) + ";" + expires;
}