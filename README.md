# echartShow
基于echart和bootstrap的大屏展示
以下是已经运用的成品图片。有一些数据运用的是json文件，实际成品中运用的是真实数据，除了公司内网访问不了。
![image](https://github.com/sunnywindia/echartShow/blob/master/img/result.jpg)

需注意的地方：
1.图表必须设置长度宽度，否则加载图表的时候显示不了。
2.图表自适应， window.onresize = myChart.resize;
多个图表自适应，把多个图表放进一个数组里，监听页面变化，逐个重新加载
window.onresize = function () {
	resizeWorldMapContainer();
	for (var i = 0; i < charts.length; i++) {
		charts[i].resize();

	}
  }
