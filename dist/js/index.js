/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {
   // 首页搜索
   $('.list-ns').click(function () {
      if ($(this).hasClass('list-n')) {
         $('.li-posi').show();
      } else {
         $('.li-posi').hide();
      }
   });

//   PC首页轮播
   var img = $('.a_img');
   var li = $('.car_li');
   for (var i = 0; i < img.length; i++) {
      $(li[i]).attr('data-slide-to', i);
   }
   $('.ban-li').hover(function () {
      $(this).css({borderTopColor: "#4f90d7"});
      $(this).next().css({borderTopColor: "#4f90d7"});
   }, function () {
      $(this).css({borderTopColor: "#f0f0f0"});
      $(this).next().css({borderTopColor: "#f0f0f0"});
   });

//   tab切换调用
   tab('.rt-li', '.rt-ul');
   tab('.rt-li2', '.rt-ul2');
   tab('.list1-li', '.list1-sec');
   tab('.list2-li', '.list2-sec');
   tab('.tit-li', '.ul2-sec');

//   右侧切换部分的宽度（手机）
   if (w < 767) {
      $('.rt-new-top').each(function () {
         var rt_top = this;
         $(rt_top).find('div').css({width: $(rt_top).outerWidth() - $(rt_top).find('span').outerWidth() - 8});
      });
   }

   ff();
});

jQuery.fn.size = function () {
   return this.length;
};

//判断浏览器是否为火狐
function ff() {
   var explorer = navigator.userAgent;
   if (explorer.indexOf("Firefox") >= 0) {
      $('.foot-ul').perfectScrollbar();
   }
}