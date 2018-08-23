"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
var regex = {
   decmal: "^([+-]?)\\d*\\.\\d+$", // 浮点数
   decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", // 正浮点数
   decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", // 负浮点数
   decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", // 浮点数
   decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", // 非负浮点数（正浮点数 + 0）
   decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", // 非正浮点数（负浮点数 +0
   intege: "^-?[1-9]\\d*$", // 整数
   intege1: "^[1-9]\\d*$", // 正整数
   intege2: "^-[1-9]\\d*$", // 负整数
   num: "^([+-]?)\\d*\\.?\\d+$", // 数字
   num1: "^[1-9]\\d*|0$", // 正数（正整数 + 0）
   num2: "^-[1-9]\\d*|0$", // 负数（负整数 + 0）
   ascii: "^[\\x00-\\xFF]+$", // 仅ACSII字符
   chinese: "^[\\u4e00-\\u9fa5]+$", // 仅中文
   color: "^[a-fA-F0-9]{6}$", // 颜色
   date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", // 日期
   email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", // 邮件
   idcard: "^[1-9]([0-9]{14}|[0-9]{17})$", // 身份证
   ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", // ip地址
   letter: "^[A-Za-z]+$", // 字母
   letter_l: "^[a-z]+$", // 小写字母
   letter_u: "^[A-Z]+$", // 大写字母
   mobile: "^0?(13|15|18|14|17)[0-9]{9}$", // 手机
   notempty: "^\\S", // 非空
   password: "^.*[A-Za-z0-9\\w_-]+.*$", // 密码
   fullNumber: "^[0-9]+$", // 数字
   picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", // 图片
   qq: "^[1-9]*[1-9][0-9]*$", // QQ号码
   rar: "(.*)\\.(rar|zip|7zip|tgz)$", // 压缩文件
   tel: "^[0-9\-()（）]{7,18}$", // 电话号码的函数(包括验证国内区号,国际区号,分机号)
   url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", // url
   username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$", // 户名
   deptname: "^[A-Za-z0-9_()\uFF08\uFF09\\-\\u4e00-\\u9fa5]+$", // 单位名
   zipcode: "^\\d{6}$", // 邮编
   realname: "^[A-Za-z\\u4e00-\\u9fa5]+$", // 真实姓名
   companyname: "^[A-Za-z0-9_()\uFF08\uFF09\\-\\u4e00-\\u9fa5]+$",
   companyaddr: "^[A-Za-z0-9_()\uFF08\uFF09\\#\\-\\u4e00-\\u9fa5]+$",
   companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"

   //主页
};var _default = regex;
exports.default = _default;
;

var _temp = function () {
   if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
   }

   __REACT_HOT_LOADER__.register(regex, "regex", "dev/mtui/validate/regex.jsx");

   __REACT_HOT_LOADER__.register(_default, "default", "dev/mtui/validate/regex.jsx");
}();

;
//# sourceMappingURL=regex.js.map