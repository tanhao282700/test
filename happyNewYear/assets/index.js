/**
 * Created by Administrator on 2019/1/27.
 */
$(".clounds1").removeClass('scs-hide')
$(".clounds2").removeClass('scs-hide')
$(".clounds3").removeClass('scs-hide')



setTimeout(function(){
    $(".animatePig").removeClass('scs-hide')
    $(".animatePig2").removeClass('scs-hide')
    setTimeout(function(){
        $(".animatePig2").addClass('scs-hide')
        $(".animatePig3").removeClass('scs-hide')
        var bool1 = new Parabola({
            el: "#boll",
            targetEl:'.clounds2Pig',
            curvature: 0.007,
            duration: 500,
            callback: function () {
                $(".animatePig3").removeClass('animatePig3-2')
                /*alert("完成后回调")*/
                var bool2 = new Parabola({
                    el: "#boll",
                    targetEl:'.clounds3Pig',
                    curvature: 0.005,
                    duration: 500,
                    callback: function () {
                        $(".animatePig3").removeClass('animatePig3-5').addClass('animatePig3-7')
                        /*alert("完成后回调")*/
                        var bool3 = new Parabola({
                            el: "#boll",
                            targetEl:'.pig',
                            curvature: 0.006,
                            duration: 500,
                            callback: function () {
                                $(".animatePig3").removeClass('animatePig3-2').addClass('animatePig3-9')
                                     setTimeout(function(){
                                         $(".animatePig3").removeClass('animatePig3-9').addClass('animatePig3-8')
                                     setTimeout(function(){
                                         $(".animatePig3").addClass('scs-hide')
                                         $(".pig").css({opacity:1})
                                         $(".pigTips").removeClass('scs-hide')
                                         $(".pigTips").animate({opacity:1},1000,'swing')
                                         $(".zhezhao").hide()
                                     },500)
                                     },300)

                            }
                        });
                        setTimeout(function(){
                            $(".animatePig3").removeClass('animatePig3-7').addClass('animatePig3-8')
                            setTimeout(function(){
                                $(".animatePig3").removeClass('animatePig3-8').addClass('animatePig3-9')
                                setTimeout(function(){
                                    $(".animatePig3").removeClass('animatePig3-9').addClass('animatePig3-2')
                                    $(".clound3text").removeClass('scs-hide')
                                    bool3.start()
                                },300)
                            },500)
                        },200)
                    }
                });
                setTimeout(function(){
                    $(".animatePig3").addClass('animatePig3-3')
                    setTimeout(function(){
                        $(".animatePig3").removeClass('animatePig3-3').addClass('animatePig3-4')
                        setTimeout(function(){
                            $(".animatePig3").removeClass('animatePig3-4').addClass('animatePig3-5')
                            $(".clound2text").removeClass('scs-hide')
                            bool2.start()
                        },300)
                    },500)
                },200)
            }
        });
        setTimeout(function(){
            $(".clound1text").removeClass('scs-hide')
            $(".animatePig3").addClass('animatePig3-2')
            bool1.start()
        },300)
    },1000)
},1000)


$(".pigTips").click(function(){
    $(".pigTips").hide()
})


$(".clounds1").click(function(){
    $(".model-text1").css({background:'url(./imgs/mt-1.png) no-repeat left top/100% 100%',width:'0.58rem',height:'15.42vh',left:'0.3rem',top:'7vh'})
    $(".model-text2").css({background:'url(./imgs/mtc-1.png) no-repeat left top/100% 100%',width:'1rem',height:'15.75vh',right:'0.27rem',top:'7vh'})
    $(".clounds1").animate({opacity:0},100,'swing',function(){
        $(".clounds1").hide()
        $(".clounds2").hide()
        $(".clounds3").hide()
    })
    $(".model_clound1").animate({opacity:1},100,'swing',function(){
        var clounds = new Parabola({
            el: ".model_clound1",
            targetEl:'.tipsclound',
            curvature: 0.005,
            duration: 400,
            callback: function () {
                $(".tipsclound").css({opacity:1})
                $(".model_clound1").css({opacity:0})
                setTimeout(function(){
                    $(".pig").css('background','url(./imgs/right2.png) no-repeat left top/100% 100%')
                    setTimeout(function(){
                        $(".pig").css('background','url(./imgs/top1.png) no-repeat left top/100% 100%')
                        var longs = $(".pig")[0].offsetTop - $(".tipsTxt")[0].offsetTop
                        console.log(longs)
                        var lastPig1 = new Parabola({
                            el: ".pig",
                            targetEl:'.tipsTxt',
                            curvature: 0.005,
                            duration: 500,
                            callback: function () {
                                var lastPig2 = new Parabola({
                                    el: ".pig",
                                    targetEl:'.lastPig2',
                                    curvature: 0.005,
                                    duration: 500,
                                    callback: function () {
                                        $(".pig").css('background','url(./imgs/top6.png) no-repeat left top/100% 100%')
                                        setTimeout(function(){
                                            $(".pig").css('background','url(./imgs/top7.png) no-repeat left top/100% 100%')
                                        },100)
                                    },
                                    stepCallback: function(x,y){
                                        if(y>longs/2){
                                            $(".pig").css('background','url(./imgs/top4.png) no-repeat left top/100% 100%')
                                        }
                                        if(y>longs/4*3){
                                            $(".pig").css('background','url(./imgs/top5.png) no-repeat left top/100% 100%')
                                        }
                                    }
                                })
                                lastPig2.start()
                                $(".tipsTxt").animate({height:'31.59vh'},500,'swing',function(){
                                    setTimeout(function(){
                                        $(".model-ll").animate({opacity:1,right:'0.18rem'},'500','swing')
                                        $(".model-bt").animate({opacity:1},'500','swing')
                                    },100)
                                    setTimeout(function(){
                                        $(".mode-txt").animate({opacity:1},'500','swing')
                                    },200)
                                })
                            },
                            stepCallback:function(x,y){
                                console.log(y)
                                var go = Math.abs(y)
                                if(go>longs/2){
                                    $(".pig").css('background','url(./imgs/top2.png) no-repeat left top/100% 100%')
                                }
                                if(go>longs/4*3){
                                    $(".pig").css('background','url(./imgs/top3.png) no-repeat left top/100% 100%')
                                }
                            }
                        })
                        lastPig1.start()
                    },100)
                },200)
            }
        });
        clounds.start()
    })
    $(".clounds2").animate({left:-100,opacity:0},500,'swing')
    $(".clounds3").animate({right:-100,opacity:0},500,'swing')
})

