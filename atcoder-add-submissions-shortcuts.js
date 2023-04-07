// ==UserScript==
// @name            AtCoder Add Submissions Shortcuts
// @name:ja         AtCoder Add Submissions Shortcuts
// @namespace       https://github.com/xe-o
// @version         0.1
// @description     Add links to the AtCoder task page that open a list of submissions for the current task with custom filters applied.
// @description:ja  AtCoderの各問題ページのタブメニューに対して、任意のフィルター・並び順を適用した状態でその問題の提出一覧を開くリンクを追加します。
// @author          XERO
// @license         MIT
// @match           https://atcoder.jp/contests/*/tasks/*
// @grant           none
// ==/UserScript==

{
  const buttonSettings = {
    fastest: {
      label: "Fastest",
      icon: "time",
      urlParams: "f.Status=AC&orderBy=time_consumption",
    },
    shortest: {
      label: "Shortest",
      icon: "flag",
      urlParams: "f.Status=AC&orderBy=source_length",
    },
  };

  const buttons = Object.entries(buttonSettings).map(
    ([buttonName, { label, icon, urlParams }]) => {
      const taskName = window.location.pathname.split("/").pop();
      const buttonUrl = `https://atcoder.jp/contests/${
        window.location.pathname.split("/")[2]
      }/submissions?${urlParams}&f.Task=${taskName}`;
      return `<li><a href="${buttonUrl}"><span class="glyphicon glyphicon-${icon}" style="margin-right:4px;" aria-hidden="true"></span>${label}</a></li>`;
    }
  );

  const pullRightListItem = document.querySelector("li.pull-right");
  buttons.forEach((buttonHtml) => {
    pullRightListItem.insertAdjacentHTML("beforebegin", buttonHtml);
  });
}
