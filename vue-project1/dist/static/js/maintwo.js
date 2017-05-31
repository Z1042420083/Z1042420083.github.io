	//zjh

	var codeTimeout = null;


    $(function () {
        //IOS移动端click300ms问题
        FastClick.attach(document.body);
    });






    //一维码动画
	function barCodeFadeToggleFn(el) {
		console.log(el);
        if (!el.flags.fadeFlagClickable) {
            return;
        }
        el.flags.fadeFlagClickable = false;
        if (el.flags.fadeFlag1) {
            $('#bar-code-toggle').addClass('fade-bar-toggle1');
            $('#refresh').addClass('refresh-toggle1');
            if (codeTimeout) {
                clearTimeout(codeTimeout);
            }
            codeTimeout = setTimeout(function () {
                el.flags.fadeFlagClickable = true;
            }, 600)
        } else {
            $('#bar-code-toggle').addClass('fade-bar-toggle2');
            $('#refresh').addClass('refresh-toggle2');
            if (codeTimeout) {
                clearTimeout(codeTimeout);
            }
            codeTimeout = setTimeout(function () {
                $('#bar-code-toggle')
                    .removeClass('fade-bar-toggle1')
                    .removeClass('fade-bar-toggle2');
                $('#refresh')
                    .removeClass('refresh-toggle1')
                    .removeClass('refresh-toggle2');
                el.flags.fadeFlagClickable = true;
            }, 700)
        }
        el.flags.fadeFlag1 = !el.flags.fadeFlag1;
	}
    //二维码动画
	function QRCodeFadeToggleFn(el) {
        if (!el.flags.fadeFlagClickable) {
            return;
        }
        el.flags.fadeFlagClickable = false;
        if (el.flags.fadeFlag2) {
            $('#QR-code-toggle').addClass('fade-QR-toggle1');
            $('#refresh').addClass('refresh-toggle1');
            codeTimeout = setTimeout(function () {
                el.flags.fadeFlagClickable = true;
            }, 600)
        } else {
            $('#QR-code-toggle').addClass('fade-QR-toggle2');
            $('#refresh').addClass('refresh-toggle2');
            if (codeTimeout) {
                clearTimeout(codeTimeout);
            }
            codeTimeout = setTimeout(function () {
                $('#QR-code-toggle')
                    .removeClass('fade-QR-toggle1')
                    .removeClass('fade-QR-toggle2');
                $('#refresh')
                    .removeClass('refresh-toggle1')
                    .removeClass('refresh-toggle2');
                el.flags.fadeFlagClickable = true;
            }, 700)
        }
        el.flags.fadeFlag2 = !el.flags.fadeFlag2;
	}
