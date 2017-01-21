
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-16 15:31:34
 * @version $Id$
 */
  	var arr=1;
	$(".fa-angle-down").click(function(event) {
		if(arr%2){
			$(".link").css("height","105px");
			$(this).css("rotate","180deg");
			arr=2;
		}else{
			$(".link").css("height","35px");
			$(this).css("rotate","0deg");
			arr=1;
		}
	});
// 邮箱/手机号
// $(".meail").focus(function(event) {
// });
	$("#meail").blur(function(event) {
		var id=$('[name=meail]').val();
			if(id==""){
				$(".meail .wu").css("display","block");
				$(".meail .wus").css("display","none");
				$(".meail .wuss").css("display","none");
			}else if(id.length!==11){
				$(".meail .wus").css("display","block");
				$(".meail .wu").css("display","none");
				$(".meail .wuss").css("display","none");
			}
			if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(id) ){
				$(".meail .wus").css("display","block");
				$(".meail .wu").css("display","none");
				$(".meail .wuss").css("display","none");
			}else{
				$(".meail .wus").css("display","none");
				$(".meail .wu").css("display","none");
				$(".meail .wuss").css("display","block");
			};
			if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(id)){
				$(".meail .wus").css("display","none");
				$(".meail .wu").css("display","none");
				$(".meail .wuss").css("display","block");
			};
	}); 
	$("#password").blur(function(event) {
		var min=$('[name=password]').val();
			if(min==""){
				$(".password .wu").css("display","block");
				$(".password .wus").css("display","none");
				$(".password .wuss").css("display","none");
				$(".password .wuu").css("display","none");
			}else if(min.length<5||min.length>13){
				$(".password .wus").css("display","block");
				$(".password .wu").css("display","none");
				$(".password .wuss").css("display","none");
				$(".password .wuu").css("display","none");
			}else if(!(/^\w/.test(min))){
				// (/^\d|[a-z]i{1}/.test(min))
				$(".password .wus").css("display","none");
				$(".password .wu").css("display","none");
				$(".password .wuss").css("display","none");
				$(".password .wuu").css("display","block");
			}else{
				$(".password .wus").css("display","none");
				$(".password .wu").css("display","none");
				$(".password .wuss").css("display","block");
				$(".password .wuu").css("display","none");
			};
	}); 
	$("#passwords").blur(function(event) {
		var min=$('[name=password]').val(),
			mon=$("[name=passwords]").val();
			if(mon.length<5||mon.length>13||mon==""){
				$(".pass .wu").css("display","block");
				$(".pass .wus").css("display","none");
				$(".pass .wuss").css("display","none");
			}else if(min!==mon){
				$(".pass .wus").css("display","block");
				$(".pass .wu").css("display","none");
				$(".pass .wuss").css("display","none");
			}else{
				$(".pass .wus").css("display","none");
				$(".pass .wu").css("display","none");
				$(".pass .wuss").css("display","block");
			};
	});
	$("#myform").submit(function(event) {
		var id=$('[name=meail]').val(),
			a=$("#checkboxs"),
			min=$('[name=password]').val(),
		    mon=$("[name=passwords]").val();
		var regMobile=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
			regEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if((regMobile.test(id)||regEmail.test(id))
			&&/^\w{6,12}/.test(min)&& min===mon&&a.prop("checked")){
			return true;
		}else{
			alert("请填写完整或确认协议!");
			return false;
		};
	});
// 忘记密码
$("#meailss").blur(function(event) {
	var id=$('[name=meail]').val();
		if(id==""){
			$(".zhanghao .kong").css("display","block");
			$(".zhanghao .gsc").css("display","none");
			$(".zhanghao .zq").css("display","none");
		}else if(id.length!==11){
			$(".zhanghao .gsc").css("display","block");
			$(".zhanghao .zq").css("display","none");
			$(".zhanghao .kong").css("display","none");
		}
		if(!/^1{1}[358]{1}[0-9]{9}$/.test(id) ){
			$(".zhanghao .zq").css("display","none");
			$(".zhanghao .kong").css("display","none");
			$(".zhanghao .gsc").css("display","block");
		}else{
			$(".zhanghao .gsc").css("display","none");
			$(".zhanghao .kong").css("display","none");
			$(".zhanghao .zq").css("display","block");
		};
		if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(id)){
			$(".zhanghao .kong").css("display","none");
			$(".zhanghao .gsc").css("display","none");
			$(".zhanghao .zq").css("display","block");
		};
}); 
$("#em").blur(function(event) {
	var name=$('[name=em]').val();
		if(name==""){
			$(".meails .kong").css("display","block");
			$(".meails .gsc").css("display","none");
			$(".meails .zq").css("display","none");
		}else if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(name)){
			$(".meails .kong").css("display","none");
			$(".meails .gsc").css("display","none");
			$(".meails .zq").css("display","block");
		}else{
			$(".meails .kong").css("display","none");
			$(".meails .gsc").css("display","block");
			$(".meails .zq").css("display","none");
		};
}); 
// 找回提交
$("#wj").submit(function(event) {
	var id=$('[name=meail]').val(),
		a=$("#checkboxs"),
		min=$('[name=password]').val(),
	    mon=$("[name=passwords]").val();
	if(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(id)||/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(id)){
		return true;
	}else{
		return false;
	};
});

