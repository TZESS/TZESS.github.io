var OriginTitile = document.title;
var str;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		document.title = '(✿◡‿◡)记得回来~' + OriginTitile;
		// 或者 document.getElementsByTagName("title")[0].innerText = '快回来~';
		clearTimeout(str);
	}else {
		document.title = 'ヽ(✿ﾟ▽ﾟ)ノ好耶!' + OriginTitile;
		str = setTimeout(function() {
			document.title = OriginTitile;
		}, 2000);
	}
});