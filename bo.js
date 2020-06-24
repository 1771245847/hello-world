// ==UserScript==
// @name         优爱VIP解析
// @description  腾讯视频、爱奇艺、优酷土豆、芒果TV等平台视频VIP免费看。代码精简、含有20个超稳定急速解析源、没有任何花哨内容、专门解析视频！
// @icon         https://i.loli.net/2020/02/18/qm2S9HCxnuZ6jB4.png
// @version      1.0
// @author       Tsing
// @run-at       document-body
// @include      https://v.qq.com/x/page/*.html*
// @include      https://v.qq.com/x/cover/*.html*
// @include      https://www.iqiyi.com/v_*.html*
// @include      https://v.youku.com/v_show/*
// @include      https://video.tudou.com/v/*
// @include      https://www.mgtv.com/b/*
// @grant        none
// @note         2020.02.20 V1.0 其实这个脚本不仅仅适用于腾讯视频、爱奇艺、优酷土豆这三个平台，但是为了保证稳定性，其他小平台就没有做适配了。
// @copyright    该脚本完全由本人原创，谢绝抄袭部分或全部代码！如发现有人抄袭，欢迎举报，谢谢。
// ==/UserScript==

(function() {
    'use strict';

    var source_arr = new Array(
        "https://jiexi.380k.com/?url=", // default-most-f
        "https://okjx.cc/?url=", // ok-f
        "https://timerd.me/static/cv.html?zwx=", // ok
        "http://www.600m.net/api/?v=", // ok
        "https://www.8090g.cn/?url=", // ok-need-flash
        "http://at520.cn/jx/?url=", // ok-f-sigu
        "http://jx.618g.com/?url=", // ok-f-by-380k
        "https://jx.618g.com/?url=", // ok-f
        "https://v.canzhisong.cn/v.php?url=", // ok-f-by-2Ajx
        "https://www.2ajx.com/vip.php?url=", // ok-f-by-2Ajx
        "http://17kyun.com/api.php?url=", // ok
        "https://jiexi8.com/vip/index.php?url=", // ok
        "https://yi29f.cn/vip/vip.php?url=", // ok-f
        "https://www.ckmov.xyz/jx/api/?url=", // ok-f
        "https://jx.98a.ink/?url=", // ok
        "https://api.rdhk.net/?url=", // ok-f
        "https://api.78sy.cn/?url=", // ok-f-first
        "https://www.1717yun.com/yunjx/?url=", // ok-need-flash
        "http://vip.jlsprh.com/?url=", // ok
        "https://api.lkan.cc/?url="// ok-s
    );

    var button = document.createElement('div');
    var clicked_num = 0;
    button.innerHTML = "<div title='再次点击可自动切换解析源'>♔ VIP 解析 </div>";
    button.style.cssText = "display:block; position:fixed; left:-56px; top:10%; width:100px; height:40px; background-color:#ff5c38 !important; color:#ffffff !important; z-index:999999; border-radius:0 20px 20px 0; text-align:center; line-height:40px; font-size:16px; cursor:pointer;";
    // button.setAttribute("onMouseOver", "this.style.padding='20px;'");
    button.onmouseover = function(){
        this.style.left = '0';
        this.style.transition = "all 0.3s";
    }
    button.onmouseout = function(){
        this.style.left = '-56px';
        this.style.transition = "all 1s";
    }
    button.onclick = function(){
        this.style.color = 'yellow';
        clicked_num += 1;
        if(clicked_num == 1){
            window.open(source_arr[0] + window.location.href);
            alert("新页面播放VIP视频，如果解析失败，可以再次点击解析按钮！祝好~");
        }else{
            let i = Math.floor(Math.random()*source_arr.length); // 参考：https://www.jianshu.com/p/5bcfc9d07b9a
            window.open(source_arr[i] + window.location.href);
        }
    };
    document.body.append(button);

})();
