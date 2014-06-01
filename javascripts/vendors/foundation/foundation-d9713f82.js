/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(e,t,n,i){"use strict";function r(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}var o=function(t){var n=t.length;for(e("head");n--;)0===e("head").has("."+t[n]).length&&e("head").append('<meta class="'+t[n]+'" />')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var s=function(t,i){if("string"==typeof t){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return e(r.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},a=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},c=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},l=function(t,n){var i=this,r=!s(this).data(this.attr_name(!0));return"string"==typeof t?this[t].call(this,n):void(s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),r&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var r=!s(this).data(i.attr_name(!0)+"-init");s(this).data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(s(this)))),r&&i.events(this)}))},u=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,r=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,i),t=42===o.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(){function e(){n&&(o(e),a&&jQuery.fx.tick())}for(var n,i=0,r=["webkit","moz"],o=t.requestAnimationFrame,s=t.cancelAnimationFrame,a="undefined"!=typeof jQuery.fx;i<r.length&&!o;i++)o=t[r[i]+"RequestAnimationFrame"],s=s||t[r[i]+"CancelAnimationFrame"]||t[r[i]+"CancelRequestAnimationFrame"];o?(t.requestAnimationFrame=o,t.cancelAnimationFrame=s,a&&(jQuery.fx.timer=function(t){t()&&jQuery.timers.push(t)&&!n&&(n=!0,e())},jQuery.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),o=t.setTimeout(function(){e(n+r)},r);return i=n+r,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.2.1",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:""},init:function(e,t,n,i,r){var o=[e,n,i,r],a=[];if(this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),t&&"string"==typeof t&&!/reflow/i.test(t))this.libs.hasOwnProperty(t)&&a.push(this.init_lib(t,o));else for(var c in this.libs)a.push(this.init_lib(c,t));return e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=a,e.add_namespace=c,e.bindings=l,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace||e(".foundation-data-attribute-namespace").css("font-family");/false/i.test(t)||(this.global.namespace=t)},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(i,r)},t)}},debounce:function(e,t,n){var i,r;return function(){var o=this,s=arguments,a=function(){i=null,n||(r=e.apply(o,s))},c=n&&!i;return clearTimeout(i),i=setTimeout(a,t),c&&(r=e.apply(o,s)),r}},data_options:function(t){function n(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function i(t){return"string"==typeof t?e.trim(t):t}var r,o,s,a={},c=function(e){var t=Foundation.global.namespace;return e.data(t.length>0?t+"-options":"options")},l=c(t);if("object"==typeof l)return l;for(s=(l||":").split(";"),r=s.length;r--;)o=s[r].split(":"),/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),n(o[1])&&(o[1]=-1===o[1].indexOf(".")?parseInt(o[1],10):parseFloat(o[1],10)),2===o.length&&o[0].length>0&&(a[i(o[0])]=i(o[1]));return a},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'">'),Foundation.media_queries[t]=r(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,i=e.length;0===i&&t(e),e.each(function(){u(n.S(this),function(){i-=1,0===i&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,this,this.document);