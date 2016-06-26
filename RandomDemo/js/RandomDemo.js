window.onload = function () {
    var MAX_RAND_NUM_X = screen.width;
    var MAX_RAND_NUM_Y = screen.height;
    var score = 0;
    //var MAX_RAND_SIZE = 100;
    //var randSize =  Math.random() * MAX_RAND_SIZE;

    //对象初始化
    var recommend = $('#recommend');
    var obj = $('#obj');
    obj.css({
        'border-radius': '0px',
        'width': '82px',
        'height': '130px',
        'background': 'url("image/01.jpg")'
    })
    var otherObj = $('#otherObj');
    var bullet = $('#bullet');
    var panel = $('#panel');
    bullet.css({
        'height': '10px',
        'width': '10px'
    })

    recommend.css({
        'padding-top': '5px',
        'display': 'block',
        'position': 'absolute',
        //'border-top-right-radius': '10px',
        //'border-bottom-right-radius': '10px',
        'font': '14px/20px Microsoft YaHei',
        'box-shadow': '0 0 3px #000',
        //'background': '#EEEEEE',
        'height': '80px',
        'width': '250px',
        'left': '0px',
        'top': '20px'
    })

    $(document).click(function(){
        recommend.slideToggle("slow");
    });

    //面板初始化
    panel.css({
        'display': 'block',
        'position': 'absolute',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        'font': '14px/20px Microsoft YaHei',
        'box-shadow': '0 0 3px #000',
        'background': '#EEEEEE',
        'height': '40px',
        'width': '200px',
        'left': '0px',
        'top': MAX_RAND_NUM_Y - 150 + 'px'
    })

    recommend.html(
        '- 当你发射(子弹)和目标体中心    -' + '<br>' +
        '- (完美重合)的时候才能得分哟    -' + '<br>' +
        '- 你这么弱(呵)应该没可能得分    -' + '<br>' +
        '- 你的爸爸会越来越大(捂嘴笑)   -'
    )

    //var x = 100
    setInterval(function(){
        //Math.pow(x,2) + Math.pow(y,2) = 1
        //var y = Math.sqrt(-(100 - Math.pow(x,2)))

        var randX = Math.random() * MAX_RAND_NUM_X;
        var randY = Math.random() * MAX_RAND_NUM_Y;
        otherObj.animate({
            'left': randX - otherObj.width() + 'px',
            'top': randY - otherObj.height() + 'px'
        }, 5000)
        //圆形轨迹 失败
        //otherObj.css({
        //    'left': x + 'px',
        //    'top': y + 'px'
        //});
        //window.console.log('x:' + x + ' y:' + y)
        //x -= 10
    }, 1000)

    $(document).mousemove(function(e){
        obj.css({
            'left': e.pageX - obj.width()/2 + 'px',
            'top': e.pageY - obj.height()/2 + 'px'
        });
    });

    //单点碰撞
    setInterval(function(){
        var otherObjX = parseInt(otherObj.offset().left + otherObj.width()/2);
        var otherObjY = parseInt(otherObj.offset().top + otherObj.height()/2);
        var bulletX = parseInt(bullet.offset().left + bullet.width()/2);
        var bulletY = parseInt(bullet.offset().top + bullet.height()/2);
        //console.log('otherObjX:' + otherObjX)
        if(otherObjX == bulletX || otherObjY == bulletY) {
            //otherObj.animate({
            //    'height': otherObj.height() + 100 + 'px',
            //    'width': otherObj.width() + 100 + 'px',
            //}, 1000)
            console.log(parseInt(otherObj.css('font-size')))
            otherObj.css({
                'font-size': parseInt(otherObj.css('font-size')) + 5 + 'px',
                'line-height': otherObj.height() + 20 + 'px',
                'height': otherObj.height() + 20 + 'px',
                'width': otherObj.width() + 20 + 'px',
            })
            score++;
        }
        panel.html(
            'score : ' + score
            //'x:' + obj.offset().left + '<br>' +
            //'y:' + obj.offset().top
        )
    }, 10)

    setInterval(function(){
        bullet.css({
            'left': obj.offset().left + obj.width()/2 + 'px',
            'top': obj.offset().top + 'px'
        });
        bullet.animate({
            'left': obj.offset().left + obj.width()/2 + 'px',
            'top': 0 - bullet.height() + 'px'
        }, 200)
    }, 300)

    //判断碰撞 失败
    //setInterval(function(){
    //    var objX = obj.offset().left;
    //    var objY = obj.offset().top;
    //    var OtherObjX = otherObj.offset().left;
    //    var OtherObjY = otherObj.offset().top;
    //    if(objX + obj.width() >= OtherObjX && objX + obj.width() <= OtherObjX + obj.width()
    //        && objY + obj.height()  >= OtherObjY && objY + obj.height() <= OtherObjY) {
    //        window.console.log('acer')
    //    }
    //}, 100)
}