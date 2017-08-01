/**
 * Created by QXT on 2017/5/17.
 * 作用域：登录、注册
 */

$(function () {
   if (w > 767) {
      var hl = $('div.login').outerHeight();
      var hs = $('section').outerHeight();
      $('section').css({paddingTop: (hs - hl) / 2.5});
   }
});