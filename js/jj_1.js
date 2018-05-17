var charts=[];
var option1 = {
	title: {
		text: '质量监督受理按月统计',
		textStyle: {
			color: '#ccc'
		}
	},
	textStyle: {
		color: '#ccc'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['处理质检案件', ],
		textStyle: {
			color: '#ccc'
		}
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: '{value} 件'
		},
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}
	}],
	series: [{
		name: '已处理质检案件',
		type: 'line',
		data: [11, 11, 15, 8, 12, 13, 10],
		markPoint: {
			data: [{
				type: 'max',
				name: '最大值'
			}, {
				type: 'min',
				name: '最小值'
			}]
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}]
		}
	}]
};
var worldMapContainer1 = document.getElementById("echartsDiv1");
var worldMapContainer2 = document.getElementById("echartsDiv2");
var worldMapContainer3 = document.getElementById("echartsDiv3");
var worldMapContainer4 = document.getElementById("echartsDiv4");
var worldMapContainer5 = document.getElementById("echartsDiv5");
var worldMapContainer6 = document.getElementById("echartsDiv6");


//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {

    worldMapContainer1.style.height = (window.innerHeight/3-20)+'px';
      worldMapContainer2.style.height = (window.innerHeight/3-20)+'px';
        worldMapContainer3.style.height = (window.innerHeight/3-20)+'px';
          worldMapContainer4.style.height = (window.innerHeight/3-20)+'px';
            worldMapContainer5.style.height = (window.innerHeight/3-20)+'px';
              worldMapContainer6.style.height = (window.innerHeight/3-20)+'px';
         
};
//设置容器高宽
resizeWorldMapContainer();
var myChart1 = echarts.init(worldMapContainer1);
myChart1.setOption(option1);
 charts.push(myChart1);


var option3 = {
		title: {
		text: '工程质量安全指数',
		textStyle: {
			color: '#ccc'
		}
	},

    tooltip : {
        trigger: 'axis',
        textStyle: {
			color: '#ccc'
		}
    },
    legend: {
        data:['质量','安全'],
        textStyle: {
			color: '#ccc'
		},
		 x: 'right', 
		
    },
//  toolbox: {
//      show : true,
//      feature : {
//          mark : {show: true},
//          dataZoom : {show: true},
//          dataView : {show: true},
//          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
//          restore : {show: true},
//          saveAsImage : {show: true}
//      }
//  },
textStyle: {
			color: '#ccc'
		},
    calculable : true,
    dataZoom : {
        show : true,
        realtime : true,
        start : 20,
        end : 80
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            	axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		},
            data : function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push('2013-03-' + i);
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
        	name:'百分比(%)',
            type : 'value',
            	axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}
        }
        
    ],
    series : [
        {
            name:'质量',
            type:'line',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 30));
                }
                return list;
            }()
        },
        {
            name:'安全',
            type:'line',
//            itemStyle:{  
//              normal:{    
//                   lineStyle:{    
//                       color:'#f5b031'    
//                   } 
//                  }
//               }  ,
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 10));
                }
                return list;
            }()
        }
    ],
    color:['#f5b031','#87cefa','rgb(97,160,168)','rgb(212,130,101)','rgb(145,199,174)','rgb(116,159,131)','rgb(202,134,34)','rgb(189,162,154)','rgb(110,112,116)','rgb(84,101,112)','rgb(143,143,143)']
};
                    

resizeWorldMapContainer();
var myChart3 = echarts.init(worldMapContainer3);
myChart3.setOption(option3);
 charts.push(myChart3);
//饼
var option4 = {
	//backgroundColor: '#2c343c',
	title: {
		text: '安全质量问题类别',
		x: 'left',

		textStyle: {
			color: '#ccc'
		}
	},

	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},

	visualMap: {
		show: false,
		min: 80,
		max: 600,
		inRange: {
			colorLightness: [0, 1]
		}
	},

	series: [{

		type: 'pie',
		radius: '55%',
		center: ['50%', '50%'],
		data: [{
			value: 335,
			name: '电气问题'
		}, {
			value: 310,
			name: '土建问题'
		}, {
			value: 274,
			name: '工艺问题'
		}, {
			value: 235,
			name: '安全资料'
		}, {
			value: 400,
			name: '通信问题'
		}].sort(function(a, b) {
			return a.value - b.value;
		}),
		roseType: 'radius',
		label: {
			normal: {
				textStyle: {
					color: 'rgba(255, 255, 255, 0.3)'
				}
			}
		},
		labelLine: {
			normal: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)'
				},
				smooth: 0.2,
				length: 10,
				length2: 20
			}
		},
		itemStyle: {
			normal: {
				color: '#c23531',
				shadowBlur: 200,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		},

		animationType: 'scale',
		animationEasing: 'elasticOut',
		animationDelay: function(idx) {
			return Math.random() * 200;
		}
	}]
};
resizeWorldMapContainer();
var myChart4 = echarts.init(worldMapContainer4);
myChart4.setOption(option4);
 charts.push(myChart4);
