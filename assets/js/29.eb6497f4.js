(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{353:function(t,s,a){"use strict";a.r(s);var n=a(22),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标","aria-hidden":"true"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),a("p",[t._v("将常规的 URL 字符串的参数解析为对象的形式")]),t._v(" "),a("h2",{attrs:{id:"方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),a("h3",{attrs:{id:"_1-字符串的-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串的-split","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 字符串的 split")]),t._v(" "),a("p",[t._v("该方法比较直白，此处不做概述。")]),t._v(" "),a("h3",{attrs:{id:"_2-正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 正则表达式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.google.com/search?source=hp&ei=cDq0XK-QBfPB0PEP7peesAk&q=解析+url+参数&btnK=Google+Search&oq=解析+url+参数&gs_l=psy-ab'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("queryURLParameter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" regx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/([^&?=]+)=([^&?=]+)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryURLParameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {source: "hp", ei: "cDq0XK-QBfPB0PEP7peesAk", q: "解析+url+参数", btnK: "Google+Search", oq: "解析+url+参数", …}')]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);