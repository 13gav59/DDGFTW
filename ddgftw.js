// ==UserScript==
// @name         DDGFTW
// @namespace    https://github.com/13gav59
// @version      1.0
// @description  DuckDuckGo For The Win
// @author       13gav59
// @include      http://www.google.*
// @include      https://www.google.*
// ==/UserScript==

'use strict';
var searchBox = document.getElementsByTagName("input");
for(var i=0; i < searchBox.length; i++) {
 if(searchBox[i].type == "text") {
     searchBox[i].value = "Redirecting you to DuckDuckGo - A better search engine.";
     redirect();
 }
}

function redirect() {
    setTimeout(function(){
         window.location.href = "https://duckduckgo.com";
    }, 5000)
}