$(".clounds2").click(function(){
    $(".model-text1").css({background:'url(./imgs/mt-2.png) no-repeat left top/100% 100%'})
    $(".model-text2").css({background:'url(./imgs/mtc-2.png) no-repeat left top/100% 100%'})

    $(".clounds2").animate({opacity:0},100,'swing',function(){
        $(".clounds1").hide()
        $(".clounds2").hide()
        $(".clounds3").hide()
    })
    $(".model_clound2").animate({opacity:1},100,'swing',function(){
        var clounds = new Parabola({
            el: ".model_clound2",
            targetEl:'.tipsclound',
            curvature: 0.005,
            duration: 200,
            callback: function () {
                $(".tipsclound").css({opacity:1})
                $(".model_clound2").css({opacity:0})
                setTimeout(function(){
                    $(".pig").css('background','url(./imgs/right2.png) no-repeat left top/100% 100%')
                    setTimeout(function(){
                        $(".pig").css('background','url(./imgs/top1.png) no-repeat left top/100% 100%')
                        var longs = $(".pig")[0].offsetTop - $(".tipsTxt")[0].offsetTop
                        console.log(longs)
                        var lastPig1 = new Parabola({
                            el: ".pig",
                            targetEl:'.tipsTxt',
                            curvature: 0.005,
                            duration: 500,
                            callback: function () {
                                var lastPig2 = new Parabola({
                                    el: ".pig",
                                    targetEl:'.lastPig2',
                                    curvature: 0.005,
                                    duration: 500,
                                    callback: function () {
                                        $(".pig").css('background','url(./imgs/top6.png) no-repeat left top/100% 100%')
                                        setTimeout(function(){
                                            $(".pig").css('background','url(./imgs/top7.png) no-repeat left top/100% 100%')
                                        },100)
                                    },
                                    stepCallback: function(x,y){
                                        if(y>longs/2){
                                            $(".pig").css('background','url(./imgs/top4.png) no-repeat left top/100% 100%')
                                        }
                                        if(y>longs/4*3){
                                            $(".pig").css('background','url(./imgs/top5.png) no-repeat left top/100% 100%')
                                        }
                                    }
                                })
                                lastPig2.start()
                                $(".tipsTxt").animate({height:'31.59vh'},500,'swing',function(){
                                    setTimeout(function(){
                                        $(".model-ll").animate({opacity:1,right:'0.18rem'},'500','swing')
                                        $(".model-bt").animate({opacity:1},'500','swing')
                                    },100)
                                    setTimeout(function(){
                                        $(".mode-txt").animate({opacity:1},'500','swing')
                                    },200)
                                })
                            },
                            stepCallback:function(x,y){
                                console.log(y)
                                var go = Math.abs(y)
                                if(go>longs/2){
                                    $(".pig").css('background','url(./imgs/top2.png) no-repeat left top/100% 100%')
                                }
                                if(go>longs/4*3){
                                    $(".pig").css('background','url(./imgs/top3.png) no-repeat left top/100% 100%')
                                }
                            }
                        })
                        lastPig1.start()
                    },100)
                },200)
            }
        });
        clounds.start()
    })
    $(".clounds1").animate({left:-100,opacity:0},500,'swing')
    $(".clounds3").animate({right:-100,opacity:0},500,'swing')
})

