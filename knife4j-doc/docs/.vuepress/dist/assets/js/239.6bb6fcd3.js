(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{421:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于iis使用knife4j"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于iis使用knife4j"}},[t._v("#")]),t._v(" 基于IIS使用knife4j")]),t._v(" "),a("p",[t._v("在"),a("RouterLink",{attrs:{to:"/knife4j/knife4j-front-source-modified.html"}},[t._v("上一篇")]),t._v("中,我们通过改造"),a("code",[t._v("knife4j")]),t._v("的源码,构造了自己的front版本,接下来")],1),t._v(" "),a("p",[t._v("本篇主要讲解如何使用IIS服务器运行"),a("code",[t._v("knife4j")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("关于Windows环境的IIS环境安装不在本篇文章的范围内,不知道IIS如何安装的请自行搜索解决")])]),t._v(" "),a("p",[t._v("我们在上一篇中在分组的url中,我们构建了一个虚拟的地址"),a("code",[t._v("/static/services.json")])]),t._v(" "),a("p",[t._v("接下来,我们在同目录中创建该文件,如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/knife4j/images/knife4j/knife4j-front-group.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("services.json")]),t._v("文件的内容参考java技术体系接口返回的结构即可,如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"knife4j-front服务模块"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/static/server1.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"swaggerVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/static/server1.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第二个模块"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/static/server2.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"swaggerVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/static/server2.json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("在分组的JSON结构中,我们同样返回一个Swagger 实例的静态JSON结构地址"),a("code",[t._v("/static/server1.json")])]),t._v(" "),a("p",[t._v("该JSON结构返回的是真正的Swagger结构,结构如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/knife4j/images/knife4j/knife4j-front-instance.png",alt:""}})]),t._v(" "),a("p",[t._v("构造虚拟的JSON结构完成后,接下来启动IIS服务,在浏览器访问地址("),a("code",[t._v("http://localhost:port/doc.html")]),t._v("),效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/knife4j/images/knife4j/knife4j-front-efffect.png",alt:""}})]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=r.exports}}]);