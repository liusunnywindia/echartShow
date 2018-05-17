var charts=[];
var obj;
//var option1 = {
//
////      title: {
////          text: '2016年各城区竣工工程分布',
////
////          x: 'center'
////      },
//      tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b} :{c} ({d}%)"
//      },
//
//      toolbox: {
//          show: false,
//          feature: {
//              mark: {
//                  show: true
//              },
//              dataView: {
//                  show: true,
//                  readOnly: false
//              },
//              magicType: {
//                  show: true,
//                  type: ['pie', 'funnel']
//              },
//              option: {
//                  funnel: {
//                      x: '30%',
//                      y: '60%',
//                      width: '50%',
//                      funnelAlign: 'left',
//                      max: 1548
//                  }
//
//              },
//              restore: {
//                  show: true
//              },
//              saveAsImage: {
//                  show: true
//              }
//          }
//      },
//      calculable: true,
//      series: [{
//              name: '',
//              type: 'pie',
//              radius: '60%',
//              center: ['50%', '100'],
//              label:{
//			     	normal:{
//			     
//			     	textStyle:{
//			     		
//			     		fontWeight:'bolder',
//			     		fontSize:15
//			     	}
//			     	}
//			     },
//			     	color:['rgb(216,122,128)','rgb(255,185,128)','rgb(90,177,239)','rgb(182,162,222)','rgb(46,199,201)','rgb(141,152,179)','rgb(229,207,13)','rgb(151,181,82)','rgb(220,105,170)','#b5c334','#fe8463','#9bca63','#f3a43b','#60c0dd','#26c0c0','rgb(143,143,143)'],
//			     data:obj
//			   
//
//              
//	
//          }
//
//      ]
//  };
//  //获取竣工的工程个数
//  $(function() {
//      //console.log(arr)
//      var year="2016";
//      $.ajax({
//          type: "POST",
//          url: "http://npubmap.com:8205/NNservice/DataNanNing.asmx/StaticsFinishedParentProj",
//          //async: true,
//          dataType: "text",
//          data:"year="+year,
//          //contentType:"application/json",
//          success: function(datafinish) {
//        	if(datafinish){
//        		 obj= eval(datafinish);//console.log(obj);
//        		option1.series['0'].data=obj;
//        		//console.log("竣工工程数"+option1.series[0].data);
//			          	resizeWorldMapContainer();
//			var myChart1 = echarts.init(worldMapContainer1);
//			myChart1.setOption(option1);
//			 charts.push(myChart1);
//       	}
//              
//          }
//      });
//  })
//var worldMapContainer1 = document.getElementById("echartsDiv1");
var worldMapContainer2 = document.getElementById("echartsDiv2");
//var worldMapContainer3 = document.getElementById("echartsDiv3");
var worldMapContainer4 = document.getElementById("echartsDiv4");
var worldMapContainer5 = document.getElementById("echartsDiv5");
//var worldMapContainer6 = document.getElementById("echartsDiv6");
var worldMapContainer7 = document.getElementById("echartsDiv7");


//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {

   // worldMapContainer1.style.height = ((window.innerHeight-40)/2-110)+'px';
      worldMapContainer2.style.height = ((window.innerHeight-40)/2-110)+'px';
       // worldMapContainer3.style.height = (window.innerHeight/3-30)+'px';
          worldMapContainer4.style.height = (window.innerHeight-40)+'px';
             worldMapContainer7.style.height = ((window.innerHeight-40)/2+110)+'px';
             // worldMapContainer6.style.height = (window.innerHeight/3-50)+'px';
//       if(window.innerHeight>=768&&window.innerHeight<900){worldMapContainer5.style.height = (window.innerHeight/3+260)+'px';}
//       if(window.innerHeight>=900&&window.innerHeight<1080){ worldMapContainer5.style.height = (window.innerHeight/3+300)+'px';}
//       if(window.innerHeight>=1080){  worldMapContainer5.style.height = (window.innerHeight/3+310)+'px';}
 worldMapContainer5.style.height = (window.innerHeight-40)+'px';
};
//设置容器高宽



//var option3 = {
////		title: {
////		text: '工程质量安全指数',
////		textStyle: {
////			color: '#ccc'
////		}
////	},
//
//  tooltip : {
//      trigger: 'axis',
//      textStyle: {
//			color: '#fff'
//		}
//  },
//  legend: {
//      data:['质量','安全'],
//      textStyle: {
//			color: '#fff'
//		},
//		 x: 'right', 
//		
//  },
////  toolbox: {
////      show : true,
////      feature : {
////          mark : {show: true},
////          dataZoom : {show: true},
////          dataView : {show: true},
////          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
////          restore : {show: true},
////          saveAsImage : {show: true}
////      }
////  },
//textStyle: {
//			color: '#fff'
//		},
//  calculable : true,
//  dataZoom : {
//      show : true,
//      realtime : true,
//      start : 20,
//      end : 80
//  },
//  xAxis : [
//      {
//          type : 'category',
//          boundaryGap : false,
//          	axisLine: {
//			lineStyle: {
//				color: '#fff'
//			}
//		},
//          data : function (){
//              var list = [];
//              for (var i = 1; i <= 30; i++) {
//                  list.push('2013-03-' + i);
//              }
//              return list;
//          }()
//      }
//  ],
//  yAxis : [
//      {
//      	name:'百分比(%)',
//          type : 'value',
//          	axisLine: {
//			lineStyle: {
//				color: '#fff'
//			}
//		}
//      }
//      
//  ],
//  series : [
//      {
//          name:'质量',
//          type:'line',
//          data:function (){
//              var list = [];
//              for (var i = 1; i <= 30; i++) {
//                  list.push(Math.round(Math.random()* 30));
//              }
//              return list;
//          }()
//      },
//      {
//          name:'安全',
//          type:'line',
////            itemStyle:{  
////              normal:{    
////                   lineStyle:{    
////                       color:'#f5b031'    
////                   } 
////                  }
////               }  ,
//          data:function (){
//              var list = [];
//              for (var i = 1; i <= 30; i++) {
//                  list.push(Math.round(Math.random()* 10));
//              }
//              return list;
//          }()
//      }
//  ],
//  color:['rgb(225,114,35)','rgb(225,204,31)','rgb(145,199,174)','rgb(116,159,131)','rgb(202,134,34)','rgb(189,162,154)','rgb(110,112,116)','rgb(84,101,112)','rgb(143,143,143)']
//};
//                  
//
//resizeWorldMapContainer();
//var myChart3 = echarts.init(worldMapContainer3);
//myChart3.setOption(option3);
// charts.push(myChart3);
//
var dataBJ = [
    [1,55,9,56,0.46,18,6,"良"],
    [2,25,11,21,0.65,34,9,"优"],
    [3,56,7,63,0.3,14,5,"良"],
    [4,33,7,29,0.33,16,6,"优"],
    [5,42,24,44,0.76,40,16,"优"],
    [6,82,58,90,1.77,68,33,"良"],
    [7,74,49,77,1.46,48,27,"良"],
    [8,78,55,80,1.29,59,29,"良"],
    [9,267,216,280,4.8,108,64,"重度污染"],
    [10,185,127,216,2.52,61,27,"中度污染"],
    [11,39,19,38,0.57,31,15,"优"],
    [12,41,11,40,0.43,21,7,"优"],
    [13,64,38,74,1.04,46,22,"良"],
    [14,108,79,120,1.7,75,41,"轻度污染"],
    [15,108,63,116,1.48,44,26,"轻度污染"],
    [16,33,6,29,0.34,13,5,"优"],
    [17,94,66,110,1.54,62,31,"良"],
    [18,186,142,192,3.88,93,79,"中度污染"],
    [19,57,31,54,0.96,32,14,"良"],
    [20,22,8,17,0.48,23,10,"优"],
    [21,39,15,36,0.61,29,13,"优"],
    [22,94,69,114,2.08,73,39,"良"],
    [23,99,73,110,2.43,76,48,"良"],
    [24,31,12,30,0.5,32,16,"优"],
    [25,42,27,43,1,53,22,"优"],
    [26,154,117,157,3.05,92,58,"中度污染"],
    [27,234,185,230,4.09,123,69,"重度污染"],
    [28,160,120,186,2.77,91,50,"中度污染"],
    [29,134,96,165,2.76,83,41,"轻度污染"],
    [30,52,24,60,1.03,50,21,"良"],
    [31,46,5,49,0.28,10,6,"优"]
];

var dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"],
    [16,73,68,97,0.905,51,34,"良"],
    [17,54,27,47,0.592,53,12,"良"],
    [18,51,61,97,0.811,65,19,"良"],
    [19,91,71,121,1.374,43,18,"良"],
    [20,73,102,182,2.787,44,19,"良"],
    [21,73,50,76,0.717,31,20,"良"],
    [22,84,94,140,2.238,68,18,"良"],
    [23,93,77,104,1.165,53,7,"良"],
    [24,99,130,227,3.97,55,15,"良"],
    [25,146,84,139,1.094,40,17,"轻度污染"],
    [26,113,108,137,1.481,48,15,"轻度污染"],
    [27,81,48,62,1.619,26,3,"良"],
    [28,56,48,68,1.336,37,9,"良"],
    [29,82,92,174,3.29,0,13,"良"],
    [30,106,116,188,3.628,101,16,"轻度污染"],
    [31,118,50,0,1.383,76,11,"轻度污染"]
];

var dataSH = [
    [1,91,45,125,0.82,34,23,"良"],
    [2,65,27,78,0.86,45,29,"良"],
    [3,83,60,84,1.09,73,27,"良"],
    [4,109,81,121,1.28,68,51,"轻度污染"],
    [5,106,77,114,1.07,55,51,"轻度污染"],
    [6,109,81,121,1.28,68,51,"轻度污染"],
    [7,106,77,114,1.07,55,51,"轻度污染"],
    [8,89,65,78,0.86,51,26,"良"],
    [9,53,33,47,0.64,50,17,"良"],
    [10,80,55,80,1.01,75,24,"良"],
    [11,117,81,124,1.03,45,24,"轻度污染"],
    [12,99,71,142,1.1,62,42,"良"],
    [13,95,69,130,1.28,74,50,"良"],
    [14,116,87,131,1.47,84,40,"轻度污染"],
    [15,108,80,121,1.3,85,37,"轻度污染"],
    [16,134,83,167,1.16,57,43,"轻度污染"],
    [17,79,43,107,1.05,59,37,"良"],
    [18,71,46,89,0.86,64,25,"良"],
    [19,97,71,113,1.17,88,31,"良"],
    [20,84,57,91,0.85,55,31,"良"],
    [21,87,63,101,0.9,56,41,"良"],
    [22,104,77,119,1.09,73,48,"轻度污染"],
    [23,87,62,100,1,72,28,"良"],
    [24,168,128,172,1.49,97,56,"中度污染"],
    [25,65,45,51,0.74,39,17,"良"],
    [26,39,24,38,0.61,47,17,"优"],
    [27,39,24,39,0.59,50,19,"优"],
    [28,93,68,96,1.05,79,29,"良"],
    [29,188,143,197,1.66,99,51,"中度污染"],
    [30,174,131,174,1.55,108,50,"中度污染"],
    [31,187,143,201,1.39,89,53,"中度污染"]
];

