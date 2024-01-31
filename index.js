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
  styleElement.textContent = `@media print{.my_cloud [data-${vueKey}]{visibility:visible}}`;
  // 将 style 元素插入到 head 中
  document.head.appendChild(styleElement);

  var rightEl = document.querySelector('.my_cloud_r');
  var tplAllEl = document.querySelector('.tpl_all');
  var containerEl = document.querySelector('.resume_main');
  var pageLineEl = document.querySelector('.page_line');
  var downLoadImgBoxEl = document.querySelector('#downLoadImgBox');
  var downLoadImgBoxMobileEl = document.querySelector('#downLoadImgBoxMobile');

  [rightEl, pageLineEl, downLoadImgBoxEl, downLoadImgBoxMobileEl].forEach(e => e.style.display = 'none');
  [tplAllEl, containerEl].forEach(e => {
    e.style.padding = 0;
    e.style.width = 'auto';
  })

})();
