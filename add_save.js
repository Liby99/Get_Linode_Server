// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://manager.linode.com/linodes/add_save
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

window.location.href = "https://manager.linode.com/linodes/add";