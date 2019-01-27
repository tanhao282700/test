/**
 * Created by Administrator on 2019/1/27.
 */
$(".clounds1").removeClass('scs-hide')
$(".clounds2").removeClass('scs-hide')
$(".clounds3").removeClass('scs-hide')

/*var bool1 = new Parabola({
    el: "#boll",
    targetEl:'.clounds2Pig',
    curvature: 0.005,
    duration: 1000,
    callback: function () {
        /!*alert("完成后回调")*!/
        var bool2 = new Parabola({
            el: "#boll",
            targetEl:'.clounds3Pig',
            curvature: 0.005,
            duration: 1000,
            callback: function () {
                /!*alert("完成后回调")*!/
                var bool3 = new Parabola({
                    el: "#boll",
                    targetEl:'.pig',
                    curvature: 0.02,
                    duration: 1000,
                    callback: function () {
                        setTimeout(function(){
                            $(".pigTips").removeClass('scs-hide')
                            $(".pigTips").animate({opacity:1},1000,'swing')
                            $(".animatePig").animate({opacity:0},1000,'swing')
                        },500)
                    }
                });
                setTimeout(function(){
                    $(".clound3text").removeClass('scs-hide')
                    bool3.start()
                },1000)
            }
        });
        setTimeout(function(){
            $(".clound2text").removeClass('scs-hide')
            bool2.start()
        },1000)
    }
});*/

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
            duration: 700,
            callback: function () {
                $(".animatePig3").removeClass('animatePig3-2')
                /*alert("完成后回调")*/
                var bool2 = new Parabola({
                    el: "#boll",
                    targetEl:'.clounds3Pig',
                    curvature: 0.005,
                    duration: 800,
                    callback: function () {
                        $(".animatePig3").removeClass('animatePig3-5').addClass('animatePig3-7')
                        /*alert("完成后回调")*/
                        var bool3 = new Parabola({
                            el: "#boll",
                            targetEl:'.pig',
                            curvature: 0.02,
                            duration: 900,
                            callback: function () {
                                /*setTimeout(function(){
                                    $(".pigTips").removeClass('scs-hide')
                                    $(".pigTips").animate({opacity:1},1000,'swing')
                                    $(".animatePig").animate({opacity:0},1000,'swing')
                                },500)*/
                                $(".animatePig3").removeClass('animatePig3-2').addClass('animatePig3-9')
                                     setTimeout(function(){
                                         $(".animatePig3").removeClass('animatePig3-9').addClass('animatePig3-8')
                                     setTimeout(function(){
                                         $(".animatePig3").addClass('scs-hide')
                                         $(".pig").css({opacity:1})
                                         $(".pigTips").removeClass('scs-hide')
                                         $(".pigTips").animate({opacity:1},1000,'swing')
                                         $(".pig").animate({opacity:0},1000,'swing')
                                     },1000)
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
                                },500)
                            },500)
                        },500)
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
                        },500)
                    },500)
                },500)
            }
        });
        setTimeout(function(){
            $(".clound1text").removeClass('scs-hide')
            $(".animatePig3").addClass('animatePig3-2')
            bool1.start()
        },500)
    },1500)
},1000)


$(".pigTips").click(function(){
    $(".pigTips").hide()
})