//住

var option5 = {
	//backgroundColor: '#2c343c',
	textStyle: {
		color: '#ccc'
	},
	title: {
		text: '各部门对应问题数目',
		textStyle: {
			color: '#ccc'
		}

	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['质量问题', '安全问题'],
		textStyle: {
			color: '#ccc'
		},
		x: 'right'
	},
	//  toolbox: {
	//      show : true,
	//      feature : {
	//          dataView : {show: true, readOnly: false},
	//          magicType : {show: true, type: ['line', 'bar']},
	//          restore : {show: true},
	//          saveAsImage : {show: true}
	//      }
	//  },
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['余姚市','慈溪市','奉化市', '宁海县', '象山县', '鄞州区', '海曙区', '江东区', '江北区', '镇海区', '北仑区', '高新区'],
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		},
			axisLabel: {
				interval: 0,
				rotate: 40
			}
	}],
	yAxis: [{
		type: 'value',
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}
	}],
	series: [{

		name: '质量问题',
		type: 'bar',
		data: [56, 49, 77.0, 23.2, 25.6, 76.7, 70, 65, 32.6, 60, 65, 66],
		markPoint: {
			data: [{
				type: 'max',
				name: '最大值'
			}, {
				type: 'min',
				name: '最小值'
			}]
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}]
		},

		      itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#508DFF'
                    }, {
                        offset: 1,
                        color: '#26C5FE'
                    }])

                }
            }

	}, {
		name: '安全问题',
		type: 'bar',
		data: [45, 59, 66, 39, 28, 70, 84, 38, 48, 30, 68, 45],
		markPoint: {
			data: [{
				name: '年最高',
				value: 84,
				xAxis: 6,
				yAxis: 84
			}, {
				name: '年最低',
				value: 30,
				xAxis: 11,
				yAxis: 30
			}]
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}]
		},
		      itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#836FFF'
                    }, {
                        offset: 1,
                        color: '#7D26CD'
                    }])

                }
            }

	}]
};

var option_jj = {
	//backgroundColor: '#2c343c',
	textStyle: {
		color: '#ccc'
	},
	title: {
		text: '各部门对应问题数目',
		textStyle: {
			color: '#ccc'
		}

	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['质量问题', '安全问题'],
		textStyle: {
			color: '#ccc'
		},
		x: 'right'
	},
	//  toolbox: {
	//      show : true,
	//      feature : {
	//          dataView : {show: true, readOnly: false},
	//          magicType : {show: true, type: ['line', 'bar']},
	//          restore : {show: true},
	//          saveAsImage : {show: true}
	//      }
	//  },
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['兴宁区','西乡塘区','邕宁区','青秀区','江南区','良庆区','五象新区','市政片','经开区','高新区','东盟开发区'],
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		},
			axisLabel: {
				interval: 0,
				rotate: 40
			}
	}],
	yAxis: [{
		type: 'value',
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}
	}],
	series: [{

		name: '质量问题',
		type: 'bar',
		data: [56, 49, 77.0, 23.2, 25.6, 76.7, 70, 65, 32.6,25,50],
		markPoint: {
			data: [{
				type: 'max',
				name: '最大值'
			}, {
				type: 'min',
				name: '最小值'
			}]
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}]
		},

		      itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#508DFF'
                    }, {
                        offset: 1,
                        color: '#26C5FE'
                    }])

                }
            }

	}, {
		name: '安全问题',
		type: 'bar',
		data: [45, 59, 66, 39, 28, 70, 84, 38, 48,49,68],
		markPoint: {
			data: [{
				name: '年最高',
				value: 84,
				xAxis: 6,
				yAxis: 84
			}, {
				name: '年最低',
				value: 30,
				xAxis: 11,
				yAxis: 30
			}]
		},
		markLine: {
			data: [{
				type: 'average',
				name: '平均值'
			}]
		},
		      itemStyle:{
                normal:{
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                        offset: 0,
                        color: '#836FFF'
                    }, {
                        offset: 1,
                        color: '#7D26CD'
                    }])

                }
            }

	}]
};

