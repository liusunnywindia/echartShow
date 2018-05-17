/** index.js By Beginner Emain:zheng_jinfan@126.com HomePage:http://www.zhengjinfan.cn */

var navs = [{
    "title": "视角一",
    "icon": "&#xe652;",
    "href": "video.html?channel=135"
}, {
    "title": "视角二",
    "icon": "&#xe652;",
    "href": "video.html?channel=134"
}, {
    "title": "视角三",
    "icon": "&#xe652;",
    "href": "video.html?channel=137"
}];


layui.config({
    base: 'js/'
}).use(['element', 'layer', 'navbar'], function () {
    var element = layui.element(),
        $ = layui.jquery,
        layer = layui.layer,
        navbar = layui.navbar();
    //iframe自适应
    $(window).on('resize', function () {
        var $content = $('.admin-nav-card .layui-tab-content');
        $content.height($(this).height() -80);
        $content.find('iframe').each(function () {
            $(this).height($content.height());
        });
    }).resize();

    //设置navbar
    navbar.set({
        spreadOne: true,
        elem: '#admin-navbar-side',
        cached: true,
        data: navs
    });
    //渲染navbar
    navbar.render();

    $('.admin-side-toggle').on('click', function () {
        var sideWidth = $('#admin-side').width();
        console.log(sideWidth);
        if (sideWidth === 200) {
            $('#admin-body').animate({
                left: '0'
            }); //admin-footer
            $('#admin-footer').animate({
                left: '0'
            });
            $('#admin-side').animate({
                left: '-5px',
                width: '0'
            });
        } else {
            $('#admin-body').animate({
                left: '200px'
            });
            $('#admin-footer').animate({
                left: '200px'
            });
            $('#admin-side').animate({
                left: '0px',
                width: '205px'
            });
        }
    });

    $('.layui-nav-item').on('click',function(){
        var url = $(".layui-this").eq(0).children().data('url');
        $("#camIframe").attr("src",url);
    })
    
    $(function(){
        var choose = $(".layui-nav-item").eq(0);
        choose.addClass("layui-this");
        var url = choose.children().data('url');
        $("#camIframe").attr("src",url);
    })
});
