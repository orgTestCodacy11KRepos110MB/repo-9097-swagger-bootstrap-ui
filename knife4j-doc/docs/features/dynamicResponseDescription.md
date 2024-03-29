# 3.16 动态响应参数添加文档注释

:::caution 温馨提醒
增强功能需要通过配置yml配置文件开启增强,自2.0.6开始
```yml
knife4j:
  enable: true
```
:::


动态响应参数其实和[动态请求参数添加注释](dynamicRequestDescription)类似

同样使用`Knife4j`提供的增强注解`@DynamicResponseParameters`,代码示例如下：

```java
@PostMapping("/createOrder426")
@ApiOperation(value = "jdk-HashMap-动态创建显示参数-无@RequestBody")
@DynamicResponseParameters(name = "CreateOrderHashMapModel",properties = {
        @DynamicParameter(name = "",value = "注解id",example = "X000111",required = true,dataTypeClass = Integer.class),
        @DynamicParameter(name = "name3",value = "订单编号-gson"),
        @DynamicParameter(name = "name1",value = "订单编号1-gson"),
})
public Rest<HashMap> createOrder1235332(@RequestBody HashMap map){
    Rest<HashMap> r=new Rest<>();
    r.setData(map);
    return r;
}
```


注解`@DynamicResponseParameters`中有一个name属性,该值开发者可以理解为一个类名,如果你赋予name属性值,那么请保证全局唯一,或者干脆不赋值,交给`Knife4j`自动生成一个全局唯一的name值


同样对于数组、泛型等复杂的类型暂不提供支持。

 
 