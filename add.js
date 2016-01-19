// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://manager.linode.com/linodes/add
// @grant        none
// ==/UserScript==

function getJapanServer() {
    try {
        document.getElementById("linode2048.4").checked = true;
        document.getElementById("DatacenterID").value = 8;
        document.getElementById("signup").submit();
    }
    catch (ex) {
        
    }
}

window.setTimeout(getJapanServer, 1000);