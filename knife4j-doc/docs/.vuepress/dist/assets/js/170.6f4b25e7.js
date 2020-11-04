(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{194:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Knife4j自2.0.6版本开始,将目前在Ui界面中一些个性化配置剥离,开发者可以在后端进行配置，并且提供的knife4j-spring-boot-strater组件自动装载")]),t._v(" "),e("p",[t._v("spring.factories配置如下：")]),t._v(" "),t._m(1),e("p",[t._v("在Spring Boot配置文件中,完整的配置如下:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("各个配置属性说明如下：")]),t._v(" "),e("table",[t._m(5),t._v(" "),e("tbody",[t._m(6),t._v(" "),t._m(7),t._v(" "),e("tr",[e("td",[t._v("knife4j.production")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是否开启生产环境保护策略,详情参考"),e("router-link",{attrs:{to:"./accessControl.html"}},[t._v("文档")])],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28)])]),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("示例代码如下：")]),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),e("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"增强模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增强模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 增强模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Auto Configure")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("org.springframework.boot.autoconfigure.EnableAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("\\\ncom.github.xiaoymin.knife4j.spring.configuration.Knife4jAutoConfiguration")]),this._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("knife4j:\n  enable: true\n  documents:\n    -\n      group: 1.2.x\n      name: 测试自定义标题分组\n      locations: classpath:md/*\n  setting:\n    enableSwaggerModels: true\n    enableDocumentManage: true\n    enableHost: false\n    enableHostText: http://localhost:999\n    enableRequestCache: true\n    enableFilterMultipartApis: false\n    enableFilterMultipartApiMethodType: POST\n    language: zh-CN\n  cors: false\n  production: false\n  basic:\n    enable: false\n    username: test\n    password: 123\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在以前的版本中,开发者需要在配置文件中手动使用"),s("code",[this._v("@EnableKnife4j")]),this._v("来使用增强，自2.0.6版本后,只需要在配置文件中配置"),s("code",[this._v("knife4j.enable=true")]),this._v("即可不在使用注解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意：要使用Knife4j提供的增强，"),s("code",[this._v("knife4j.enable=true")]),this._v("必须开启")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("属性")]),this._v(" "),s("th",[this._v("默认值")]),this._v(" "),s("th",[this._v("说明值")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.enable")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("是否开启Knife4j增强模式")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.cors")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("是否开启一个默认的跨域配置,该功能配合自定义Host使用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.basic")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("对Knife4j提供的资源提供BasicHttp校验,保护文档")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.basic.enable")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("关闭BasicHttp功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.basic.username")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("basic用户名")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.basic.password")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("basic密码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.documents")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("自定义文档集合，该属性是数组")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.documents.group")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("所属分组")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.documents.name")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("类似于接口中的tag,对于自定义文档的分组")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[t._v("knife4j.documents.locations")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("markdown文件路径,可以是一个文件夹("),e("code",[t._v("classpath:markdowns/*")]),t._v(")，也可以是单个文件("),e("code",[t._v("classpath:md/sign.md")]),t._v(")")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("前端Ui的个性化配置属性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableAfterScript")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td",[this._v("调试Tab是否显示AfterScript功能,默认开启")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.language")]),this._v(" "),s("td",[this._v("zh-CN")]),this._v(" "),s("td",[this._v("Ui默认显示语言,目前主要有两种:中文(zh-CN)、英文(en-US)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableSwaggerModels")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td",[this._v("是否显示界面中SwaggerModel功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.swaggerModelName")]),this._v(" "),s("td",[s("code",[this._v("Swagger Model")])]),this._v(" "),s("td",[this._v("重命名SwaggerModel名称,默认")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableDocumentManage")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td",[this._v('是否显示界面中"文档管理"功能')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableReloadCacheParameter")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("是否在每个Debug调试栏后显示刷新变量按钮,默认不显示")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableVersion")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("是否开启界面中对某接口的版本控制,如果开启，后端变化后Ui界面会存在小蓝点")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableRequestCache")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td",[this._v("是否开启请求参数缓存")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableFilterMultipartApis")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("针对RequestMapping的接口请求类型,在不指定参数类型的情况下,如果不过滤,默认会显示7个类型的接口地址参数,如果开启此配置,默认展示一个Post类型的接口地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableFilterMultipartApiMethodType")]),this._v(" "),s("td",[this._v("POST")]),this._v(" "),s("td",[this._v("具体接口的过滤类型")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableHost")]),this._v(" "),s("td",[this._v("false")]),this._v(" "),s("td",[this._v("是否启用Host")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("knife4j.setting.enableHostText")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("启用Host后的地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("关于个性化文档("),s("code",[this._v("knife4j.documents")]),this._v(")以及个性化设置("),s("code",[this._v("knife4j.setting")]),this._v("),有一些细微的区别,开发者在配置文件中进行配合好后,还需要在创建Docket对象时调用"),s("code",[this._v("Knife4j")]),this._v("提供的扩展Extesions进行赋值")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2WebMvc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*引入Knife4j提供的扩展类*/")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openApiExtensionResolver "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openApiExtensionResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultApi2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApi2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" groupName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.X版本"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" docket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DocumentationType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SWAGGER_2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestHandlerSelectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("basePackage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.swagger.bootstrap.ui.demo.new2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PathSelectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//赋予插件体系")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("extensions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openApiExtensionResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildExtensions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" docket"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("buildExtensions")]),this._v("方法需要传入分组名称,该分组名称主要是为了区分开发者在构建自定义文档时，在不同的Docket逻辑分组下进行区别显示。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("OpenApiExtensionResolver")]),this._v("辅助类需要配置"),s("code",[this._v("knife4j.enable=true")]),this._v("才能自动"),s("code",[this._v("@Autowired")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("增强效果开启后,在最终调用接口时，Knife4j会添加扩展属性"),s("code",[this._v("x-openapi")]),this._v(",如下图：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/knife4j/enc.png",alt:""}})])}],!1,null,null,null);s.default=a.exports}}]);