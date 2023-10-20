!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.localStorageFallback=t():e.localStorageFallback=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){var e=new l;try{e.setItem("__test","1");var t=e.getItem("__test");return e.removeItem("__test"),"1"===t}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();t.hasCookies=n;var a=r(3),u=function(e){return e&&e.__esModule?e:{default:e}}(a),s="lS_",l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.cookieOptions=Object.assign({path:"/"},t),s=void 0===t.prefix?s:t.prefix}return i(e,[{key:"getItem",value:function(e){var t=u.default.parse(document.cookie);return t&&t.hasOwnProperty(s+e)?t[s+e]:null}},{key:"setItem",value:function(e,t){return document.cookie=u.default.serialize(s+e,t,this.cookieOptions),t}},{key:"removeItem",value:function(e){var t=Object.assign({},this.cookieOptions,{maxAge:-1});return document.cookie=u.default.serialize(s+e,"",t),null}},{key:"clear",value:function(){var e=u.default.parse(document.cookie);for(var t in e)0===t.indexOf(s)&&this.removeItem(t.substr(s.length));return null}}]),e}();t.default=l},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MemoryStorage=t.CookieStorage=t.isSupported=t.storage=void 0;var n=r(2),i=o(n),a=r(0),u=o(a),s=r(4),l=o(s),f=null;(0,i.default)("localStorage")?t.storage=f=window.localStorage:(0,i.default)("sessionStorage")?t.storage=f=window.sessionStorage:(0,i.default)("cookieStorage")?t.storage=f=new u.default:t.storage=f=new l.default,t.default=f,t.storage=f,t.isSupported=i.default,t.CookieStorage=u.default,t.MemoryStorage=l.default},function(e,t,r){"use strict";function o(e){try{var t=window[e];return t.setItem(a,"1"),t.removeItem(a),!0}catch(e){return!1}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",t=String(e).replace(/storage$/i,"").toLowerCase();if("local"===t)return o("localStorage");if("session"===t)return o("sessionStorage");if("cookie"===t)return(0,i.hasCookies)();if("memory"===t)return!0;throw new Error("Storage method `"+e+"` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(0),a="__test"},function(e,t,r){"use strict";function o(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},n=e.split(s),u=o.decode||a,l=0;l<n.length;l++){var f=n[l],c=f.indexOf("=");if(!(c<0)){var d=f.substr(0,c).trim(),p=f.substr(++c,f.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==r[d]&&(r[d]=i(p,u))}}return r}function n(e,t,r){var o=r||{},n=o.encode||u;if("function"!=typeof n)throw new TypeError("option encode is invalid");if(!l.test(e))throw new TypeError("argument name is invalid");var i=n(t);if(i&&!l.test(i))throw new TypeError("argument val is invalid");var a=e+"="+i;if(null!=o.maxAge){var s=o.maxAge-0;if(isNaN(s))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(s)}if(o.domain){if(!l.test(o.domain))throw new TypeError("option domain is invalid");a+="; Domain="+o.domain}if(o.path){if(!l.test(o.path))throw new TypeError("option path is invalid");a+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(a+="; HttpOnly"),o.secure&&(a+="; Secure"),o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return a}function i(e,t){try{return t(e)}catch(t){return e}}
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

t.parse=o,t.serialize=n;var a=decodeURIComponent,u=encodeURIComponent,s=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=function(){function e(){o(this,e),this._data={}}return n(e,[{key:"getItem",value:function(e){return this._data.hasOwnProperty(e)?this._data[e]:null}},{key:"setItem",value:function(e,t){return this._data[e]=String(t)}},{key:"removeItem",value:function(e){return delete this._data[e]}},{key:"clear",value:function(){return this._data={}}}]),e}();t.default=i}]).default});;