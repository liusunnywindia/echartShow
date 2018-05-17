
	  
	 //获取在建的面积和造价
	var option;
    $(function() {
        //console.log(arr)
     
        var year="2019";
        $.ajax({
            type: "POST",
            url: "http://192.168.1.113/NNservice/DataNanNing.asmx/StaticsParentProjByYear",
            //async: true,
            dataType: "text",
            data:"Endyear="+year,
            //contentType:"application/json",
            success: function(datazm) {
            	
                if(datazm){
                	obj1=eval(datazm);
                	console.log(obj1);
                	var area=obj1[0].Area;
                	var price=obj1[0].price;
                	var qy=[];
                	for(var i=0;i<area['2012'].length;i++)
                	{
                		qy.push(area['2012'][i].name);
                	}
                	option=sctb(area,price,qy);
                }
             console.log(obj1['0'].Area['2012']);
             //option.options.series
             myChart.setOption(option, true);
            }
        });
    })
    function sctb(area,price,qy)
    {
    	return option = {
	        timeline: {
	            data: [
	                '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01'
	            ],
	            label: {
	                formatter: function(s) {
	                    return s.slice(0, 4);
	                    console.log(s);
	                }
	            },
	            autoPlay: true,
	            playInterval: 1000
	        },
	        options: [{
	                title: {
	                    'text': '2012年各城区工程在建造价和在建面积',
	                    x: 'center',
	                    textStyle: {
	                        color: '#000',
	                        fontStype: '微软雅黑',
	                        fontWeight: 'bolder'
	
	                    }
	                },
	
	                tooltip: {
	                    'trigger': 'axis'
	                },
	                legend: {
	                    x: 'right',
	                    'data': ['造价', '面积'],
	                    'selected': {
	                        '造价': true,
	                        '面积': true
	
	                    }
	                },
	                toolbox: {
	                    'show': true,
	                    orient: 'vertical',
	                    x: 'right',
	                    y: 'center',
	                    'feature': {
	                        'mark': {
	                            'show': true
	                        },
	                        'dataView': {
	                            'show': true,
	                            'readOnly': false
	                        },
	                        'magicType': {
	                            'show': true,
	                            'type': ['line', 'bar', 'stack', 'tiled']
	                        },
	                        'restore': {
	                            'show': true
	                        },
	                        'saveAsImage': {
	                            'show': true
	                        }
	                    }
	                },
	                calculable: true,
	                grid: {
	                    'y': 70,
	                    'y2': 100
	                },
	                xAxis: [{
	                    'type': 'category',
	                    'axisLabel': {
	                         //名称太长，而换行
	                    	formatter : function(params){
                                    var newParamsName = "";
                                    var paramsNameNumber = params.length;
                                    var provideNumber = 4;
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
	                yAxis: [{
	                        'type': 'value',
	                        'name': '造价（万元）'
	
	                    },
	                    {
	                        'type': 'value',
	                        'name': '面积（平方米）'
	                    }
	                ],
	                series: [{
	                        'name': '造价',
	                        'type': 'bar',
	                        'markLine': {
	                            symbol: ['arrow', 'none'],
	                            symbolSize: [4, 2],
	                            itemStyle: {
	                                normal: {
	                                    lineStyle: {
	                                        color: 'orange'
	                                    },
	                                    barBorderColor: 'orange',
	                                    label: {
	                                        position: 'left',
	                                        formatter: function(params) {
	                                        	console.log("params"+params);
	                                            return Math.round(params.value);
	                                        },
	                                        textStyle: {
	                                            color: 'orange'
	                                        }
	                                    }
	                                }
	                            },
	                            'data': [{
	                                'type': 'average',
	                                'name': '平均值'
	                            }]
	                        },
	                        'data': area['2012']
	                    },
	                    {
	                        'name': '面积',
	                        'yAxisIndex': 1,
	                        'type': 'bar',
	                        'data': price['2012']
	                    }
	                ]
	            },
	            {
	                title: {
	                    'text': '2013年各城区工程在建造价和在建面积'
	                },
	                series: [{
	                        'data': area['2013']
	                    },
	                    {
	                        'data': price['2013']
	                    }
	
	                ]
	            },
	            {
	                title: {
	                    'text': '2014年各城区工程在建造价和在建面积'
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
	                    'text': '2015年各城区工程在建造价和在建面积'
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
	                    'text': '2016年各城区工程在建造价和在建面积'
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
	                    'text': '2017年各城区工程在建造价和在建面积'
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
	                    'text': '2018年各城区工程在建造价和在建面积'
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
	                    'text': '2019年各城区工程在建造价和在建面积'
	                },
	                series: [{
	                        'data': area['2019']
	                    },
	                    {
	                        'data': price['2019']
	                    }
	
	                ]
	            },
	           // console.log(dataMap.mianji['2019'])
	      
	        ]
	    };
    }
