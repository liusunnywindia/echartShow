$(function(){
	 var echart1 = document.getElementById('echart1');
	  $("#echart1").show();
   // rDrag.init(echart1);

   // 关闭统计分析弹出窗
    $("#close_echar").click(function(){
        window.parent.chartclose();
    });
});

var echarFlag = false;
function echarOnOff() {
    if (echarFlag) {
        $("#echart1").hide();
        echarFlag = false;
    } else {
        $("#echart1").show();
        echarFlag = true;
    }
}

var rDrag = {
    o: null,
    init: function (o) {
        o.onmousedown = this.start;
    },
    start: function (e) {
        var o;
        e = rDrag.fixEvent(e);
        e.preventDefault && e.preventDefault();
        rDrag.o = o = this;
        o.x = e.clientX - rDrag.o.offsetLeft;
        o.y = e.clientY - rDrag.o.offsetTop;
        document.onmousemove = rDrag.move;
        document.onmouseup = rDrag.end;
    },
    move: function (e) {
        e = rDrag.fixEvent(e);
        var oLeft, oTop;
        oLeft = e.clientX - rDrag.o.x;
        oTop = e.clientY - rDrag.o.y;
        rDrag.o.style.left = oLeft + 'px';
        rDrag.o.style.top = oTop + 'px';
    },
    end: function (e) {
        e = rDrag.fixEvent(e);
        rDrag.o = document.onmousemove = document.onmouseup = null;
    },
    fixEvent: function (e) {
        if (!e) {
            e = window.event;
            e.target = e.srcElement;
            e.layerX = e.offsetX;
            e.layerY = e.offsetY;
        }
        return e;
    }
}

