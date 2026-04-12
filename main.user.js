// ==UserScript==
// @name         Brave Search NoAI
// @namespace    dumbovita
// @homepage     https://github.com/dumbovita/bravesearch-noai
// @author       dumbovita
// @version      0.2
// @description  hides ai features in brave search
// @match        https://search.brave.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(document.head || document.documentElement).appendChild(
    Object.assign(document.createElement("style"), {
        textContent: `#submit-llm-button,#ai-features-button,#chatllm-main-answer-content,#llm-snippet,#chatllm-conversation,.chatllm-content,.chatllm-answer-list,.chatllm-disclaimer,.tab-item a[href*="/ask"],.llm-output,.followups-wrapper,#chatllm-actions,.qa-inline-entity,.inline-refs,[class*="llm-"],.download-cta{display:none!important;}`,
    }),
);
