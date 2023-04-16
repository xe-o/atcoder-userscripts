// ==UserScript==
// @name               AtCoder Copy Contest ID
// @name:ja            AtCoder Copy Contest ID
// @namespace          https://github.com/xe-o
// @version            0.2
// @description        Add a button to copy the contest ID to the clipboard in AtCoder contest pages
// @description:ja     AtCoderコンテストページのナビゲーションバーへ、コンテストIDをコピーするためのボタンを追加します
// @author             XERO
// @license            MIT
// @match              https://atcoder.jp/*
// @grant              GM_setClipboard
// @run-at             document-idle
// ==/UserScript==

const COPY_BUTTON_LABEL_INIT = "Copy Contest ID";
const COPY_BUTTON_HTML = `
  <li>
    <a id="contest-id-copy-button" style="cursor: pointer; font-size: 12px">
      <span class="glyphicon glyphicon-copy" style="margin-right: 2px" aria-hidden="true"></span>
      <span id="copy-button-text">${COPY_BUTTON_LABEL_INIT}</span>
    </a>
  </li>`;

const copyContestId = (() => {
  const $ = (selector, baseElement) =>
    (baseElement || document).querySelector(selector);
  const getContestID = () => window.location.pathname.split("/")[2];
  return () => {
    const navbarElement = $(".navbar-nav");
    if (!navbarElement) throw new Error("Navbar element not found.");
    navbarElement.insertAdjacentHTML("beforeend", COPY_BUTTON_HTML);

    const copyButton = $("#contest-id-copy-button");
    copyButton.removeEventListener("click", copyToClipboard);
    const copyButtonIcon = $(".glyphicon", copyButton);
    const copyButtonLabel = $("#copy-button-text");

    async function copyToClipboard() {
      try {
        await GM_setClipboard(getContestID(), {
          type: "text",
          mimetype: "text/plain",
        });
        copyButtonIcon.classList.replace("glyphicon-copy", "glyphicon-ok");
      } catch (error) {
        console.error(`Failed to copy contest ID: ${error}`);
        copyButtonIcon.classList.replace("glyphicon-copy", "glyphicon-remove");
      } finally {
        const copyResultText = copyButtonIcon.classList.contains("glyphicon-ok")
          ? "Copied!"
          : "Failed to copy";
        copyButtonLabel.textContent = copyResultText;
        setTimeout(() => {
          copyButtonLabel.textContent = COPY_BUTTON_LABEL_INIT;
          copyButtonIcon.classList.replace(
            "glyphicon-ok",
            "glyphicon-copy",
            "glyphicon-remove"
          );
        }, 1800);
      }
    }

    copyButton.addEventListener("click", copyToClipboard);
  };
})();

copyContestId();
