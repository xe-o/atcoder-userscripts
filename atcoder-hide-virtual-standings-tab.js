// ==UserScript==
// @name            AtCoder Hide Virtual Standings Tab
// @name:ja         AtCoder Hide Virtual Standings Tab
// @namespace       https://github.com/xe-o
// @version         0.1
// @description     Hide the "Virtual Standings" tab on the AtCoder task page.
// @description:ja  AtCoder問題ページの「バーチャル順位表」のタブを非表示にします。
// @author          XERO
// @license         MIT
// @match           https://atcoder.jp/contests/*/tasks/*
// @grant           none
// ==/UserScript==

(function () {
  "use strict";
  var link = document.querySelector("a[href$='/standings/virtual']");

  if (link) {
    link.parentElement.style.display = "none";
  }
})();
