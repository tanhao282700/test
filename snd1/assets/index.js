/**
 * Created by Administrator on 2019/1/27.
 */

var audio = document.getElementById('audio');
//----------处理自动播放------------
//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
            playBgMusic(true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                playBgMusic(true);
            }, false);
    }
        audioAutoPlay();
});

//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
function audioAutoPlay() {
        playBgMusic(true);
        document.removeEventListener('touchstart',audioAutoPlay);
}
document.addEventListener('touchstart', audioAutoPlay);
//----------处理页面激活------------
var hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
            null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {
        if(!sessionStorage.bgmusic||sessionStorage.bgmusic=='play'){
            audio.play();
        }
    }else{
        audio.pause();
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);

function playBgMusic(val){
    if(val){
        audio.play();
        sessionStorage.bgmusic='play';
    }else{
        audio.pause();
        sessionStorage.bgmusic='pause';
    }
}

$(function () {
    setTimeout(function () {
        $(".page5").addClass('show');
        $(".main").addClass('blackBg');
    },12000)


})

var scs={};
scs.action01 = function () {
    $(".fiveButton").fadeOut('fast');
    var a1 = new Animy({
        target:"#page5GreenLine",
        from:{width:"0vw"},
        to:{width: "36.5vw"},
        duration:2000,
        end:function(){
            a2.play();
            a3.play();
            a4.play();
        }
    });
    a1.play();
    var a2 = new Animy({
        target:".page5",
        from:{left:"0vw"},
        to:{left: "-100vw"},
        duration:2000
    });
    var a3 = new Animy({
        target:".page6",
        from:{left:"100vw"},
        to:{left: "0vw"},
        duration:2000
    });
    var a4 = new Animy({
        target:"#page6GreenLine",
        from:{width:"0vw"},
        to:{width: "27.5vw"},
        duration:2000,
        end:function(){
            $(".sq").addClass('flick');
            $("#page6GreenLine").fadeOut();
        }
    });

}

