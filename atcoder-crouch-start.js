// ==UserScript==
// @name            AtCoder Crouch Start
// @name:ja         AtCoder Crouch Start
// @namespace       https://github.com/xe-o
// @version         0.1
// @description     Add a link to problem A on upcoming AtCoder contest pages
// @description:ja  AtCoderの開始前のコンテストページにA問題へのリンクを追加します
// @author          XERO
// @license         MIT
// @match           https://atcoder.jp/contests/*
// @grant           none
// ==/UserScript==

(function () {
  "use strict";

  const fixtime = document.querySelector(".fixtime-full");
  const navTabs = document.querySelector(".nav.nav-tabs");
  const pullRightListItem = document.querySelector("li.pull-right");

  if (fixtime && Date.parse(fixtime.innerText) > Date.now()) {
    const contestID = window.location.pathname.split("/")[2];
    const tab = document.createElement("li");
    tab.innerHTML = `<a href="/contests/${contestID}/tasks/${contestID}_a"><span class="glyphicon glyphicon-paperclip" style="margin-right:4px;" aria-hidden="true"></span>A問題</a>`;
    navTabs.insertBefore(tab, pullRightListItem);
  }
})();
