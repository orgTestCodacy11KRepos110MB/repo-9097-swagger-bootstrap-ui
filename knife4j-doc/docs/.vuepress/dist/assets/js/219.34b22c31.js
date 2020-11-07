(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{477:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"接口排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口排序"}},[t._v("#")]),t._v(" 接口排序")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("code",[t._v("knife4j")]),t._v(" 版本>2.0.1 使用此规则,后端必须开启增强注解"),s("code",[t._v("@EnableKnife4j")])])]),t._v(" "),s("p",[t._v("目前提供的排序规则主要有2种，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("Controller之间的tags分组排序")]),t._v(" "),s("li",[t._v("Controller下的接口排序")])]),t._v(" "),s("h2",{attrs:{id:"tags分组排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags分组排序"}},[t._v("#")]),t._v(" tags分组排序")]),t._v(" "),s("p",[t._v("Controller之间的排序主要有两种方式,排序的规则是倒序,但是排序的最小值必须大于0")]),t._v(" "),s("p",[t._v("建议优先级是："),s("code",[t._v("@ApiSupport")]),t._v(">"),s("code",[t._v("@ApiSort")]),t._v(">"),s("code",[t._v("@Api")])]),t._v(" "),s("blockquote",[s("p",[t._v("对于最高级别的值,可以从999开始")]),t._v(" "),s("p",[t._v("@ApiSupport注解自2.0.3版本引入")])]),t._v(" "),s("p",[t._v("第一种,使用"),s("code",[t._v("@ApiSupport")]),t._v("注解中的属性"),s("code",[t._v("order")]),t._v(",代码示例如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.3版本-20200312"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiSupport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("284")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/nxew203"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api203Constroller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第二种情况,使用"),s("code",[t._v("knife4j")]),t._v("提供的增强注解"),s("code",[t._v("@ApiSort")]),t._v(",代码示例如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.2版本-20200226"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("286")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/nxew202"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api202Controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("第三种,使用注解"),s("code",[t._v("@Api")]),t._v("中的属性"),s("code",[t._v("position")]),t._v(",代码示例如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.2版本-20200226"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("286")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/nxew202"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api202Controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意")]),t._v("：如果排序增强功能后,前端在访问文档时也必须开启增强模式,具体可以参考"),s("RouterLink",{attrs:{to:"/knife4j/autoEnableKnife4j.html"}},[t._v("前端默认开启增强模式")])],1),t._v(" "),s("h2",{attrs:{id:"tag下接口排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag下接口排序"}},[t._v("#")]),t._v(" tag下接口排序")]),t._v(" "),s("p",[t._v("针对Controller下的具体接口,排序规则是使用"),s("code",[t._v("Knife4j")]),t._v("提供的增强注解"),s("code",[t._v("@ApiOperationSupport")]),t._v("中的order字段,代码示例如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperationSupport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"忽略参数值-Form类型"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rest")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LongUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LongUser")]),t._v(" longUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rest")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LongUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rest")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("longUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);