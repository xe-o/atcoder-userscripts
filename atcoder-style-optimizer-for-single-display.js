// ==UserScript==
// @name            AtCoder Style Optimizer for Single Display
// @name:ja         AtCoder Style Optimizer for Single Display
// @namespace       https://github.com/xe-o
// @version         0.2
// @description     Overrides AtCoder styles for single display
// @description:ja  シングルディスプレイ向けにAtCoderのスタイルを最適化します
// @author          XERO
// @license         MIT
// @match           https://atcoder.jp/*
// @run-at          document-start
// @grant           none
// ==/UserScript==

(function () {
  "use strict";

  const css = `
    .container {
      width: 100%;
    }
    .float-container > #main-container {
      box-shadow: none;
    }
    #main-div.float-container {
      background: none;
    }
  `;

  const styleNode = document.createTextNode(css);
  document.head.insertAdjacentHTML("beforeend", "<style></style>");
  document.head.lastElementChild.appendChild(styleNode);
})();
