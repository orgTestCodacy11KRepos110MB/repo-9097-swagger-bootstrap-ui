(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{523:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_4-1-knife4jcloud综合管理平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-knife4jcloud综合管理平台"}},[t._v("#")]),t._v(" 4.1 Knife4jCloud综合管理平台")]),t._v(" "),s("h2",{attrs:{id:"_4-1-1-产品介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-产品介绍"}},[t._v("#")]),t._v(" 4.1.1 产品介绍")]),t._v(" "),s("p",[s("code",[t._v("Knife4jCloud")]),t._v("是一款独立部署的中间件,基于"),s("code",[t._v("Spring Boot 2.2.0.RELEASE")]),t._v("+"),s("code",[t._v("Mybatis 3.5")]),t._v("进行开发.")]),t._v(" "),s("p",[t._v("将目前开源的"),s("code",[t._v("Knife4j")]),t._v("进行整合,通过云平台对"),s("code",[t._v("OpenAPI v2")]),t._v("的Swagger文档进行云端聚合,在线对Swagger文档进行渲染和调试,非常灵活方便,特别是在微服务盛行的今天,对于使用Swagger的开发者来说,是一款非常轻巧、方便、简单、易用的产品.")]),t._v(" "),s("p",[t._v("产品的主要优势：")]),t._v(" "),s("p",[s("strong",[t._v("1).跨语言")])]),t._v(" "),s("p",[t._v("使用Swagger的开发者都知道,OpenAPI是一套标准的规范,在不同的语言中都有相应的实现方式,包括Java、Node、Python、.Net等语言,使用范围非常广泛,特别是Java体系下Spring的生态非常完善,Springfox组件提供了对OpenAPI的支持,将SpringMVC接口和Swagger紧密的联系了起来,方便开发者进行接口的调试")]),t._v(" "),s("p",[t._v("也正是因为这种原因,Knife4j目前经历近3年的发展,OpenAPI2.0版本已经越来越成熟,Java的开发者集成Knife4j非常方便,但是其他语言目前想要使用Knife4j都会有一些难度,需要更改相关的代码才能做到集成,使用上很麻烦")]),t._v(" "),s("p",[t._v("Knife4jCloud平台作为独立的平台,不管是提供OpenAPI的接口还是提供Swagger的JSON,都可以通过在平台上简单操作,即可情况将OpenAPIV2的结构在Knife4j的Ui上展示出来.")]),t._v(" "),s("p",[s("strong",[t._v("2).微服务模式下自动聚合")])]),t._v(" "),s("p",[t._v("在目前的Knife4j技术交流群中,经常会碰到各个开发者询问如何在Spring Cloud的微服务技术架构下聚合Swagger文档,有的人聚合成功了,有的人聚合失败了")]),t._v(" "),s("p",[t._v("究其原因,Spring Cloud技术架构发展相当迅速,部分开发人员无暇去通过调试底层代码的方式来解决碰到的问题,特别是Swagger文档的聚合一般都是通过网关的特性进行聚合,而微服务架构的网关从"),s("code",[t._v("Zuul")]),t._v("到"),s("code",[t._v("Spring Cloud Gateway")]),t._v("的迭代,都是发展惊人的,新版本的迭代必然会碰到版本兼容的问题,网关的迭代,每一次的迭代新增了那些特性,删除了那些特性,大部分情况下,我们是不会去看迭代日志的.升级就完事了.这也是为什么有人成功,有人失败")]),t._v(" "),s("p",[t._v("那么,通过现象看本质,我们碰到的问题到底是什么?")]),t._v(" "),s("p",[t._v("1、网关版本升级,导致请求Swagger接口失败,或者丢失某个属性")]),t._v(" "),s("p",[t._v("2、网关配置不正确,调试转发失败")]),t._v(" "),s("p",[t._v("3、等等...")]),t._v(" "),s("p",[t._v("我们在Spring Boot单体架构下,引入Swagger文档如此简单,为什么在Spring Cloud的体现这么麻烦?聚合代码写了一大堆,还要调试为何失败,不同的版本有不同的要求.等等")]),t._v(" "),s("p",[t._v("那么,Knife4jCloud是如何解决这些问题的呢?")]),t._v(" "),s("p",[t._v("1、Knife4jCloud把Swagger的特性全部抽象出来,全部放在平台里来做,他充当的也是一个网关的角色,但是是自己扩展实现的,扩展的目的只有一个,就是可以在平台中进行调试")]),t._v(" "),s("p",[t._v("2、Knife4jCloud中会把每一个Swagger文档作为一个服务实例，微服务的IP、端口、Swagger-JSONNeri都会保存在平台中")]),t._v(" "),s("p",[t._v("这样在平台中,对于Swagger文档可以进行任意聚合,和微服务彻底拜拜了~~")]),t._v(" "),s("p",[s("strong",[t._v("3).个性化配置")])]),t._v(" "),s("p",[t._v("Knife4jCloud产品本身是拥有用户的角色的,开发者可以将平台部署在和实际同一个网络环境中,对外的Swagger文档可以通过Knife4jCloud做到网络隔离")]),t._v(" "),s("p",[t._v("对于每一份Swagger文档页可以做到是否登录后可看,文档是否可以调试等等个性化的配置都可以在平台中进行操作")]),t._v(" "),s("h2",{attrs:{id:"_4-1-2-功能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-功能介绍"}},[t._v("#")]),t._v(" 4.1.2 功能介绍")]),t._v(" "),s("p",[s("code",[t._v("Knife4jCloud")]),t._v(" V1.0版本目前提供的功能主要包括：")]),t._v(" "),s("ul",[s("li",[t._v("个人用户&登录&注册：通过邮箱的方式进行注册,数据完全隔离,每个人只能看到自己的数据")]),t._v(" "),s("li",[t._v("工作台：当前项目、服务的简单统计情况")]),t._v(" "),s("li",[t._v("项目管理：可以对项目进行编辑维护")]),t._v(" "),s("li",[t._v("服务管理：可以对服务列表进行编辑维护")])]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-1-登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-1-登录"}},[t._v("#")]),t._v(" 4.1.2.1 登录")]),t._v(" "),s("p",[s("code",[t._v("Knife4jCloud")]),t._v("通过个人邮箱的方式进行登录注册,所以在系统数据是完全隔离的,每个人只能看到自己的数据")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/login1.png",alt:""}})]),t._v(" "),s("p",[t._v("注册界面：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/login.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-2-工作台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-2-工作台"}},[t._v("#")]),t._v(" 4.1.2.2 工作台")]),t._v(" "),s("p",[t._v("在项目主页工作台,会显示当前用户的项目数量、服务数量、服务分类情况")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/workplan.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-3-项目管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-3-项目管理"}},[t._v("#")]),t._v(" 4.1.2.3 项目管理")]),t._v(" "),s("p",[t._v("项目管理包含了对当前项目的新增、编辑、删除、查询等功能")]),t._v(" "),s("p",[t._v("项目主要包含的字段：项目编号、项目名称、项目描述")]),t._v(" "),s("p",[t._v("项目编号是全局唯一,并且只能是数字或英文或者是英文+数字+下划线等方式组成")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/product.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/product1.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-4-服务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-4-服务管理"}},[t._v("#")]),t._v(" 4.1.2.4 服务管理")]),t._v(" "),s("p",[t._v("服务在Knife4jCloud中的定义其实是一个OpenAPIv2的实例,一个服务可以是通过API接口获取的,也可以是通过Swagger的JSON来创建,所以在服务管理中,存在两种类型：")]),t._v(" "),s("ul",[s("li",[t._v("API:微服务在线的方式,获取得到当前的OPenAPIv2的实例,通过Knife4j的Ui进行接口渲染")]),t._v(" "),s("li",[t._v("LOCAL:本地化的方式,使用者提供Swagger的JSON来创建服务实例")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/item.png",alt:""}})]),t._v(" "),s("p",[t._v("通过在线API的方式来创建服务实例：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/item1.png",alt:""}})]),t._v(" "),s("p",[t._v("通过本地LOCAL的方式创建")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/item2.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-5-预览文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-5-预览文档"}},[t._v("#")]),t._v(" 4.1.2.5 预览文档")]),t._v(" "),s("p",[t._v("通过项目管理列表中的操作按钮,可以选择预览文档查看文档")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/product2.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-1-2-6-个人中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-6-个人中心"}},[t._v("#")]),t._v(" 4.1.2.6 个人中心")]),t._v(" "),s("p",[t._v("鼠标悬浮在右上角,可以选择用户信息、重置密码、退出等操作")]),t._v(" "),s("p",[t._v("其中用户信息中包含了开放注册API接口中的accessKey信息,如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4jcloud/user1.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_4-1-3-开放api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-开放api"}},[t._v("#")]),t._v(" 4.1.3 开放API")]),t._v(" "),s("p",[t._v("Knife4jCloud平台对外提供注册Swagger服务的开放API接口,通过该接口,非Java语言的开发者,可以进行独立开发,做到Swagger文档的项目自启动注入平台")]),t._v(" "),s("h3",{attrs:{id:"_4-1-3-1-注册api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-1-注册api"}},[t._v("#")]),t._v(" 4.1.3.1 注册API")]),t._v(" "),s("p",[t._v("接口地址："),s("code",[t._v("/knife4j/cloud/upload")])]),t._v(" "),s("p",[t._v("接口类型："),s("code",[t._v("application/json")])]),t._v(" "),s("p",[t._v("接口方式："),s("code",[t._v("POST")])]),t._v(" "),s("p",[t._v("接口参数：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APIFactory"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"applicationHost"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.152"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"applicationPort"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9200"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ssl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cloudRoutes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"groupName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单服务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{....}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/aaa/v2/api-docs?group=订单服务"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("参数说明：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("accessKey")]),t._v(":该参数是注册API接口的认证凭证,每一个注册用户拥有自己独立的accessKey,平台注册成功后可以在右上角通过"),s("strong",[t._v("个人信息")]),t._v("中获取")]),t._v(" "),s("li",[s("code",[t._v("code")]),t._v(":项目编码,如果在平台中不存在,则注册不会成功,因此需要先在平台中添加项目")]),t._v(" "),s("li",[s("code",[t._v("applicationHost")]),t._v(":当前应用服务的IP地址,该参数主要作用于Swagger调试")]),t._v(" "),s("li",[s("code",[t._v("applicationPort")]),t._v("：当前应用服务的端口号")]),t._v(" "),s("li",[s("code",[t._v("ssl")]),t._v(":默认false,如果是true,则代表当前服务是https")]),t._v(" "),s("li",[s("code",[t._v("client")]),t._v(":配置一个应用服务的Client地址,一般是http://host:port,Knife4j会自动识别,如果开发者提供的是域名访问,防火墙屏蔽了端口号(例如：http://doc.xiaominfo.com),则开发者在上传的时候需要设置该属性,否则无法调试,该参数设置后则Host、Port不会生效,会根据该地址自动解析得到host和端口,所以两个属性配置其中一个即可.")]),t._v(" "),s("li",[s("code",[t._v("cloudRoutes")]),t._v(":服务分组\n"),s("ul",[s("li",[s("code",[t._v("groupName")]),t._v(":服务名称")]),t._v(" "),s("li",[s("code",[t._v("content")]),t._v(":该内容是OpenAPIv2的JSON结构")]),t._v(" "),s("li",[s("code",[t._v("path")]),t._v(":提供访问得到OpenAPIv2的接口地址,在实际预览的时候,会通过该接口得到Swagger的JSON内容进行渲染")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-1-3-2-spring-boot自动注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-2-spring-boot自动注册"}},[t._v("#")]),t._v(" 4.1.3.2 Spring Boot自动注册")]),t._v(" "),s("p",[t._v("如果你的项目是通过"),s("code",[t._v("Spring Boot")]),t._v("进行开发,并且不想通过"),s("code",[t._v("Knife4jCloud")]),t._v("提供的界面进行操作,并且已经集成了springfox-swagger组件,那么,你可以引用"),s("code",[t._v("Knife4jCloud")]),t._v("提供的自动注册的jar包组件进行自动注册")]),t._v(" "),s("p",[t._v("1.Maven引用")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-discovery-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库(http://search.maven.org)搜索最新版本号--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 该版本必须和Knife4jCloud主版本一致--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("2、在"),s("code",[t._v("application.yml")]),t._v("或者"),s("code",[t._v("application.properties")]),t._v("配置文件中配置相关参数,以"),s("code",[t._v("yml")]),t._v("为例：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 参考注册API中的accessKey")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 项目编号")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" APITest\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Knife4jCloud的对外域名地址")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19011")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 当前服务是否是HTTPS的,默认可以不配置,并且该参数默认为false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 参考注册API中的client属性,该参数可以不配置,只有在域名的情况下需要进行配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.domain.com\n    \n")])])]),s("p",[t._v("3、在Spring Boot应用中通过注解"),s("code",[t._v("@EnableKnife4jCloudDiscovery")]),t._v("进行启用")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableKnife4jCloudDiscovery")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Knife4jSpringBootDemoApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-1-4-产品试用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-产品试用"}},[t._v("#")]),t._v(" 4.1.4 产品试用")]),t._v(" "),s("p",[t._v("可以访问"),s("a",{attrs:{href:"http://cloud.xiaominfo.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cloud.xiaominfo.com"),s("OutboundLink")],1),t._v("进行注册试用吧!!!")]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);