var schema = [
    {name: 'date', index: 0, text: '日期'},
    {name: 'AQIindex', index: 1, text: 'AQI'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: ' CO'},
    {name: 'NO2', index: 5, text: 'NO2'},
    {name: 'SO2', index: 6, text: 'SO2'},
    {name: '等级', index: 7, text: '等级'}
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

var option4 = {
  
    legend: {
        bottom: 30,
        data: ['东盟开发区', '经开区', '高新区','市政区','五象新区','青秀山名胜风景区','良庆区','江南区','青秀区','邕宁区','西乡塘区','兴宁区','其他'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj[0].seriesName + ' ' + value[0] + '日期：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
        type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
    ],
    visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
            // colorAlpha: [0, 1]
        }
    },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    series: [
        {
            name: '东盟开发区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataBJ
        },
        {
            name: '经开区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataSH
        },
        {
            name: '高新区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataGZ
        },
        {
            name: '市政区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        },
        {
            name: '五象新区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        }
        ,
        {
            name: '青秀山名胜风景区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        } ,
        {
            name: '良庆区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        },
        {
            name: '江南区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        } ,
        {
            name: '青秀区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        },
        {
            name: '邕宁区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        },
        {
            name: '西乡塘区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        },
        {
            name: '兴宁区',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        }
        ,
        {
            name: '其他',
            type: 'parallel',
            lineStyle: lineStyle,
            data: []
        }
    ]
};
resizeWorldMapContainer();
var myChart4 = echarts.init(worldMapContainer4);
myChart4.setOption(option4);
 charts.push(myChart4);
//住
var dataMap = {}; var obj1;

function dataMix(list) {
    var mixData = {};
    for (var i = 0, l = list.length; i < l; i++) {
        for (var key in list[i]) {
            if (list[i][key] instanceof Array) {
                mixData[key] = mixData[key] || [];
                for (var j = 0, k = list[i][key].length; j < k; j++) {
                    mixData[key][j] = mixData[key][j] 
                                      || {name : list[i][key][j].name, value : []};
                    mixData[key][j].value.push(list[i][key][j].value);
                }
            }
        }
    }
    return mixData;
}


	  
	 //获取在建的面积和造价
	var option;
    $(function() {
        var year="2019";
        $.ajax({
            type: "POST",
            url: "http://npubmap.com:8205/NNservice/DataNanNing.asmx/StaticsParentProjByYear",
            //async: true,
            dataType: "text",
            data:"Endyear="+year,
            //contentType:"application/json",
            success: function(datazm) {            	
                if(datazm){
                	obj1=eval(datazm);
                	var area=obj1[0].Area;
                	var price=obj1[0].price;
                	var qy=[];
                	for(var i=0;i<area['2012'].length;i++)
                	{
                		qy.push(area['2012'][i].name);
                		
                	}
                	option=sctb(area,price,qy);
                	console.log(area['2017']);
                }
//              if(myChart)
//                  myChart.setOption(option, true);
 resizeWorldMapContainer();
				var myChart5 = echarts.init(worldMapContainer5);
				myChart5.setOption(option);
				 charts.push(myChart5);
            }
        });
    })
    function sctb(area,price,qy)
    {
    	return option = {
	        timeline: {
	        	bottom:10,
	        	left:10,
	        	right:10,
	            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
			 	label: {
                	formatter : function(s) {
                    	return (new Date(s)).getFullYear();
                	},
                 	color:'#fff'
          		},
          	itemStyle:{normal:{color:'#ffffff'}},
          	lineStyle:{color:'#ffffff'},
          	controlStyle:{normal:{color:'#ffffff',borderColor:'#ffffff'}},
          	data:[{
		        value: '2012',
		        tooltip: {         
		            formatter: '{b} 2012'
		        		}
  				  },{
		        value: '2013',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2013'
		        }
  				  },{
		        value: '2014',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2014'
		        }
  				  }, {
		        value: '2015',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2015'
		        },
		        symbol: 'diamond',  // 此项的图形的特别设置。
		        symbolSize: 16      // 此项的图形大小的特别设置。
  				  },{
		        value: '2016',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2016'
		        }
  				  },{
		        value: '2017',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2017'
		        }
  				  },{
		        value: '2018',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2018'
		        }
  				  },{
		        value: '2019',
		        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
		            formatter: '{b} 2019'
		        }
  				  }],
	            autoPlay: true,
	            playInterval: 1000
	        },
	        options: [{
	                title: {
	                    'text': '2012年',
	                    x: 'left',
	                    textStyle: {
	                        color: '#ffffff',
	                        fontStype: '微软雅黑',
	                        fontWeight: 'bolder'
	
	                    }
	                },
	             
	                tooltip : {
                trigger : 'axis',
                formatter: function(params){
                    var res="";
                    var mm=params[0].value/10000;
                    mm=mm.toFixed(2);
                    var jz=params[1].value/10000;
                    jz=jz.toFixed(2);
                 var res='<div><p>'+params[0].name+'</p></div>' 
						
						res+='<p>造价：'+mm+'</p><br/><p>面积'+jz+'</p>'
							

                    return res;
                }
            },
	                legend: {
	                    x: 'right',
	                    'data': ['造价', '面积'],
	                    'selected': {
	                        '造价': true,
	                        '面积': true
	
	                    },
	                      textStyle: {
							color: '#ffffff'
									}
	                },
	                toolbox: {
	                    'show': true,
	                    orient: 'vertical',
	                    itemSize:'18',
	                   left:'88%',        
	                    y: 'center',
	                    'feature': {
	                        'mark': {
	                            'show': true,
	                             'iconStyle':{normal:{color:'rgb(206,91,157)',borderWidth:2}},
	                        },
	                        'dataView': {
	                            'show': true,
	                            'iconStyle':{normal:{borderColor:'rgb(109,183,255)',borderWidth:2}},
	                            'readOnly': false
	                        },
	                        'magicType': {
	                            'show': true,
	                            'iconStyle':{normal:{borderColor:'rgb(230,174,134)'},borderWidth:2},
	                            'type': ['line', 'bar', 'stack', 'tiled']
	                        },
	                        'restore': {
	                            'show': true,
	                              'iconStyle':{normal:{borderColor:'rgb(159,120,188)',borderWidth:2}}
	                        },
	                        'saveAsImage': {
	                            'show': true,
	                            'iconStyle':{normal:{borderColor:'rgb(83,202,83)',borderWidth:2}}
	                        }
	                    }
	                },
	                calculable: true,
	                grid: {
	                    'y': 70,
	                    'y2': 100
	                },
	                yAxis: [{
	                    'type': 'category',
								axisLine: {
								lineStyle: {
									color: '#fff'
								}
							},
					
	                    'axisLabel': {
	                    	//formatter:function(val){return val.split("").join("\n")},
	                    	formatter : function(params){
                                    var newParamsName = "";
                                    var paramsNameNumber = params.length;
                                    var provideNumber = 5;
                                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                    if (paramsNameNumber > provideNumber) {
                                        for (var p = 0; p < rowNumber; p++) {
                                            var tempStr = "";
                                            var start = p * provideNumber;
                                            var end = start + provideNumber;
                                            if (p == rowNumber - 1) {
                                                tempStr = params.substring(start, paramsNameNumber);
                                            } else {
                                                tempStr = params.substring(start, end) + "\n";
                                            }
                                            newParamsName += tempStr;
                                        }

                                    } else {
                                        newParamsName = params;
                                    }
                                    return newParamsName
                                },

	                        'interval':0
	                    },
	                    'data':qy
	
	                }],
	               	xAxis: [
	               		{
	                        'type': 'value',
	                        'name': '亿元',
	                		'axisLine': {
								lineStyle: {
									color: '#fff'
								}
							},
							'axisLabel': {
								formatter: function(params){
									return params/1000;
								}
								//interval: 0,
								//rotate: 36
							}
	                    },
	                    {
	                        'type': 'value',
	                        'name': '公顷',
	                        		axisLine: {
								lineStyle: {
									color: '#fff'
								}
							},
							axisLabel: {
								formatter: function(params){
									return params/10000;
								}
							}
	                    }
	                ],
	                	grid: {
					        x: 80,//x的值可以空值y轴与label标签的距离，效果如下图：
							x2: 80,
							y2: 90,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
					        
      							},
	                series: [{
	                        'name': '造价',
	                        'type': 'bar',
	                        'markLine': {
	                            symbol: ['arrow', 'none'],
	                            symbolSize: [4, 2],
//	                            itemStyle: {
//	                                normal: {
//	                                    lineStyle: {
//	                                        color: 'orange'
//	                                    },
//	                                    
//	                                    barBorderColor: 'orange',
//	                    
//	                                    label: {
//	                                        position: 'left',
//	                                        formatter: function(params) {
//	                                            return Math.round(params.value)/1000;
//	                                        },
//	                                        textStyle: {
//	                                            color: 'orange'
//	                                        }
//	                                    }
//	                                }
//	                            },
//	                            'data': [{
//	                                'type': 'average',
//	                                'name': '平均值'
//	                            }]
	                        },
	                        'data': area['2012'],
	                             itemStyle:{
				                normal:{
				                   
				
				                    color:'#f77409'
				
				                		}
            								}
	                    },
	                    {
	                        'name': '面积',
	                        'xAxisIndex': 1,
	                        'type': 'bar',
	                        'data': price['2012'],
	                           itemStyle:{
				                normal:{
				                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
				
				                    color:'#00c2ff'
				
				                }
            }
	                        
	                    }
	                ]
	            },
	            {
	                title: {
	                    'text': '2013年'
	                },
	       
	                series: [{
	                        'data': area['2013'],
	                        
	                    },
	                    {
	                        'data': price['2013']
	                    }       
							
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2014年'
	                },
	                series: [{
	                        'data': area['2014']
	                        
	                        
	                    },
	                    {
	                        'data': price['2014']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2015年'
	                },
	                series: [{
	                        'data': area['2015']
	                    },
	                    {
	                        'data': price['2015']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2016年'
	                },
	                series: [{
	                        'data': area['2016']
	                    },
	                    {
	                        'data': price['2016']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2017年'
	                },
	                series: [{
	                        'data': area['2017']
	                    },
	                    {
	                        'data': price['2017']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2018年'
	                },
	                series: [{
	                        'data': area['2018']
	                    },
	                    {
	                        'data': price['2018']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2019年'
	                },
	                series: [{
	                        'data': area['2019']
	                    },
	                    {
	                        'data': price['2019']
	                    }
	
	                ]
	            }
	        ]
	    };
    }


                    
  
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
		color: '#fff',
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
//var option6 = {
//	//backgroundColor: '#2c343c',
//	textStyle: {
//		color: '#ccc'
//	},
	//  legend: {
	//      x : 'center',
	//      y : 'center',
	//      data:[
	//          'GoogleMaps','Facebook','Youtube','Google+','Weixin',
	//          'Twitter'
	//      ]
	//  },
//	title: {
//		text: '施工项目进度',
//		textStyle: {
//			color: '#ccc'
//		},
//		x: 'left'
//	},
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
//	series: [{
//	
//		type: 'pie',
//		center: ['20%', '30%'],
//		radius: radius,
//		x: '10%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 46,
//			itemStyle: labelBottom
//		}, {
//			name: '滨江安置房二期',
//			value: 54,
//			itemStyle: labelTop
//		}]
//	}, {
//		type: 'pie',
//		center: ['52%', '30%'],
//		radius: radius,
//		x: '80%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 56,
//			itemStyle: labelBottom
//		}, {
//			name: '仇毕安置房',
//			value: 44,
//			itemStyle: labelTop
//		}]
//	}, {
//		type: 'pie',
//		center: ['84%', '30%'],
//		radius: radius,
//		x: '40%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 65,
//			itemStyle: labelBottom
//		}, {
//			name: '东部新城高级中学',
//			value: 35,
//			itemStyle: labelTop
//		}]
//	}, {
//		type: 'pie',
//		center: ['84%', '70%'],
//		radius: radius,
//		x: '60%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 70,
//			itemStyle: labelBottom
//		}, {
//			name: '宁波报业传媒大厦',
//			value: 30,
//			itemStyle: labelTop
//		}]
//	}, {
//		type: 'pie',
//		center: ['52%', '70%'],
//		radius: radius,
//		x: '80%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 73,
//			itemStyle: labelBottom
//		}, {
//			name: '宁波新世界广场',
//			value: 27,
//			itemStyle: labelTop
//		}]
//	}, {
//		type: 'pie',
//		center: ['20%', '70%'],
//		radius: radius,
//		y: '40%', // for funnel
//		x: '0%', // for funnel
//		itemStyle: labelFromatter,
//		data: [{
//			name: 'other',
//			value: 78,
//			itemStyle: labelBottom
//		}, {
//			name: '新材料创新中心',
//			value: 22,
//			itemStyle: labelTop
//		}]
//	}]
//};
//resizeWorldMapContainer();
//var myChart6 = echarts.init(worldMapContainer6);
//myChart6.setOption(option6);
// charts.push(myChart6);
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

var option2 ={

//      title: {
//          text: '2016年各城区在建工程分布',
//
//          x: 'center'
//      },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} :{c} ({d}%)"
        },

        toolbox: {
            show: false,
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
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                resore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }

        },
        calculable: true,
        series: [{
                name: '',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                label:{
			     	normal:{
			     
			     	textStyle:{
			     		
			     		fontWeight:'bolder',
			     		fontSize:15
			     	}
			     	}
			     },
				 data:[],    
		color:['rgb(166,70,13)','#e87c25','rgb(250,190,58)','#f4e001','rgb(44,66,230)','rgb(39,173,226)','rgb(80,255,168)','rgb(0,157,66)','rgb(212,130,101)','rgb(145,199,174)','rgb(116,159,131)','rgb(202,134,34)','#9bca63','#abeb11','#26c0c0','rgb(189,162,154)','rgb(110,112,116)','rgb(84,101,112)','rgb(220,90,98)']
            }

        ]
    };
      $(function() {
        //console.log(arr)
        var datazj;
        var year="2016";
        var obj2;
        $.ajax({
            type: "POST",
            url: "http://npubmap.com:8205/NNservice/DataNanNing.asmx/StaticsRunningParentProj",
            //async: true,
            dataType: "json",
            data:"year="+year,
            //contentType:"application/json",
            success: function(datazj) {
          	if(datazj){
          		 obj2= eval(datazj);
          		option2.series['0'].data=obj2;
          	
          		resizeWorldMapContainer();
				var myChart2 = echarts.init(worldMapContainer2);
				myChart2.setOption(option2);
				 charts.push(myChart2);
         	}
                
            }
        });
    })
   //工地
   /**
 * 注册南宁市地图
 *
 */
function registNanquMap(selector) {

     var geoCoordMap = {
     	 '马山县':[22.4081700000,108.8603000000],
        '良庆区':[22.7261900000,107.58200000],
        '宾阳县':[23.2176800000,108.403000000],
        '西乡塘区':[22.3000,108.180000],
       '武鸣县':[22.6577700000,108.5753300000],
      '青秀区':[23.06,108.00],
     '上林县':[22.990000,108.950600000],
      '隆安县':[21.9888,108.403000],
      '江南区':[22.5000,107.9733100000],
      '横县':[23.78,108.00],
      '邕宁区':[22.88,107.80],
      '兴宁区':[22.9742900000,108.280],
    }
    var data = [
        {name: '宾阳县', value: 352},
        {name: '西乡塘区', value: 39},
        {name: '武鸣县', value: 152},
        {name: '青秀区', value: 299},
        {name: '上林县', value: 89},
        {name: '隆安县', value: 52},
        {name: '马山县', value: 400},
        {name: '良庆区', value: 199},
        {name: '江南区', value: 99},
        {name: '横县', value: 39},
        {name: '邕宁区', value: 480},
        {name: '兴宁区', value: 9},
        
    ];
     var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;
    // GeoJSON格式地图
    var nanqu = {
        "type": "FeatureCollection",
        "features": [
        {"type":"Feature","properties":{"name":"宾阳县"},"geometry":{"type":"MultiPolygon",
        "coordinates":[[[[109.077345,23.323843],[109.081397734375,23.346841046875],[109.090042753906,23.3292775703126],[109.077345,23.323843]]],[[[109.077345,23.323843],[109.098992949219,23.2924880195313],[109.134622832031,23.300473859375],[109.163260527344,23.2897585273438],[109.177069121094,23.2697585273438],[109.193260527344,23.2779274726563],[109.201429472656,23.2997585273438],[109.207345,23.303843],[109.225220976563,23.2905471015626],[109.221412382813,23.2684279609375],[109.233277617188,23.2492580390625],[109.231385527344,23.2382741523438],[109.250933867188,23.2237331367188],[109.239022246094,23.154546125],[109.247345,23.133843],[109.223170195313,23.1180178046876],[109.190089140625,23.105259015625],[109.194862089844,23.0811037421875],[109.126566191406,23.0630837226563],[109.13341921875,23.0284108710938],[109.114920683594,22.9992726875001],[109.097554960938,22.9868263984376],[109.068651152344,22.9925368476563],[109.073333769531,22.9688430000001],[109.071356230469,22.958843],[109.075384550781,22.938462140625],[109.006744414063,22.9246999335938],[108.973216582031,22.9459865546876],[108.953170195313,22.9180178046876],[108.924290800781,22.9068801093751],[108.889815703125,22.9210451484376],[108.893389921875,22.9391310859376],[108.878912382813,22.974360578125],[108.847257109375,22.9542629218751],[108.817345,22.9738430000001],[108.812508574219,22.9796633125],[108.777406035156,22.9595583320313],[108.767345,22.993843],[108.777345,22.993843],[108.777345,23.003843],[108.77298953125,23.01948753125],[108.74170046875,23.03819846875],[108.73298953125,23.04948753125],[108.72170046875,23.0581984687501],[108.71298953125,23.0794875312501],[108.700169707031,23.1007375312501],[108.677345,23.0973659492188],[108.662345,23.0995827460938],[108.652310820313,23.0980983710938],[108.617345,23.103843],[108.617345,23.113843],[108.607345,23.113843],[108.601429472656,23.1179274726563],[108.534840117188,23.134282453125],[108.570584746094,23.1891750312501],[108.583260527344,23.1979274726563],[108.587345,23.2038430000001],[108.631783476563,23.2111428046875],[108.677345,23.2044094062501],[108.69170046875,23.23948753125],[108.70298953125,23.2481984687501],[108.71170046875,23.25948753125],[108.724486113281,23.2693556953125],[108.72095828125,23.2932350898438],[108.73877078125,23.3367580390625],[108.801163359375,23.3499245429688],[108.836058378906,23.3951296210938],[108.853160429688,23.4083303046875],[108.850667753906,23.4251930976563],[108.86170046875,23.43948753125],[108.867345,23.443843],[108.889635039063,23.4385939765625],[108.917769804688,23.4212575507813],[108.909886503906,23.3959474921875],[108.926907988281,23.3683229804688],[108.963150664063,23.3570339179688],[108.971873808594,23.3711940742188],[108.998033476563,23.3528273750001],[109.025240507813,23.3613014960938],[109.043531523438,23.3500295234375],[109.051158476563,23.3276564765626],[109.077345,23.323843]]]]}},{"type":"Feature","properties":{"name":"横县"},"geometry":{"type":"MultiPolygon","coordinates":[[[[109.443922148438,22.6260353828125],[109.447345,22.613843],[109.435152617188,22.6172658515626],[109.443922148438,22.6260353828125]]],[[[109.332899199219,22.9993971992188],[109.381790800781,22.9382888007813],[109.402899199219,22.9293971992188],[109.411790800781,22.9182888007813],[109.481790800781,22.8924123359376],[109.472899199219,22.8782888007813],[109.446632109375,22.86722190625],[109.4837121875,22.8209157539063],[109.517345,22.833843],[109.523072539063,22.8186013007813],[109.502806425781,22.8017678046875],[109.511883574219,22.7783815742188],[109.569136992188,22.7656838203126],[109.582882109375,22.7291091132813],[109.581795683594,22.718452375],[109.621422148438,22.6855373359375],[109.607345,22.6738430000001],[109.586256132813,22.6814089179688],[109.517345,22.643843],[109.485045195313,22.6507448554688],[109.455650664063,22.6347707343751],[109.371668730469,22.6397780585938],[109.324115019531,22.6139357734376],[109.282625761719,22.5559279609376],[109.320435820313,22.5221462226563],[109.292064238281,22.5091237617188],[109.262279082031,22.4883205390625],[109.239378691406,22.513950421875],[109.192030058594,22.5285720039063],[109.192642851563,22.538843],[109.191995878906,22.5497170234375],[109.167345,22.548247296875],[109.152181425781,22.5491506171875],[109.142625761719,22.5469948554688],[109.162940703125,22.528843],[109.150223417969,22.5174782539063],[109.122345,22.5191408515625],[109.097345,22.51765159375],[109.057345,22.5200344062501],[109.013104277344,22.5173976875001],[108.989891386719,22.5433766914063],[108.962625761719,22.5285622382813],[108.878365507813,22.5091237617188],[108.847345,22.543843],[108.853587675781,22.5692580390625],[108.833431425781,22.6002077460938],[108.821673613281,22.5975710273438],[108.810186796875,22.6142116523438],[108.813565703125,22.6292897773438],[108.799320097656,22.65116721875],[108.807345,22.683843],[108.839598417969,22.7532863593751],[108.82197390625,22.7684719062501],[108.810386992188,22.8194704414063],[108.813524199219,22.8585182929688],[108.80197390625,22.86847190625],[108.79271609375,22.8812404609375],[108.822882109375,22.9072292304688],[108.817345,22.9738430000001],[108.847257109375,22.9542629218751],[108.878912382813,22.974360578125],[108.893389921875,22.9391310859376],[108.889815703125,22.9210451484376],[108.924290800781,22.9068801093751],[108.953170195313,22.9180178046876],[108.973216582031,22.9459865546876],[109.006744414063,22.9246999335938],[109.075384550781,22.938462140625],[109.071356230469,22.958843],[109.073333769531,22.9688430000001],[109.068651152344,22.9925368476563],[109.097554960938,22.9868263984376],[109.114920683594,22.9992726875001],[109.13341921875,23.0284108710938],[109.126566191406,23.0630837226563],[109.194862089844,23.0811037421875],[109.190089140625,23.105259015625],[109.223170195313,23.1180178046876],[109.247345,23.133843],[109.251790800781,23.1082888007813],[109.329979277344,23.091372296875],[109.345340605469,23.065239484375],[109.322899199219,23.0282888007813],[109.309857207031,23.0178469062501],[109.332899199219,22.9993971992188]]]]}},{"type":"Feature","properties":{"name":"江南区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.117345,22.833843],[108.120767851563,22.8460353828125],[108.129537382813,22.8372658515626],[108.117345,22.833843]]],[[[108.117345,22.833843],[108.105413847656,22.801352765625],[108.146917753906,22.7655959296876],[108.195904570313,22.7695314765625],[108.1919153125,22.8191970039063],[108.244510527344,22.8350319648438],[108.294849882813,22.7993410468751],[108.307345,22.813843],[108.317345,22.813843],[108.320704375,22.797202375],[108.335289335938,22.7898244453125],[108.327345,22.773843],[108.311658964844,22.7693581367188],[108.312967558594,22.758843],[108.311102324219,22.7438430000001],[108.313841582031,22.7218166328126],[108.33334109375,22.6886428046875],[108.321790800781,22.6793971992188],[108.312899199219,22.6482888007813],[108.298472929688,22.6107619453125],[108.271102324219,22.5888430000001],[108.30107546875,22.56483909375],[108.281666289063,22.5492971015626],[108.284078398438,22.5299050117188],[108.260218535156,22.4972414375001],[108.219251738281,22.5023366523438],[108.159608183594,22.4239675117188],[108.175479765625,22.3826808906251],[108.157366972656,22.3518679023438],[108.141790800781,22.3393971992188],[108.137345,22.333843],[108.101429472656,22.3579274726563],[108.097345,22.373843],[108.107081328125,22.398608625],[108.078878203125,22.4203786445313],[108.084564238281,22.458852765625],[107.985279570313,22.4988405585938],[108.014554472656,22.5473732734376],[107.991541777344,22.5784133125],[107.996734648438,22.6135475898438],[108.097254667969,22.6306227851563],[108.085848417969,22.7078127265626],[108.045421171875,22.6554396796875],[108.001990996094,22.6876418281251],[107.99298953125,22.705044171875],[108.01298953125,22.73819846875],[108.02170046875,22.7694875312501],[108.027345,22.7838430000001],[108.033475371094,22.8088014960938],[108.030186796875,22.8234743476563],[108.041429472656,22.8397585273438],[108.047345,22.843843],[108.050767851563,22.8316506171875],[108.059537382813,22.8404201484376],[108.047345,22.843843],[108.061253691406,22.8673024726563],[108.071065703125,22.837563703125],[108.117345,22.833843]]]]}},{"type":"Feature","properties":{"name":"良庆区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.432147246094,22.498843],[108.432740507813,22.483843],[108.431868925781,22.46183128125],[108.444427519531,22.4091091132813],[108.472877226563,22.4398122382813],[108.512345,22.438247296875],[108.55093875,22.4397780585938],[108.562535429688,22.4290334296876],[108.567345,22.423843],[108.561429472656,22.4197585273438],[108.54896609375,22.4017092109376],[108.56408328125,22.3784963203125],[108.551429472656,22.3697585273438],[108.538492460938,22.3510231757813],[108.543499785156,22.328696515625],[108.528353300781,22.2798317695313],[108.501429472656,22.2697585273438],[108.493260527344,22.2479274726563],[108.459329863281,22.2397585273438],[108.412508574219,22.2702468085937],[108.363260527344,22.2479274726563],[108.321429472656,22.2397585273438],[108.293260527344,22.2179274726562],[108.277345,22.2138430000001],[108.265091582031,22.2315895820313],[108.238035917969,22.2502712226563],[108.221571074219,22.2942751289063],[108.173565703125,22.2835134101563],[108.128524199219,22.3128420234376],[108.137345,22.333843],[108.141790800781,22.3393971992188],[108.157366972656,22.3518679023438],[108.175479765625,22.3826808906251],[108.159608183594,22.4239675117188],[108.219251738281,22.5023366523438],[108.260218535156,22.4972414375001],[108.284078398438,22.5299050117188],[108.281666289063,22.5492971015626],[108.30107546875,22.56483909375],[108.271102324219,22.5888430000001],[108.298472929688,22.6107619453125],[108.312899199219,22.6482888007813],[108.321790800781,22.6793971992188],[108.33334109375,22.6886428046875],[108.313841582031,22.7218166328126],[108.311102324219,22.7438430000001],[108.312967558594,22.758843],[108.311658964844,22.7693581367188],[108.327345,22.773843],[108.378431425781,22.7822341132813],[108.40170046875,22.76819846875],[108.417345,22.763843],[108.432093535156,22.7501784492188],[108.432740507813,22.733843],[108.431949492188,22.713843],[108.432740507813,22.693843],[108.431771269531,22.6693752265625],[108.442601347656,22.6489064765625],[108.432142363281,22.6089846015625],[108.432918730469,22.5893752265625],[108.417857695313,22.5609133125001],[108.432904082031,22.5179787421875],[108.432147246094,22.498843]]]]}},{"type":"Feature","properties":{"name":"隆安县"},"geometry":{"type":"MultiPolygon","coordinates":[[[[107.857345,23.253843],[107.862906523438,23.266841046875],[107.880069609375,23.2578493476563],[107.857345,23.253843]]],[[[107.857345,23.253843],[107.845631132813,23.225952375],[107.882623320313,23.2176589179688],[107.917647734375,23.2323708320313],[107.945936308594,23.19140159375],[107.967345,23.1866017890625],[107.983053007813,23.190122296875],[108.003905058594,23.15358909375],[108.036976347656,23.161001203125],[108.053260527344,23.1497585273438],[108.061429472656,23.1179274726563],[108.077345,23.093843],[108.0219153125,23.0640944648438],[107.953699980469,23.0142653632813],[107.926776152344,22.9806447578125],[107.887913847656,22.9570412421876],[107.872545195313,22.93784690625],[107.833101835938,22.9610329414063],[107.81697390625,22.9408913398438],[107.757345,22.923843],[107.751339140625,22.927837140625],[107.743350859375,22.939848859375],[107.713968535156,22.9505104804688],[107.672345,22.940024640625],[107.631763945313,22.95024925],[107.623350859375,22.9423244453125],[107.663350859375,22.919848859375],[107.671339140625,22.907837140625],[107.683350859375,22.8998488593751],[107.695169707031,22.8820754218751],[107.687345,22.8638430000001],[107.661519804688,22.8680178046875],[107.63888796875,22.9070534492188],[107.568529082031,22.893149640625],[107.573480253906,22.8681008125],[107.541519804688,22.8596681953125],[107.504171171875,22.8443190742188],[107.497345,22.8538430000001],[107.49298953125,22.85948753125],[107.477515898438,22.9262575507813],[107.493160429688,22.9383303046875],[107.491605253906,22.948843],[107.493084746094,22.958843],[107.491605253906,22.9688430000001],[107.49312625,22.97913596875],[107.473482695313,23.029106671875],[107.444605742188,23.0513942695313],[107.422345,23.0481032539063],[107.407345,23.0503200507813],[107.392345,23.0481032539063],[107.381954375,23.0496388984375],[107.362735625,23.0380471015625],[107.337594023438,23.041762921875],[107.347345,23.0838430000001],[107.373260527344,23.0879274726563],[107.391429472656,23.0967018867188],[107.361429472656,23.1079274726563],[107.325574980469,23.1357155585937],[107.343260527344,23.1479274726563],[107.351492949219,23.2001540351562],[107.365338164063,23.1970510078125],[107.377345,23.2438430000001],[107.392899199219,23.2482888007813],[107.423551054688,23.26007346875],[107.473475371094,23.2492702460937],[107.460213652344,23.2267116523438],[107.493424101563,23.2308425117188],[107.546143828125,23.1998537421875],[107.561790800781,23.2193971992188],[107.572899199219,23.2282888007813],[107.5830871875,23.2982888007813],[107.632899199219,23.2893971992188],[107.65310671875,23.2775173164063],[107.702899199219,23.2882888007813],[107.711790800781,23.2993971992188],[107.739932890625,23.3112551093751],[107.755133085938,23.3473244453126],[107.772347441406,23.3494655585938],[107.817345,23.343843],[107.817345,23.333843],[107.827345,23.333843],[107.831500273438,23.3268361640625],[107.860189238281,23.3366872382813],[107.848909941406,23.303843],[107.855780058594,23.2838430000001],[107.847484160156,23.2596877265625],[107.857345,23.253843]],[[107.967298613281,23.0739846015626],[107.987345,23.063843],[107.990704375,23.0704836250001],[108.003985625,23.0772023750001],[108.010704375,23.0982131171876],[107.9841028125,23.1072023750001],[107.967298613281,23.0739846015626]]]]}},{"type":"Feature","properties":{"name":"马山县"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.387345,23.5438430000001],[108.407345,23.5438430000001],[108.407345,23.523843],[108.39406375,23.53056175],[108.387345,23.5438430000001]]],[[[108.387345,23.5438430000001],[108.324874296875,23.5388430000001],[108.27095828125,23.5071486640626],[108.247345,23.5100856757813],[108.201041289063,23.5043263984375],[108.202967558594,23.488843],[108.20150515625,23.4770827460938],[108.17373171875,23.4805373359375],[108.152899199219,23.4682888007813],[108.100343046875,23.4532643867188],[108.068873320313,23.471762921875],[108.075186796875,23.4209963203126],[108.056922636719,23.3993971992187],[108.02095828125,23.4205373359375],[108.00037234375,23.4179763007813],[108.00439578125,23.450337140625],[107.957486601563,23.4701052070313],[107.942061796875,23.4681862617188],[107.899835234375,23.4844167304688],[107.867345,23.443843],[107.853260527344,23.4379274726562],[107.810877714844,23.4297585273438],[107.762623320313,23.4500270820313],[107.742345,23.4454811835938],[107.730714140625,23.4765651679688],[107.733465605469,23.488843],[107.730103789063,23.5038430000001],[107.735240507813,23.5267604804688],[107.717345,23.553843],[107.72978640625,23.5699611640625],[107.742345,23.5681032539063],[107.776099882813,23.5730934882813],[107.828148222656,23.6116799140625],[107.868800078125,23.6056716132813],[107.903421660156,23.62655784375],[107.901522246094,23.6394142890626],[107.946541777344,23.6578395820313],[107.973695097656,23.6226613593751],[108.00170046875,23.66948753125],[108.01298953125,23.67819846875],[108.038194609375,23.71085471875],[108.02170046875,23.73819846875],[108.01298953125,23.7727614570313],[108.03298953125,23.7881984687501],[108.037345,23.793843],[108.053902617188,23.7999221015625],[108.084610625,23.79745628125],[108.134276152344,23.855102765625],[108.15271609375,23.83921409375],[108.169935332031,23.8192311835938],[108.187769804688,23.87847190625],[108.21271609375,23.84921409375],[108.230113554688,23.8102272773438],[108.252669707031,23.8084157539063],[108.262345,23.8196462226563],[108.272345,23.8080397773438],[108.28197390625,23.81921409375],[108.303951445313,23.838149640625],[108.287923613281,23.8519582343751],[108.30271609375,23.87847190625],[108.312572050781,23.9005568671875],[108.367855253906,23.9252248359376],[108.351807890625,23.9689186835938],[108.363470488281,23.9898244453125],[108.361500273438,24.0143532539063],[108.427178984375,24.03847190625],[108.44271609375,24.02921409375],[108.45209109375,24.0183351875001],[108.477345,24.023843],[108.489481230469,23.9943093085938],[108.434149199219,23.9729689765625],[108.431356230469,23.9588430000001],[108.433333769531,23.948843],[108.429503203125,23.9294631171875],[108.443170195313,23.9196681953125],[108.451519804688,23.9080178046876],[108.464898710938,23.8984279609375],[108.444820585938,23.8463674140626],[108.413170195313,23.8236843085938],[108.421676054688,23.8077223945313],[108.432965117188,23.8099538398438],[108.445694609375,23.7921926093751],[108.463170195313,23.7796681953126],[108.471519804688,23.7680178046875],[108.491297636719,23.753843],[108.467874785156,23.737055890625],[108.481519804688,23.7180178046876],[108.493170195313,23.7096681953126],[108.497345,23.6938430000001],[108.46298953125,23.6681984687501],[108.399139433594,23.6591213203126],[108.377672148438,23.6313088203125],[108.399407988281,23.6145314765625],[108.379483671875,23.563843],[108.387345,23.5438430000001]]]]}},{"type":"Feature","properties":{"name":"青秀区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.767345,22.993843],[108.777406035156,22.9595583320313],[108.812508574219,22.9796633125],[108.817345,22.9738430000001],[108.822882109375,22.9072292304688],[108.79271609375,22.8812404609375],[108.80197390625,22.86847190625],[108.813524199219,22.8585182929688],[108.810386992188,22.8194704414063],[108.82197390625,22.7684719062501],[108.839598417969,22.7532863593751],[108.807345,22.683843],[108.80170046875,22.68819846875],[108.79298953125,22.70948753125],[108.755435820313,22.7248561835938],[108.72298953125,22.6781984687501],[108.707088652344,22.6659255195313],[108.682345,22.6695827460938],[108.67205203125,22.66806175],[108.624935332031,22.6865846992188],[108.612938261719,22.7296706367188],[108.60173953125,22.7280153632813],[108.591363554688,22.777192609375],[108.593214140625,22.7897243476563],[108.573863554688,22.80819846875],[108.52263796875,22.7880617500001],[108.502147246094,22.7910890937501],[108.492345,22.7558864570313],[108.476441679688,22.8130007148438],[108.426988554688,22.7763356757812],[108.417345,22.763843],[108.40170046875,22.76819846875],[108.378431425781,22.7822341132813],[108.327345,22.773843],[108.335289335938,22.7898244453125],[108.320704375,22.797202375],[108.317345,22.813843],[108.317345,22.8238430000001],[108.342965117188,22.8315554023438],[108.385101347656,22.8614333320312],[108.422345,22.8584401679688],[108.432515898438,22.8592580390626],[108.485404082031,22.8477223945313],[108.5708215625,22.8671291328125],[108.602049589844,22.8892678046875],[108.619034453125,22.8879030585938],[108.64271609375,22.89847190625],[108.65197390625,22.9092140937501],[108.66271609375,22.9184719062501],[108.67197390625,22.92921409375],[108.691712675781,22.9462209296875],[108.710369902344,22.9880324531251],[108.767345,22.993843]]],[[[108.767345,22.993843],[108.767345,23.003843],[108.777345,23.003843],[108.777345,22.993843],[108.767345,22.993843]]]]}},{"type":"Feature","properties":{"name":"上林县"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.731429472656,23.7979274726563],[108.771969023438,23.7747878242187],[108.781429472656,23.7379274726563],[108.799967070313,23.7094606757813],[108.768409453125,23.6876735664063],[108.784798613281,23.6347927070313],[108.78115359375,23.6185329414062],[108.803260527344,23.5697585273438],[108.821429472656,23.4979274726563],[108.833260527344,23.4897585273438],[108.841429472656,23.4779274726563],[108.862296171875,23.463520734375],[108.867345,23.443843],[108.86170046875,23.43948753125],[108.850667753906,23.4251930976563],[108.853160429688,23.4083303046875],[108.836058378906,23.3951296210938],[108.801163359375,23.3499245429688],[108.73877078125,23.3367580390625],[108.72095828125,23.2932350898438],[108.724486113281,23.2693556953125],[108.71170046875,23.25948753125],[108.70298953125,23.2481984687501],[108.69170046875,23.23948753125],[108.677345,23.2044094062501],[108.631783476563,23.2111428046875],[108.587345,23.2038430000001],[108.576615019531,23.228843],[108.595257597656,23.2722805],[108.584271269531,23.3158864570313],[108.550875273438,23.3280055976563],[108.553719511719,23.3392971015625],[108.541339140625,23.3578371406251],[108.533350859375,23.379848859375],[108.483641386719,23.3892995429687],[108.493734160156,23.429360578125],[108.471339140625,23.457837140625],[108.462345,23.482622296875],[108.441827421875,23.4774538398438],[108.413326445313,23.499868390625],[108.407345,23.523843],[108.407345,23.5438430000001],[108.387345,23.5438430000001],[108.379483671875,23.563843],[108.399407988281,23.6145314765625],[108.377672148438,23.6313088203125],[108.399139433594,23.6591213203126],[108.46298953125,23.6681984687501],[108.497345,23.6938430000001],[108.504100371094,23.6592409492188],[108.542244902344,23.6989430976563],[108.552445097656,23.7087429023438],[108.580115996094,23.737544171875],[108.602244902344,23.7489430976562],[108.622445097656,23.7587429023438],[108.632244902344,23.7689430976563],[108.662445097656,23.7787429023438],[108.672440214844,23.7891481757813],[108.702113066406,23.7885427070313],[108.727345,23.803843],[108.731429472656,23.7979274726563]]]]}},{"type":"Feature","properties":{"name":"武鸣县"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.117345,23.0538430000001],[108.113922148438,23.0416506171875],[108.105152617188,23.0504201484375],[108.117345,23.0538430000001]]],[[[108.117345,23.0538430000001],[108.113985625,23.0604836250001],[108.079417753906,23.0778493476563],[108.085269804688,23.0898342109376],[108.077345,23.093843],[108.061429472656,23.1179274726563],[108.053260527344,23.1497585273438],[108.036976347656,23.161001203125],[108.003905058594,23.15358909375],[107.983053007813,23.190122296875],[107.967345,23.1866017890625],[107.945936308594,23.19140159375],[107.917647734375,23.2323708320313],[107.882623320313,23.2176589179688],[107.845631132813,23.225952375],[107.857345,23.253843],[107.880069609375,23.2578493476563],[107.862906523438,23.266841046875],[107.857345,23.253843],[107.847484160156,23.2596877265625],[107.855780058594,23.2838430000001],[107.848909941406,23.303843],[107.860189238281,23.3366872382813],[107.831500273438,23.3268361640625],[107.827345,23.333843],[107.827345,23.343843],[107.817345,23.343843],[107.831519804688,23.3696681953126],[107.863433867188,23.4083376289063],[107.861234160156,23.4194631171876],[107.881297636719,23.4338430000001],[107.867345,23.443843],[107.899835234375,23.4844167304688],[107.942061796875,23.4681862617188],[107.957486601563,23.4701052070313],[108.00439578125,23.450337140625],[108.00037234375,23.4179763007813],[108.02095828125,23.4205373359375],[108.056922636719,23.3993971992187],[108.075186796875,23.4209963203126],[108.068873320313,23.471762921875],[108.100343046875,23.4532643867188],[108.152899199219,23.4682888007813],[108.17373171875,23.4805373359375],[108.20150515625,23.4770827460938],[108.202967558594,23.488843],[108.201041289063,23.5043263984375],[108.247345,23.5100856757813],[108.27095828125,23.5071486640626],[108.324874296875,23.5388430000001],[108.387345,23.5438430000001],[108.39406375,23.53056175],[108.407345,23.523843],[108.413326445313,23.499868390625],[108.441827421875,23.4774538398438],[108.462345,23.482622296875],[108.471339140625,23.457837140625],[108.493734160156,23.429360578125],[108.483641386719,23.3892995429687],[108.533350859375,23.379848859375],[108.541339140625,23.3578371406251],[108.553719511719,23.3392971015625],[108.550875273438,23.3280055976563],[108.584271269531,23.3158864570313],[108.595257597656,23.2722805],[108.576615019531,23.228843],[108.587345,23.2038430000001],[108.583260527344,23.1979274726563],[108.570584746094,23.1891750312501],[108.534840117188,23.134282453125],[108.601429472656,23.1179274726563],[108.607345,23.113843],[108.607345,23.103843],[108.617345,23.103843],[108.61197390625,23.08921409375],[108.60271609375,23.04847190625],[108.579722929688,23.0382106757813],[108.555308867188,23.0098732734376],[108.486126738281,23.04847190625],[108.45197390625,23.01921409375],[108.435692167969,23.0003176093751],[108.407345,22.9980397773438],[108.388533964844,22.9995510078126],[108.347345,22.9738430000001],[108.332628203125,22.9794997382813],[108.304530058594,22.9760060859375],[108.252899199219,22.9382888007813],[108.201790800781,22.9293971992188],[108.192899199219,22.9182888007813],[108.162899199219,22.9178932929688],[108.175064726563,23.0157106757813],[108.161790800781,23.0382888007813],[108.152828398438,23.0595632148438],[108.117345,23.0538430000001]]]]}},{"type":"Feature","properties":{"name":"西乡塘区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.047345,22.843843],[108.059537382813,22.8404201484376],[108.050767851563,22.8316506171875],[108.047345,22.843843]]],[[[108.117345,23.0538430000001],[108.105152617188,23.0504201484375],[108.113922148438,23.0416506171875],[108.152828398438,23.0595632148438],[108.161790800781,23.0382888007813],[108.175064726563,23.0157106757813],[108.162899199219,22.9178932929688],[108.192899199219,22.9182888007813],[108.201790800781,22.9293971992188],[108.252899199219,22.9382888007813],[108.304530058594,22.9760060859375],[108.332628203125,22.9794997382813],[108.347345,22.9738430000001],[108.353363066406,22.9488649726563],[108.343170195313,22.8980178046875],[108.32748171875,22.8598439765625],[108.321519804688,22.8296681953126],[108.317345,22.8238430000001],[108.307345,22.8238430000001],[108.307345,22.813843],[108.294849882813,22.7993410468751],[108.244510527344,22.8350319648438],[108.1919153125,22.8191970039063],[108.195904570313,22.7695314765625],[108.146917753906,22.7655959296876],[108.105413847656,22.801352765625],[108.117345,22.833843],[108.129537382813,22.8372658515626],[108.120767851563,22.8460353828125],[108.117345,22.833843],[108.071065703125,22.837563703125],[108.061253691406,22.8673024726563],[108.047345,22.843843],[108.041429472656,22.8397585273438],[108.030186796875,22.8234743476563],[108.033475371094,22.8088014960938],[108.027345,22.7838430000001],[107.984605742188,22.7911037421875],[107.962782011719,22.8444264960938],[107.88170046875,22.85819846875],[107.86298953125,22.86948753125],[107.78968875,22.8819387031251],[107.757345,22.923843],[107.81697390625,22.9408913398438],[107.833101835938,22.9610329414063],[107.872545195313,22.93784690625],[107.887913847656,22.9570412421876],[107.926776152344,22.9806447578125],[107.953699980469,23.0142653632813],[108.0219153125,23.0640944648438],[108.077345,23.093843],[108.085269804688,23.0898342109376],[108.079417753906,23.0778493476563],[108.113985625,23.0604836250001],[108.117345,23.0538430000001]]],[[[107.990704375,23.0704836250001],[107.987345,23.063843],[107.967298613281,23.0739846015626],[107.9841028125,23.1072023750001],[108.010704375,23.0982131171876],[108.003985625,23.0772023750001],[107.990704375,23.0704836250001]]]]}},{"type":"Feature","properties":{"name":"兴宁区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.317345,22.8238430000001],[108.317345,22.813843],[108.307345,22.813843],[108.307345,22.8238430000001],[108.317345,22.8238430000001]]],[[[108.317345,22.8238430000001],[108.321519804688,22.8296681953126],[108.32748171875,22.8598439765625],[108.343170195313,22.8980178046875],[108.353363066406,22.9488649726563],[108.347345,22.9738430000001],[108.388533964844,22.9995510078126],[108.407345,22.9980397773438],[108.435692167969,23.0003176093751],[108.45197390625,23.01921409375],[108.486126738281,23.04847190625],[108.555308867188,23.0098732734376],[108.579722929688,23.0382106757813],[108.60271609375,23.04847190625],[108.61197390625,23.08921409375],[108.617345,23.103843],[108.652310820313,23.0980983710938],[108.662345,23.0995827460938],[108.677345,23.0973659492188],[108.700169707031,23.1007375312501],[108.71298953125,23.0794875312501],[108.72170046875,23.0581984687501],[108.73298953125,23.04948753125],[108.74170046875,23.03819846875],[108.77298953125,23.01948753125],[108.777345,23.003843],[108.767345,23.003843],[108.767345,22.993843],[108.710369902344,22.9880324531251],[108.691712675781,22.9462209296875],[108.67197390625,22.92921409375],[108.66271609375,22.9184719062501],[108.65197390625,22.9092140937501],[108.64271609375,22.89847190625],[108.619034453125,22.8879030585938],[108.602049589844,22.8892678046875],[108.5708215625,22.8671291328125],[108.485404082031,22.8477223945313],[108.432515898438,22.8592580390626],[108.422345,22.8584401679688],[108.385101347656,22.8614333320312],[108.342965117188,22.8315554023438],[108.317345,22.8238430000001]]],[[[108.617345,23.103843],[108.607345,23.103843],[108.607345,23.113843],[108.617345,23.113843],[108.617345,23.103843]]]]}},{"type":"Feature","properties":{"name":"邕宁区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[108.476441679688,22.8130007148438],[108.492345,22.7558864570313],[108.502147246094,22.7910890937501],[108.52263796875,22.7880617500001],[108.573863554688,22.80819846875],[108.593214140625,22.7897243476563],[108.591363554688,22.777192609375],[108.60173953125,22.7280153632813],[108.612938261719,22.7296706367188],[108.624935332031,22.6865846992188],[108.67205203125,22.66806175],[108.682345,22.6695827460938],[108.707088652344,22.6659255195313],[108.72298953125,22.6781984687501],[108.755435820313,22.7248561835938],[108.79298953125,22.70948753125],[108.80170046875,22.68819846875],[108.807345,22.683843],[108.799320097656,22.65116721875],[108.813565703125,22.6292897773438],[108.810186796875,22.6142116523438],[108.821673613281,22.5975710273438],[108.833431425781,22.6002077460938],[108.853587675781,22.5692580390625],[108.847345,22.543843],[108.831429472656,22.5397585273438],[108.802623320313,22.5276589179688],[108.783016386719,22.532055890625],[108.773260527344,22.5179274726563],[108.74490359375,22.4983498359375],[108.706800566406,22.4885720039063],[108.713648710938,22.4580275703125],[108.697345,22.453843],[108.685631132813,22.4679470039063],[108.670208769531,22.4323879218751],[108.6322278125,22.45972190625],[108.5948840625,22.4147658515625],[108.582586699219,22.4295705390625],[108.567345,22.423843],[108.562535429688,22.4290334296876],[108.55093875,22.4397780585938],[108.512345,22.438247296875],[108.472877226563,22.4398122382813],[108.444427519531,22.4091091132813],[108.431868925781,22.46183128125],[108.432740507813,22.483843],[108.432147246094,22.498843],[108.432904082031,22.5179787421875],[108.417857695313,22.5609133125001],[108.432918730469,22.5893752265625],[108.432142363281,22.6089846015625],[108.442601347656,22.6489064765625],[108.431771269531,22.6693752265625],[108.432740507813,22.693843],[108.431949492188,22.713843],[108.432740507813,22.733843],[108.432093535156,22.7501784492188],[108.417345,22.763843],[108.426988554688,22.7763356757812],[108.476441679688,22.8130007148438]]]]}}]
    };
    echarts.registerMap("南宁市", nanqu);

    // 初始化echarts
    var  myChart7= echarts.init(worldMapContainer7);
     var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
      
    }
    return res;
};

    // echarts配置
    var option7 = {
        color: ['#9ff575', '#6dabf8', '#e2c90b', '#e07b44'],
           tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['在建工地数目'],
            textStyle: {
                color: '#fff'
            }
        },
          visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                //color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // 配置地图
        geo: {
            map: '南宁市',
            roam: true,
            center: [22.8167300000,108.3669000000],    // 设置地图中心
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#a2bcd1',
                    borderWidth: 1,
                    shadowBlur: 30,
                    shadowColor: 'rgba(0,0,0, 0.8)',
                    shadowOffsetY: 20,
                    shadowOffsetX: 10
                },
                emphasis: {

                    borderColor: '#a2bcd1',
                    borderWidth: 1,
                    shadowBlur: 30,
                    shadowColor: 'rgba(0,0,0, 0.8)',
                    shadowOffsetY: 20,
                    shadowOffsetX: 10
                }
            },
            // 不响应鼠标操作
            silent: true
        },
       
        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
            // 设置背景地图
            {
                name: "南宁市",
                type: 'map',
                mapType: "南宁市",
                showLegendSymbol: false,
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        borderWidth:1,
                        areaColor: '#000',
                    },
                    emphasis: {
                        borderColor: '#389BB7',
                        areaColor: '#000',
                    }
                },
                tooltip: {
                    show: false
                },
                animation: false,
                zlevel: -1,
                // 不响应鼠标操作
                silent: true
            },
            {
            	name:"县市区",
            	type:"scatter",
            	coordinateSystem: 'geo',
	            data: convertData(data),
	            symbolSize: function (val) {
	                return val[2] / 10;
	            },
	            label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'right',
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#05C3F9'
	                }
	            }
            }
            ,
         {
            type: 'map',
            map: 'guangxi',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: function (val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a*min;
                b = maxSize4Pin - a*max;
                return a*val[2]+b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
            
        ]
    };

    // 调用配置
    myChart7.setOption(option7);
charts.push(myChart7);

}

registNanquMap()


 window.onresize = function(){
 	 resizeWorldMapContainer();
        for(var i = 0; i < charts.length; i++){
            charts[i].resize();
          
        }
         
    };