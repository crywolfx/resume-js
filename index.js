// ==UserScript==
// @name         打印处理
// @namespace    http://tampermonkey.net/
// @version      2024-01-31
// @description  try to take over the world!
// @author       You
// @match        https://www.qmjianli.com/cvs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qmjianli.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var styleElement = document.createElement('style');
  var myCloudEl = document.querySelector('.my_cloud');
  var vueKey = Object.keys(myCloudEl.dataset)[0];
  // 添加样式内容
  styleElement.textContent = `
  @media print {
    .my_cloud[${vueKey}] {
      visibility: visible !important;
    }
  }  
`;
  // 将 style 元素插入到 head 中
  document.head.appendChild(styleElement);
  // Your code here...
})();
