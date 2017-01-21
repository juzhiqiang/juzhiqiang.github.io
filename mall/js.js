
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-13 19:24:46
 * @version $Id$
 */

// banner 色
	$(document).ready(function(){
		$(".indexing li").click(function(event) {
			var str=["#e9f5fb","#f76a32","#bc1703","#4c0805"],
				s=str[$(this).index()];
			$(".banner").animate({
				backgroundColor:s, 
				transition:'.01s',
			},"slow")
		});
	});

// 尾部隐藏释放
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

// 登录方式切换
CHItab(".ordinary",".lu q",".content .form",{
		way:"click",
        auto:false
	});
// $(".lu q").click(function(event) {
// 	$(this).css("border-color","#07b098").siblings().css("border-color","transparent");
// });

// 点击登录弹出/登录窗关闭
$("#login").click(function(event) {
	$(".deng").css("display","block");
	$(".lu i").click(function(event) {
		$(".deng").css("display","none");
	});
});

// 登录验证开始

//普通登录验证
$("#account").blur(function(event) {
	var id=$('[name=account]').val();
	var regMobile=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
		regEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(id==""){
			$(".tishis").css("display","block");
			$(".tishi").css("display","none");
			$("#mima").attr('disabled',true);
		}else if(!((regMobile.test(id)||regEmail.test(id)))){
			$(".tishis").css("display","none");
			$(".tishi").css("display","block");
			$("#mima").attr('disabled',true);
		}else{
			$(".tishis").css("display","none");
			$(".tishi").css("display","none");
			$("#mima").attr('disabled',false);
		};
}); 
$("#mima").blur(function(event){
	var name=$("[name=password]").val();
		if(name==""){
			$(".password").css("display","block");
		}else if(!(/\w{6,16}/.test(name))){
			$(".password").css("display","block");
		}else{
			$(".password").css("display","none");
		};
});
$(".off").submit(function(event) {
	var id=$('[name=account]').val();
	var name=$("[name=password]").val();
	var regMobile=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
		regEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if((regMobile.test(id)||regEmail.test(id))&&(/\w{6,16}/.test(name))
		&& id!=="" && name!==""){
		return true;
	} else {
		return false;
	};
});
// 短手机验证
$("#mobile").blur(function(event){
	var id=$("[name=mobile]").val();
		if(id==""||!(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(id))){
			$(".mobiles").css("display","block");
		}else{
			$(".mobiles").css("display","none");
		};
});
$(".forms").submit(function(event) {
	var id=$("[name=mobile]").val();
	var regMobile=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(regMobile.test(id)&& id!==""){
		return true;
	} else {
		return false;
	};
});
//点击倒计时
$("#jiaoyan").click(function(event) {
	var text=this.innerText;
	this.disabled=true;
	this.innerText="120秒后再点"
	var n=120;
	var time=setInterval(function(){
		n--;
		this.innerText=n+"秒后再点";
		if(!n){
			clearInterval(time)
			this.disabled=false;
			this.innerText=text;
		}
	}.bind(this),1e3);
});
	
  // 定义按钮btn
    var btn = $("#jiaoyan");
    // 定义发送时间间隔(s)
    var SEND_INTERVAL = 120;
    var timeLeft = SEND_INTERVAL;
    /**
    * 绑定btn按钮的监听事件
    */
    var bindBtn = function(){
        btn.click(function(){
            // 需要先禁用按钮（为防止用户重复点击）
            btn.unbind('click');
            btn.attr('disabled', 'disabled');
            $.ajax({
                // ajax接口调用...
            })
            .done(function () {
                alert('发送成功');
                //成功
                timeLeft = SEND_INTERVAL;
                timeCount();                
            })
            .fail(function () {
                //失败，弹窗
                alert('发送失败');
                // ** 重要：因为发送失败，所以要恢复发送按钮的监听 **
                bindBtn();
                btn.remove('disabled');
            });
        })
    }           
    
// 登录验证结束

CHIpage(".zhuans",".right");
	CHImovie(".ban ",".banners",{
		indices:".indexing li",
	});
	$(".meat").each(function(index, el) {
		CHItab(this,".pas li",".meats .right")
	});
	CHItab(".pastry",".pas li",".pastrys .right",{
        auto:false
	});
	CHItab(".meat",".pas li",".meats .right",{
        auto:false
	});
	CHItab(".digital",".pas li",".digitals .right",{
        auto:false
	});0

// 手机大小图切换
$(".narrow li").mouseover(function(event) {
	var src=$(this).find("img").attr("src");
	$(this).closest('ol').siblings('div').find("img").attr("src",src);
		$(".narrow li").hover(function(){
			$(this).addClass('cur').css("border-color","red").siblings().css("border-color","transparent");
		}); 
});
// 或者
// $(".narrow li").hover(function(event) {
// 		var index=$(this).index(),
// 			img=$(this).find("img").attr("src").replace("-1","1");
// 		$(this).parent().prev().find("a").find("img").attr("src",img);
// 	});

// 倒计时
// $(function(){
// 	var intDiff = parseInt(80000);//倒计时总秒数量
// 	function timer(){
// 		var day=0,
// 			hour=0,
// 			minute=0,
// 			second=0;//时间默认值		
// 		if(intDiff > 0){
// 			day = Math.floor(intDiff / (60 * 60 * 24));
// 			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
// 			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
// 			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
// 		}
// 		if (minute <= 9) minute = '0' + minute;
// 		if (second <= 9) second = '0' + second;
// 		$('#day_show').html(day+"天");
// 		$('#hour_show').html('<s id="h"></s>'+hour+'时');
// 		$('#minute_show').html('<s></s>'+minute+'分');
// 		$('#second_show').html('<s></s>'+second+'秒');
// 		intDiff--;
// 	} 
// 	setInterval(function(){
// 		timer();
// 	},1e3);
// 	timer();
// });	

function time(day,hour,minute,second){
    var date=new Date(),
        month1=date.getMonth()+1,
	    day1=date.getDate(),
	    hour1=date.getHours(),
	    minute1=date.getMinutes(),
	    second1=date.getSeconds();


    var day2=day-day1,
        hour2=day2*24+hour-hour1,
        minute2=hour2*60+minute-minute1,
        second2=minute2*60+second-second1;


        var seconds=second2%60,
        minutes=parseInt(second2/60)%60,
        hours=parseInt(second2/3600),//若在尾部加%24者可城24时
        days=parseInt(second2/86400);
 
	    $(".time").html(hours+"时"+minutes+"分"+seconds+"秒");

	    if(days==0&&minutes==0&&hours==0&seconds==0) clearInterval(t);
  
   
   }
time(32,14,21,0);
var t=setInterval(function(){
	time(32,14,21,0);
 },1e3);  
