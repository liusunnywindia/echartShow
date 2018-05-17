var charts=[];
    var cq=[];
var obj;
var option1 = {

textStyle: {
		color: '#ccc'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['竣工工程数'],
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
		data: cq,
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		},
                axisLabel: {  
                                interval: 0,  
                                formatter:function(value,index)  
                                {  
                                    debugger  
                                    if (index % 2 != 0) {  
                                        return '\n\n' + value;  
                                    }  
                                    else {  
                                        return value;  
                                    }  
                                }  
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

		name: '竣工工程数',
		type: 'bar',
		data: [],
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
                        color: '#836FFF'
                    }, {
                        offset: 1,
                        color: '#7D26CD'
                    }])

                }
            }

	}]
};


//var worldMapContainer2 = document.getElementById("echartsDiv2");

var worldMapContainer4 = document.getElementById("echartsDiv4");
var worldMapContainer5 = document.getElementById("echartsDiv5");
var worldMapContainer7 = document.getElementById("echartsDiv7");

       


	

//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {

  
     // worldMapContainer2.style.height = ((window.innerHeight-40)/2-110)+'px';
          worldMapContainer4.style.height = ((window.innerHeight-66)*2/3-16)+'px';
          worldMapContainer7.style.height = ((window.innerHeight-66)/3)+'px';
          worldMapContainer5.style.height = (window.innerHeight-46)+'px'; 
          var worldMapCon = document.getElementById("boss");
          var worldMapCon1 = document.getElementById("boss1");
		worldMapCon.style.height = (window.innerHeight-63)+'px';
        worldMapCon1.style.height = (window.innerHeight-63)+'px';
        var v=document.getElementById("shi");
        v.style.height=(window.innerHeight-30)+'px';
       
       // worldMapCon.style.height = (window.innerHeight-60)+'px';
       // worldMapCon1.style.height = (window.innerHeight-60)+'px';
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
var uploadedDataURL="json/air.json";
var dataBJ = [];
 var air=[];
 var option4;