scs.page6clickTimes = 0;
scs.action02 = function () {
    scs.page6clickTimes++;
    if(scs.page6clickTimes==1){
        $(".six2").addClass('show').delay(2000).fadeOut();
        return;
    }
    if(scs.page6clickTimes==2){
        $(".six2").hide();
        $(".six3").addClass('show').delay(2000).fadeOut();
        return;
    }
    if(scs.page6clickTimes==3){
        $(".six3").hide();
        $(".sq").removeClass("flick").addClass('border');
        $("#page6GreenLine2").show();

        var a5 = new Animy({
            target:"#page6GreenLine2",
            from:{height:"0vh",top:"30vh"},
            to:{height: "30vh",top:"0vh"},
            duration:2000,
            end:function(){
                a7.play();
                a8.play();
                a6.play();
            }
        });
        a5.play();
        var a6 = new Animy({
            target:"#page7GreenLine",
            from:{height:"0vh"},
            to:{height: "100vh"},
            duration:5000,
            end:function(){
                a10.play();
                a9.play();
                a11.play();
            }
        });
        var a7 = new Animy({
            target:".page6",
            from:{top:"0vh"},
            to:{top: "100vh"},
            duration:2000
        });
        var a8 = new Animy({
            target:".page7",
            from:{top:"-100vh"},
            to:{top: "0vh"},
            duration:2000
        });
        var a9 = new Animy({
            target:".page8",
            from:{top:"-100vh"},
            to:{top: "0vh"},
            duration:2000
        });
        var a10 = new Animy({
            target:".page7",
            from:{top:"0vh"},
            to:{top: "100vh"},
            duration:2000
        });
        var a11 = new Animy({
            target:"#page8GreenLine",
            from:{height:"0vh"},
            to:{height: "13.2vh"},
            duration:1500,
            end:function(){
                $(".eighth").fadeIn();
                setTimeout(function () {
                    $(".eight").fadeIn();
                },1000)
                setTimeout(function () {
                    $(".page8").hide();
                    $(".page9").fadeIn();
                },2500)
                setTimeout(function () {
                    $(".page9").hide();
                    $(".page10").fadeIn();
                    a12.play();
                },3500)
            }
        });
        var a12 = new Animy({
            target:"#page10GreenLine",
            from:{width:"0vw"},
            to:{width: "31.5vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    a13.play();
                },500)
            }
        });
        var a13 = new Animy({
            target:"#page10GreenLine2",
            from:{width:"0vw"},
            to:{width: "31.5vw"},
            duration:1500,
            end:function(){
                a14.play();
                a15.play();
                a16.play();
            }
        });
        var a14 = new Animy({
            target:".page11",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a15 = new Animy({
            target:"#page11GreenLine1",
            from:{width:"0vw"},
            to:{width: "10vw"},
            duration:1500,
            end:function(){
                $("#page11GreenLine2").show();
                a17.play();

            }
        });
        var a16 = new Animy({
            target:".page10",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a17 = new Animy({
            target:"#page11GreenLine2",
            from:{height:"0vh",top:'52.6vh'},
            to:{height: "15vh",top:'37.6vh'},
            duration:1500,
            end:function(){
                $("#page11GreenLine4").show();
                a18.play();
            }
        });
        var a18 = new Animy({
            target:"#page11GreenLine4",
            from:{width:"0vw"},
            to:{width: "24vw"},
            duration:1500,
            end:function(){
                $(".elevenCon,.page11 .pic").show();
                setTimeout(function () {
                    $(".elevenCon").hide();
                    a21.play();
                },1000)
            }
        });
        var a19 = new Animy({
            target:"#page11GreenLine3",
            from:{height:"0vh"},
            to:{height: "15vh"},
            duration:1500,
            end:function(){
                $("#page11GreenLine5").show();
                a20.play();
            }
        });
        var a20 = new Animy({
            target:"#page11GreenLine5",
            from:{width:"0vw"},
            to:{width: "24vw"},
            duration:1500,
            end:function(){
                $(".elevenCon2,.page11 .pic2").show();
                setTimeout(function () {
                    $(".elevenCon2").hide();
                    a26.play();
                },1000)
            }
        });
        var a21 = new Animy({
            target:".page11",
            from:{top:"0vh"},
            to:{top: "-10vh"},
            duration:1000,
            end:function(){
                $("#page11GreenLine3").show();
                a19.play();
            }
        });
        var a22 = new Animy({
            target:["#page11GreenLine6","#page11GreenLine7"],
            from:{width:"0vw"},
            to:{width: "24vw"},
            duration:1500,
            end:function(){
                $("#page11GreenLine8,#page11GreenLine9").show();
                a23.play();
                a24.play();
            }
        });
        var a23 = new Animy({
            target:"#page11GreenLine8",
            from:{height:"0vh"},
            to:{height: "15vh"},
            duration:1500,
            end:function(){

            }
        });
        var a24 = new Animy({
            target:"#page11GreenLine9",
            from:{height:"0vh",top:'67.6vh'},
            to:{height: "15vh",top:'52.6vh'},
            duration:1500,
            end:function(){
                $("#page11GreenLine10").show();
                a25.play();
            }
        });
        var a25 = new Animy({
            target:"#page11GreenLine10",
            from:{width:"0vw"},
            to:{width: "10vw"},
            duration:1500,
            end:function(){
                a27.play();
                a28.play();
                a29.play();
            }
        });
        var a26 = new Animy({
            target:".page11",
            from:{top:"-10vh"},
            to:{top: "0vh"},
            duration:1000,
            end:function(){
                $("#page11GreenLine6,#page11GreenLine7").show();
                a22.play();
            }
        });
        var a27 = new Animy({
            target:".page11",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a28 = new Animy({
            target:".page12",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a29 = new Animy({
            target:"#page12GreenLine1",
            from:{width:"0vw"},
            to:{width: "12.8vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    $("#page12GreenLine2").show();
                    a30.play();
                },500)
            }
        });
        var a30 = new Animy({
            target:"#page12GreenLine2",
            from:{width:"0vw"},
            to:{width: "11.5vw"},
            duration:1500,
            end:function(){
                a31.play();
                a32.play();
                a33.play();
            }
        });
        var a31 = new Animy({
            target:".page13",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a32 = new Animy({
            target:".page12",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a33 = new Animy({
            target:"#page13GreenLine1",
            from:{width:"0vw"},
            to:{width: "30.5vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    a34.play();
                },500)
            }
        });
        var a34 = new Animy({
            target:"#page13GreenLine2",
            from:{width:"0vw"},
            to:{width: "32vw"},
            duration:1500,
            end:function(){
                a35.play();
                a36.play();
                a37.play();
            }
        });
        var a35 = new Animy({
            target:".page13",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a36 = new Animy({
            target:".page14",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a37 = new Animy({
            target:"#page14GreenLine1",
            from:{width:"0vw"},
            to:{width: "14vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    a38.play();
                },500)
            }
        });
        var a38 = new Animy({
            target:"#page14GreenLine2",
            from:{width:"0vw"},
            to:{width: "13vw"},
            duration:1500,
            end:function(){
                a39.play();
                a40.play();
                a41.play();
            }
        });
        var a39 = new Animy({
            target:".page14",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a40 = new Animy({
            target:".page15",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a41 = new Animy({
            target:"#page15GreenLine1",
            from:{width:"0vw"},
            to:{width: "30.5vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    a41_1.play();
                },500)
            }
        });
        var a41_1 = new Animy({
            target:"#page15GreenLine2",
            from:{width:"0vw"},
            to:{width: "30.5vw"},
            duration:1500,
            end:function(){
                a42.play();
                a43.play();
                a44.play();
            }
        });
        var a42 = new Animy({
            target:".page15",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a43 = new Animy({
            target:".page16",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        });
        var a44 = new Animy({
            target:"#page16GreenLine1",
            from:{width:"0vw"},
            to:{width: "8vw"},
            duration:1500,
            end:function(){
                setTimeout(function () {
                    a45.play();
                },500)
            }
        });
        var a45 = new Animy({
            target:"#page16GreenLine2",
            from:{width:"0vw"},
            to:{width: "8vw"},
            duration:1500,
            end:function(){
                a46.play();
                a47.play();
                setTimeout(function () {
                    $("#page17box1").fadeIn();
                },1500)
                setTimeout(function () {
                    $("#page17box2").fadeIn();
                },2500)
                setTimeout(function () {
                    $("#page17box3").fadeIn();
                },3500)
            }
        });
        var a46 = new Animy({
            target:".page16",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        });
        var a47 = new Animy({
            target:".page17",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000,
            end:function(){
                setTimeout(function(){
                    a48.play()
                    a49.play()
                },1000)
            }
        });

        var a48 = new Animy({
            target:".page17",
            from:{left:"0vw"},
            to:{left: "-100vw"},
            duration:2000
        })

        var a49 = new Animy({
            target:".page18",
            from:{left:"100vw"},
            to:{left: "0vw"},
            duration:2000
        })

    }

}

$(".sendBth").click(function(){
    if(!$(".name").val()){
        alert('请填写姓名！')
        return
    }
    if(!$(".myPhone").val()){
        alert('请填写电话！')
        return
    }
    if(!$(".email").val()){
        alert('请填写电子邮箱！')
        return
    }
    if(!$(".company").val()){
        alert('请填写公司名称！')
        return
    }
    if(!$(".im").val() == 0){
        alert('请选择行业！')
        return
    }
    if(!$(".isExcept").val() == 0){
        alert('请选择是否愿意接受电子邮件！')
        return
    }
})