$(".clounds3").click(function(){
    $(".model-text1").css({background:'url(./imgs/mt-3.png) no-repeat left top/100% 100%'})
    $(".model-text2").css({background:'url(./imgs/mtc-3.png) no-repeat left top/100% 100%'})
    $(".clounds3").animate({opacity:0},100,'swing',function(){
        $(".clounds1").hide()
        $(".clounds2").hide()
        $(".clounds3").hide()
    })
    $(".model_clound3").animate({opacity:1},100,'swing',function(){
        var clounds = new Parabola({
            el: ".model_clound3",
            targetEl:'.tipsclound',
            curvature: 0.005,
            duration: 200,
            callback: function () {
                $(".tipsclound").css({opacity:1})
                $(".model_clound3").css({opacity:0})
                setTimeout(function(){
                    $(".pig").css('background','url(./imgs/right2.png) no-repeat left top/100% 100%')
                    setTimeout(function(){
                        $(".pig").css('background','url(./imgs/top1.png) no-repeat left top/100% 100%')
                        var longs = $(".pig")[0].offsetTop - $(".tipsTxt")[0].offsetTop
                        console.log(longs)
                        var lastPig1 = new Parabola({
                            el: ".pig",
                            targetEl:'.tipsTxt',
                            curvature: 0.005,
                            duration: 500,
                            callback: function () {
                                var lastPig2 = new Parabola({
                                    el: ".pig",
                                    targetEl:'.lastPig2',
                                    curvature: 0.005,
                                    duration: 500,
                                    callback: function () {
                                        $(".pig").css('background','url(./imgs/top6.png) no-repeat left top/100% 100%')
                                        setTimeout(function(){
                                            $(".pig").css('background','url(./imgs/top7.png) no-repeat left top/100% 100%')
                                        },100)
                                    },
                                    stepCallback: function(x,y){
                                        if(y>longs/2){
                                            $(".pig").css('background','url(./imgs/top4.png) no-repeat left top/100% 100%')
                                        }
                                        if(y>longs/4*3){
                                            $(".pig").css('background','url(./imgs/top5.png) no-repeat left top/100% 100%')
                                        }
                                    }
                                })
                                lastPig2.start()
                                $(".tipsTxt").animate({height:'31.59vh'},500,'swing',function(){
                                    setTimeout(function(){
                                        $(".model-ll").animate({opacity:1,right:'0.18rem'},'500','swing')
                                        $(".model-bt").animate({opacity:1},'500','swing')
                                    },100)
                                    setTimeout(function(){
                                        $(".mode-txt").animate({opacity:1},'500','swing')
                                    },200)
                                })
                            },
                            stepCallback:function(x,y){
                                console.log(y)
                                var go = Math.abs(y)
                                if(go>longs/2){
                                    $(".pig").css('background','url(./imgs/top2.png) no-repeat left top/100% 100%')
                                }
                                if(go>longs/4*3){
                                    $(".pig").css('background','url(./imgs/top3.png) no-repeat left top/100% 100%')
                                }
                            }
                        })
                        lastPig1.start()
                    },100)
                },200)
            }
        });
        clounds.start()
    })
    $(".clounds2").animate({left:-100,opacity:0},500,'swing')
    $(".clounds1").animate({right:-100,opacity:0},500,'swing')
})


$(".model-bt").click(function(){
    $(".clounds1").hide()
    $(".clounds2").hide()
    $(".clounds3").hide()
    $(".model_clound3").hide()
    $(".clounds2Pig").hide()
    $(".model_clound1").hide()
    $(".mode-txt").animate({opacity:0},500,'swing',function(){
        $(".mode-txt").hide()
    })
    $(".tipsclound").animate({opacity:0},500,'swing',function(){
        $(".tipsclound").hide()
    })
    $(".model-ll").animate({opacity:0},500,'swing',function(){
        $(".model-ll").hide()
    })
    $(".tipsTxt").animate({opacity:0},500,'swing',function(){
        $(".tipsTxt").hide()
    })
    $(".pig").animate({opacity:0},500,'swing',function(){
        $(".pig").hide()
    })
    $(".model-bt").animate({opacity:0},500,'swing',function(){
        $(".model-bt").hide()
    })
    $(".selectBox").animate({opacity:1},500,'swing')
    $(".nextStep").animate({opacity:1},500,'swing')
})

$(".nextStep").click(function(){
    $(".textarea").removeClass('scs-hide')
    $(".nextStep2").removeClass('scs-hide')
    $(".selectBox").animate({opacity:0},500,'swing')
    $(".nextStep").animate({opacity:0},500,'swing')
    $(".textarea").animate({opacity:1},500,'swing')
    $(".nextStep2").css('opacity',1)
})

var isWrite = false

$(".init").click(function(){
    isWrite = true
    $(".init").hide()
    $(".txt").removeClass('scs-hide')
    $(".txt").focus()
})


$(".nextStep2").click(function(){
    if(isWrite){
        if(!$(".txt").val()){
            alert('请输入祝福语')
            $(".txt").focus()
            return
        }
        $(".shadow").removeClass('scs-hide')
        //发送请求
        //...........
    }else{
        $(".shadow").removeClass('scs-hide')
        //发送请求
        //...........
    }
})




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