$.getJSON(uploadedDataURL, function(geoJson) {
   
var schema = [
  
    {name: 'AQIindex', index: 1, text: 'AQI'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: ' CO'},
    {name: 'NO2', index: 5, text: 'NO2'},
    {name: 'SO2', index: 6, text: 'SO2'},
    {name: 'O3', index: 7, text: 'O3'},
    {name: '等级', index: 8, text: '等级'}
];

var lineStyle = {
    normal: {
        width: 1,
          opacity: 1
      
    }
};

 option4 = {
   color:['#48cda6','#fd87ab','#11abff','#ffdf33','#968ade','#C1232B','#CD2990','#00EE00'],  //手动设置每个图例的颜色
    legend: {
      
        bottom: 15,
        data:[],
        itemGap: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
     toolbox: {
	                    'show': true,
	                    itemSize:'18',
                        top:'-6',
	                    'feature': {
	                      
	                        'dataView': {
	                            'show': true,
	                            'iconStyle':{normal:{borderColor:'rgb(109,183,255)',borderWidth:2}},
	                            'readOnly': false,
                                'optionToContent': function (opt) {
                                 let tdBodys = '';
                                let tdHeads = '<td  style="padding: 0 10px">地区</td><td style="padding: 0 10px">AQI</td><td style="padding: 0 10px">PM25</td><td style="padding: 0 10px">PM10</td><td style="padding: 0 10px">CO</td><td style="padding: 0 10px">NO2</td><td style="padding: 0 10px">SO2</td><td style="padding: 0 10px">O3</td><td style="padding: 0 10px">等级</td>'; //表头
                                   let table = '<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center;color: #0c0c0c;"><tbody><tr>'+tdHeads+'</tr>';                            
                                  for(let j=0;j<dataBJ.length;j++){
                                       let datass= dataBJ[j].data;                       
                                            for(let i=0;i<datass.length;i++){
                                                var zz=datass[i];
                                                tdBodys +='<tr></tr>';
                                                for(let z=0;z<zz.length;z++){
                                                tdBodys += '<td>'+zz[z]+'</td>';
                                                }
                                            }
                                  } 
                                table+=tdBodys;
                                table += '</tbody></table>';
                                return table;
                            }
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
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#ffffff',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            console.log(obj);
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid #ffffff; font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj[0].seriesName + ' ' + value[0] + '地区：'
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
      
     
        {dim: 1, name: schema[0].text},
        {dim: 2, name: schema[1].text},
        {dim: 3, name: schema[2].text},
        {dim: 4, name: schema[3].text},
        {dim: 5, name: schema[4].text},
        {dim: 6, name: schema[5].text},
        {dim: 7, name: schema[6].text},
        {dim: 8, name: schema[7].text,
        type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
    ],

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
    series: []
};
var object; 

 for(var i=0;i<geoJson.length;i++){
        var shu=[];
        var ari=[];
         
        if(geoJson[i].position_name!=null){
        air.push(geoJson[i].position_name);
        shu.push(geoJson[i].position_name, geoJson[i].aqi, geoJson[i].pm2_5,geoJson[i].pm10,geoJson[i].co,geoJson[i].no2,geoJson[i].so2,geoJson[i].o3,geoJson[i].quality);
        ari.push(shu);
        object={name:geoJson[i].position_name,type: 'parallel',lineStyle: lineStyle,data:ari};
        option4.legend.data=air;
        dataBJ.push(object);
        }
    }

    option4.series=dataBJ;
    resizeWorldMapContainer();
    var myChart4 = echarts.init(worldMapContainer4);
    myChart4.setOption(option4);
    charts.push(myChart4);
 });
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
                	//console.log(area['2017']);
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
 
   //工地
   /**
 * 注册南宁市地图
 *
 */

var uploadedDataURL="json/450100.json";
var option7="";
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
  var  myChart7= echarts.init(worldMapContainer7);
   var geoCoordMap = {
	     	'马山县':[108.20,23.776800000],
	       '良庆区':[108.30000,22.3000],
	       '宾阳县':[108.903000000,23.2176800000],
	       '西乡塘区':[107.980000,22.87],
	       '武鸣县':[108.20300000,23.3377700000],
	      '青秀区':[108.71,22.87],
	      '上林县':[108.56,23.660000],
	      '隆安县':[107.630000,23.21768],
    	'江南区':[108.103100000,22.5000],
	     '横县':[109.28,22.99],
	    '邕宁区':[108.71,22.50],
        '兴宁区':[108.440,22.9742900000],
    }

      var max = 100, min = 6; // todo 
    var maxSize4Pin = 52, minSize4Pin = 30;




  option7 = {

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
        visualMap: {
            show: false,
            min: 0,
            max: 110,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
               // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                 //color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#72bdff',
                    //borderWidth:1
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: '在建工地数目',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:[],
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
        },
         {
            type: 'map',
            map: 'jiangxi',
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
            data:[]
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
            data:[],
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data:[],
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
            		var convertData = function (obj2) {
				    var res = [];
				    for (var i = 0; i < obj2.length; i++) {
				        var geoCoord = geoCoordMap[obj2[i].name];
				        if (geoCoord) {
				            res.push({
				                name: obj2[i].name,
				                value: geoCoord.concat(obj2[i].value)
				            });
				        }
				    }
				    return res;
				};
          	   option7.series['0'].data=convertData(obj2);
          	   option7.series['1'].data=obj2;
          	   option7.series['2'].data=convertData(obj2);
          	   option7.series['3'].data=convertData(obj2.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5));
          		resizeWorldMapContainer();
				/* var myChart2 = echarts.init(worldMapContainer2);
				myChart2.setOption(option2);
				 charts.push(myChart2); */
				   var  myChart7= echarts.init(worldMapContainer7);
				  myChart7.setOption(option7);
    			charts.push(myChart7);
         	}
                
            }
        });
    })

});
//registNanquMap()


 window.onresize = function(){
 	 resizeWorldMapContainer();
        for(var i = 0; i < charts.length; i++){
            charts[i].resize();
          
        }
         
    };