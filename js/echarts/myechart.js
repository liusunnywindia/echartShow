var data;
var arr = [{
        value: 71,
        name: '经开区'
    },
    {
        value: 309,
        name: '兴宁区'
    },
    {
        value: 22,
        name: '高新区'
    },
	 {
        value: 871,
        name: '青秀区'
    },
    {
        value: 246,
        name: '江南区'
    },
    {
        value: 429,
        name: '五象新区'
    },
    {
        value: 251,
        name: '邕宁区'
    },
    {
        value: 162,
        name: '西乡塘区'
    },
    {
        value: 96,
        name: '良庆区'
    },
    {
        value: 373,
        name: '市政区'
    },
    {
        value: 69,
        name: '东盟开发区'
    }
    //,
    //      {value:34,name:'武鸣县'},
    //      {value:0,name:'隆安县'},
    //      {value:0,name:'马山县'},
    //      {value:0,name:'上林县'},
    //      {value:6,name:'宾阳县'},
    //      {value:32,name:'青秀山名胜风景区'},
    //      {value:9,name:'横县'}
    //      
];
$(function () {
    console.log(arr)
    $.ajax({
        type: "get",
        url: "http://192.168.1.113/NNService/DataNanNing.asmx/GetFinishedProjectInfo",
        async: true,
        dataType: "json",
        //          contentType:"application/json",
        success: function (data) {
            console.log(data);
        }
    });
})


var option1 = {

    title: {
        text: '2016年各城区竣工工程分布',

        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} :{c} ({d}%)"
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
                type: ['pie', 'funnel']
            },
            option: {
                funnel: {
                    x: '30%',
                    y: '60%',
                    width: '50%',
                    funnelAlign: 'left',
                    max: 1548
                }

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
    series: [{
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '180'],
			label:{
			     	normal:{
			     
			     	textStyle:{
			     		
			     		fontWeight:'bolder',
			     		fontSize:15
			     	}
			     	}
			     },
            data: [{
                    value: 71,
                    name: '经开区'
                },
                {
                    value: 309,
                    name: '兴宁区'
                },
                {
                    value: 22,
                    name: '高新区'
                },
				 {
                    value: 871,
                    name: '青秀区'
                },
                {
                    value: 246,
                    name: '江南区'
                },
                {
                    value: 429,
                    name: '五象新区'
                },
                {
                    value: 251,
                    name: '邕宁区'
                },
                {
                    value: 162,
                    name: '西乡塘区'
                },
                {
                    value: 96,
                    name: '良庆区'
                },
                {
                    value: 373,
                    name: '市政区'
                },
                {
                    value: 69,
                    name: '东盟开发区'
                }
                //,
                //      {value:34,name:'武鸣县'},
                //      {value:0,name:'隆安县'},
                //      {value:0,name:'马山县'},
                //      {value:0,name:'上林县'},
                //      {value:6,name:'宾阳县'},
                //      {value:32,name:'青秀山名胜风景区'},
                //      {value:9,name:'横县'}

            ]
        }

    ],
		color:['rgb(194,53,49)','rgb(47,69,84)','rgb(97,160,168)','rgb(212,130,101)','rgb(145,199,174)','rgb(116,159,131)','rgb(202,134,34)','rgb(189,162,154)','rgb(110,112,116)','rgb(84,101,112)','rgb(143,143,143)']
};

var option2 = {

    title: {
        text: '2016年各城区在建工程分布',

        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} :{c} ({d}%)"
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
            /*resore: {
                show: true
            },*/
            saveAsImage: {
                show: true
            }
        }

    },
    calculable: true,
    series: [{
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
			label:{
			     	normal:{
			     
			     	textStyle:{
			     		
			     		fontWeight:'bolder',
			     		fontSize:15
			     	}
			     	}
			     },
            data: [{
                    value: 387,
                    name: '经开区'
                },
                {
                    value: 956,
                    name: '兴宁区'
                },
                {
                    value: 207,
                    name: '高新区'
                },
                {
                    value: 648,
                    name: '江南区'
                },
                {
                    value: 1771,
                    name: '五象新区'
                },
                {
                    value: 352,
                    name: '邕宁区'
                },
                {
                    value: 541,
                    name: '西乡塘区'
                },
                {
                    value: 307,
                    name: '良庆区'
                },
                {
                    value: 1026,
                    name: '市政区'
                },
                {
                    value: 334,
                    name: '东盟开发区'
                },
                {
                    value: 1757,
                    name: '青秀区'
                } //,
                //{value:19,name:'青秀名胜风景区'},
                //{value:321,name:'武鸣县'},
                //{value:51,name:'隆安县'},
                //{value:23,name:'马山县'},
                //{value:113,name:'上林县'},
                //{value:147,name:'宾阳县'},
                //{value:152,name:'横县'}

            ]
        }

    ],
		color:['rgb(194,53,49)','rgb(47,69,84)','rgb(97,160,168)','rgb(212,130,101)','rgb(145,199,174)','rgb(116,159,131)','rgb(202,134,34)','rgb(189,162,154)','rgb(110,112,116)','rgb(84,101,112)','rgb(143,143,143)']
};

var myChart2 = echarts.init(document.getElementById("echartsDiv1"));
myChart2.setOption(option1);
var myChart1 = echarts.init(document.getElementById("echartsDiv2"));
myChart1.setOption(option2);

var option = {
    timeline: {
        data: [
            '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01'
        ],
        label: {
            formatter: function (s) {
                return s.slice(0, 4);
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
                    'interval': 0
                },
                'data': [
                    '兴宁区',
                    '江南区',
                    '高新区',
                    '五象新区',
                    '邕宁区',
                    '西乡塘区',
                    '良庆区',
                    '市政片',
                    '东盟开发区',
                    '青秀区',
                    '经开区'


                ]
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
                                    formatter: function (params) {
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
                    'data': dataMap.zaojia['2012']
                },
                {
                    'name': '面积',
                    'yAxisIndex': 1,
                    'type': 'bar',
                    'data': dataMap.mianji['2012']
                }
            ]
        },
        {
            title: {
                'text': '2013年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2013']
                },
                {
                    'data': dataMap.mianji['2013']
                }

            ]
        },
        {
            title: {
                'text': '2014年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2014']
                },
                {
                    'data': dataMap.mianji['2014']
                }

            ]
        },
        {
            title: {
                'text': '2015年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2015']
                },
                {
                    'data': dataMap.mianji['2015']
                }

            ]
        },
        {
            title: {
                'text': '2016年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2016']
                },
                {
                    'data': dataMap.mianji['2016']
                }

            ]
        },
        {
            title: {
                'text': '2017年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2017']
                },
                {
                    'data': dataMap.mianji['2017']
                }

            ]
        },
        {
            title: {
                'text': '2018年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2018']
                },
                {
                    'data': dataMap.mianji['2018']
                }

            ]
        },
        {
            title: {
                'text': '2019年各城区工程在建造价和在建面积'
            },
            series: [{
                    'data': dataMap.zaojia['2019']
                },
                {
                    'data': dataMap.mianji['2019']
                }

            ]
        }
    ]
};
