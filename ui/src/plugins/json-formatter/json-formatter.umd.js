!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("select")):"function"==typeof define&&define.amd?define(["select"],e):(t=t||self).JSONFormatter=e(t.select)}(this,(function(t){"use strict";function e(t){return null===t?"null":typeof t}function n(t){return!!t&&"object"==typeof t}function r(t){if(void 0===t)return"";if(null===t)return"Object";if("object"==typeof t&&!t.constructor)return"Object";var e=/function ([^(]*)/.exec(t.constructor.toString());return e&&e.length>1?e[1]:""}function o(t,e,n){return"null"===t||"undefined"===t?t:("string"!==t&&"stringifiable"!==t||(n='"'+n.replace(/"/g,'\\"')+'"'),"function"===t?e.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{…}":n)}function i(t){var i="";return n(t)?(i=r(t),Array.isArray(t)&&(i+="["+t.length+"]")):i=o(e(t),t,t),i}function s(t){return"json-formatter-"+t}function a(t,e,n){var r=document.createElement(t);return e&&r.classList.add(s(e)),void 0!==n&&(n instanceof Node?r.appendChild(n):r.appendChild(document.createTextNode(String(n)))),r}t=t&&t.hasOwnProperty("default")?t.default:t,function(t){if(t&&"undefined"!=typeof window){var e=document.createElement("style");e.setAttribute("media","screen"),e.innerHTML=t,document.head.appendChild(e)}}('.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: #000;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 2rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 2rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: #00f;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855a00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #ff20ed;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #00f;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: #00f;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008b;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.7rem;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  content: "\\f0da";\n  font-size: 16px;\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s ease-in;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row > .json-formatter-copy-text {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s ease-in;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row > .json-formatter-copy-text > .json-formatter-copy-text-button {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  border: none;\n}\n.json-formatter-row > .json-formatter-copy-text > .json-formatter-copy-text-button:after {\n  content: "\\f0ea";\n}\n.json-formatter-row:hover > .json-formatter-copy-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  content: \'\\f0d7\';\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31f031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66c2ff;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #ec4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #eec97d;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #fd48cb;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: hsla(0, 0%, 100%, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027bff;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494ff;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23a0db;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n  display: inline-block;\n  -webkit-transition: -webkit-transform 0.1s ease-in;\n  transition: -webkit-transform 0.1s ease-in;\n  transition: transform 0.1s ease-in;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  content: "\\f0da";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s ease-in;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');var f=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,l=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,d=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,m=window.requestAnimationFrame||function(t){return t(),0},c={hoverPreviewEnabled:!1,hoverCopyEnabled:!0,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null};return function(){function p(t,e,n,r){void 0===e&&(e=1),void 0===n&&(n=c),this.json=t,this.open=e,this.config=n,this.key=r,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=c.hoverPreviewEnabled),void 0===this.config.hoverCopyEnabled&&(this.config.hoverCopyEnabled=c.hoverCopyEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=c.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=c.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=c.useToJSON),""===this.key&&(this.key='""')}return Object.defineProperty(p.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(t){this._isOpen=t},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(f.test(this.json)||d.test(this.json)||l.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isUrl",{get:function(){return"string"===this.type&&0===this.json.indexOf("http")},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isObject",{get:function(){return n(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"constructorName",{get:function(){return r(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":e(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(p.prototype,"keys",{get:function(){if(this.isObject){var t=Object.keys(this.json);return!this.isArray&&this.config.sortPropertiesBy?t.sort(this.config.sortPropertiesBy):t}return[]},enumerable:!0,configurable:!0}),p.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(s("open")))},p.prototype.openAtDepth=function(t){void 0===t&&(t=1),t<0||(this.open=t,this.isOpen=0!==t,this.element&&(this.removeChildren(!1),0===t?this.element.classList.remove(s("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(s("open")))))},p.prototype.getInlinepreview=function(){var t=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(i).join(", ")+"]";var e=this.keys,n=e.slice(0,this.config.hoverPreviewFieldCount).map((function(e){return e+":"+i(t.json[e])})),r=e.length>=this.config.hoverPreviewFieldCount?"…":"";return"{"+n.join(", ")+r+"}"},p.prototype.getInlinecopy=function(){return this.json},p.prototype.render=function(){this.element=a("div","row");var e=this.isObject?a("a","toggler-link"):a("span");if(this.isObject&&!this.useToJSON&&e.appendChild(a("span","toggler")),this.hasKey&&e.appendChild(a("span","key",this.key+":")),this.isObject&&!this.useToJSON){var n=a("span","value"),r=a("span"),i=a("span","constructor-name",this.constructorName);if(r.appendChild(i),this.isArray){var f=a("span");f.appendChild(a("span","bracket","[")),f.appendChild(a("span","number",this.json.length)),f.appendChild(a("span","bracket","]")),r.appendChild(f)}n.appendChild(r),e.appendChild(n)}else{(n=this.isUrl?a("a"):a("span")).classList.add(s(this.type)),this.isDate&&n.classList.add(s("date")),this.isUrl&&(n.classList.add(s("url")),n.setAttribute("href",this.json));var l=o(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);n.appendChild(document.createTextNode(l)),e.appendChild(n)}if(this.isObject&&this.config.hoverPreviewEnabled){var d=a("span","preview-text");d.appendChild(document.createTextNode(this.getInlinepreview())),e.appendChild(d)}var m=a("div","children");if(this.isObject&&m.classList.add(s("object")),this.isArray&&m.classList.add(s("array")),this.isEmpty&&m.classList.add(s("empty")),this.config&&this.config.theme&&this.element.classList.add(s(this.config.theme)),this.isOpen&&this.element.classList.add(s("open")),this.element.appendChild(e),this.element.appendChild(m),this.isObject&&this.config.hoverCopyEnabled){var c=a("span","copy-text"),p=a("button","copy-text-button"),h=JSON.stringify(this.json);p.setAttribute("data-clipboard-text",h),c.appendChild(p),e.parentNode.insertBefore(c,e.nextSibling),p.addEventListener("click",(function(){var e="rtl"==document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;n.style.top=r+"px",n.setAttribute("readonly",""),n.value=h,document.body.appendChild(n),t(n);try{document.execCommand("copy"),n.blur(),alert("Copied to clipboard!"),window.getSelection().removeAllRanges(),document.body.removeChild(n),n.remove(),n=null}catch(t){console.warn("Failed to copy selection")}}))}return this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&e.addEventListener("click",this.toggleOpen.bind(this)),this.element},p.prototype.appendChildren=function(t){var e=this;void 0===t&&(t=!1);var n=this.element.querySelector("div."+s("children"));if(n&&!this.isEmpty)if(t){var r=0,o=function(){var t=e.keys[r],i=new p(e.json[t],e.open-1,e.config,t);n.appendChild(i.render()),(r+=1)<e.keys.length&&(r>10?o():m(o))};m(o)}else this.keys.forEach((function(t){var r=new p(e.json[t],e.open-1,e.config,t);n.appendChild(r.render())}))},p.prototype.removeChildren=function(t){void 0===t&&(t=!1);var e=this.element.querySelector("div."+s("children"));if(t){var n=0,r=function(){e&&e.children.length&&(e.removeChild(e.children[0]),(n+=1)>10?r():m(r))};m(r)}else e&&(e.innerHTML="")},p}()}));
