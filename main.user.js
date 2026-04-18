// ==UserScript==
// @name         Unbrave Search
// @namespace    dumbovita
// @homepage     https://github.com/dumbovita/unbrave-search
// @author       dumbovita
// @version      3.1
// @description  hides AI features and unnecessary popups in Brave Search
// @match        https://search.brave.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(document.head || document.documentElement).appendChild(
    Object.assign(document.createElement("style"), {
        textContent: `#submit-llm-button,#ai-features-button,#chatllm-main-answer-content,#llm-snippet,#chatllm-conversation,.chatllm-content,.chatllm-answer-list,.chatllm-disclaimer,.tab-item a[href*="/ask"],.llm-output,.followups-wrapper,#chatllm-actions,.qa-inline-entity,.inline-refs,[class*="llm-"],.download-cta,.before-quick-goggles,dialog:has(.promo-content){display:none!important;}`,
    }),
);