resizeWorldMapContainer();
var myChart5 = echarts.init(worldMapContainer5);
myChart5.setOption(option_jj);
charts.push(option_jj);
//多圆环
var labelTop = {
	normal: {
		label: {
			show: true,
			position: 'center',
			formatter: '{b}',
			textStyle: {
				baseline: 'bottom'
			}
		},
		labelLine: {
			show: false
		}
	}
};
var labelFromatter = {
	normal: {
		label: {
			formatter: function(params) {
				return 100 - params.value + '%'
			},
			textStyle: {
				baseline: 'top'
			}
		}
	},
}
var labelBottom = {
	normal: {
		color: '#ccc',
		label: {
			show: true,
			position: 'center'
		},
		labelLine: {
			show: false
		}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
var radius = [44, 54];
var option6 = {
	//backgroundColor: '#2c343c',
	textStyle: {
		color: '#ccc'
	},
	//  legend: {
	//      x : 'center',
	//      y : 'center',
	//      data:[
	//          'GoogleMaps','Facebook','Youtube','Google+','Weixin',
	//          'Twitter'
	//      ]
	//  },
	title: {
		text: '施工项目进度',
		textStyle: {
			color: '#ccc'
		},
		x: 'left'
	},
	//  toolbox: {
	//      show : true,
	//      feature : {
	//          dataView : {show: true, readOnly: false},
	//          magicType : {
	//              show: true, 
	//              type: ['pie', 'funnel'],
	//              option: {
	//                  funnel: {
	//                      width: '20%',
	//                      height: '30%',
	//                      itemStyle : {
	//                          normal : {
	//                              label : {
	//                                  formatter : function (params){
	//                                      return 'other\n' + params.value + '%\n'
	//                                  },
	//                                  textStyle: {
	//                                      baseline : 'middle'
	//                                  }
	//                              }
	//                          },
	//                      } 
	//                  }
	//              }
	//          },
	//          restore : {show: true},
	//          saveAsImage : {show: true}
	//      }
	//  },
	series: [{
	
		type: 'pie',
		center: ['20%', '30%'],
		radius: radius,
		x: '10%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 46,
			itemStyle: labelBottom
		}, {
			name: '南湖公园海绵化工程',
			value: 54,
			itemStyle: labelTop
		}]
	}, {
		type: 'pie',
		center: ['52%', '30%'],
		radius: radius,
		x: '80%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 56,
			itemStyle: labelBottom
		}, {
			name: '锦绣上城',
			value: 44,
			itemStyle: labelTop
		}]
	}, {
		type: 'pie',
		center: ['84%', '30%'],
		radius: radius,
		x: '40%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 65,
			itemStyle: labelBottom
		}, {
			name: '东方城市花园',
			value: 35,
			itemStyle: labelTop
		}]
	}, {
		type: 'pie',
		center: ['84%', '70%'],
		radius: radius,
		x: '60%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 70,
			itemStyle: labelBottom
		}, {
			name: '玉象路二期',
			value: 30,
			itemStyle: labelTop
		}]
	}, {
		type: 'pie',
		center: ['52%', '70%'],
		radius: radius,
		x: '80%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 73,
			itemStyle: labelBottom
		}, {
			name: '轨道交通3号线02标',
			value: 27,
			itemStyle: labelTop
		}]
	}, {
		type: 'pie',
		center: ['20%', '70%'],
		radius: radius,
		y: '55%', // for funnel
		x: '0%', // for funnel
		itemStyle: labelFromatter,
		data: [{
			name: 'other',
			value: 78,
			itemStyle: labelBottom
		}, {
			name: '特殊医技楼工程',
			value: 22,
			itemStyle: labelTop
		}]
	}]
};
resizeWorldMapContainer();
var myChart6 = echarts.init(worldMapContainer6);
myChart6.setOption(option6);
 charts.push(myChart6);
//
var base = +new Date(2013, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data =[];

for(var i = 1; i < 1000; i++) {
	var now = new Date(base += oneDay);
	date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//	data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
     data.push(Math.floor(Math.random()*(900-300+1)+300));
}

var option2 = {
	//backgroundColor: '#2c343c',
	textStyle: {
		color: '#ccc'
	},
	tooltip: {
		trigger: 'axis',
		position: function(pt) {
			return [pt[0], '10%'];
		}
	},
	title: {
		x: 'left',
		text: '投资完成曲线图',
		textStyle: {
			color: '#ccc'
		}
	},
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			restore: {},
			saveAsImage: {}
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: date,
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		}

	},
	yAxis: {
		name : '亿元（￥）',
		type: 'value',
		boundaryGap: [0, '100%'],
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
			
		}
	},
	dataZoom: [{
		type: 'inside',
		start: 0,
		end: 10
	}, {
		start: 0,
		end: 10,
		handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
		handleSize: '80%',
		handleStyle: {
			color: '#fff',
			shadowBlur: 3,
			shadowColor: 'rgba(0, 0, 0, 0.6)',
			shadowOffsetX: 2,
			shadowOffsetY: 2
		}
	}],
	series: [{
		name: '投资完成',
		type: 'line',
		smooth: true,
		symbol: 'none',
		sampling: 'average',
		itemStyle: {
			normal: {
				color: 'rgb(255, 70, 131)'
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgb(255, 158, 68)'
				}, {
					offset: 1,
					color: 'rgb(255, 70, 131)'
				}])
			}
		},
		data: data
	}]
};
resizeWorldMapContainer();
var myChart2 = echarts.init(worldMapContainer2);
myChart2.setOption(option2);
 charts.push(myChart2);
 window.onresize = function(){
 	 resizeWorldMapContainer();
        for(var i = 0; i < charts.length; i++){
            charts[i].resize();
          
        }
         
    };