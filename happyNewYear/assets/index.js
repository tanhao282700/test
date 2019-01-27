/**
 * Created by Administrator on 2019/1/27.
 */
$(".clounds1").removeClass('scs-hide')
$(".clounds2").removeClass('scs-hide')
$(".clounds3").removeClass('scs-hide')

var bool1 = new Parabola({
    el: "#boll",
    targetEl:'.clounds2Pig',
    curvature: 0.005,
    duration: 1000,
    callback: function () {
        /*alert("完成后回调")*/
        var bool2 = new Parabola({
            el: "#boll",
            targetEl:'.clounds3Pig',
            curvature: 0.005,
            duration: 1000,
            callback: function () {
                /*alert("完成后回调")*/
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
});

setTimeout(function(){
    $(".animatePig").removeClass('scs-hide')
    /*setTimeout(function(){

    },100)
    $(".animatePig").animate({opacity:1,top:'5vh'},500,'swing',function(){
        /!*setTimeout(function(){
            $(".clound1text").removeClass('scs-hide')
            bool1.start()
        },500)*!/
    })*/
},1000)


$(".pigTips").click(function(){
    $(".pigTips").hide()
})

