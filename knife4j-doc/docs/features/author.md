# 3.3 接口添加作者


:::caution 温馨提醒
增强功能需要通过配置yml配置文件开启增强,自2.0.7开始
```yml
knife4j:
  enable: true
```
:::

有时候在开发接口时,我们希望给该接口添加一个作者,这样前端或者别个团队来对接该接口时,如果该接口返回的数据或者调用有问题,都能准确找到该人,提升效率

添加作者需要使用`knife4j`提供的增强注解`@ApiOperationSupport`


接口代码示例如下：

```java
@ApiOperationSupport(author = "xiaoymin@foxmail.com")
@ApiOperation(value = "写文档注释我是认真的")
@GetMapping("/getRealDoc")
public Rest<RealDescription> getRealDoc(){
    Rest<RealDescription> r=new Rest<>();
    try {
        TimeUnit.SECONDS.sleep(1);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    r.setData(new RealDescription());
    return r;
}
```

在文档中显示效果如下：

![](/knife4j/images/2-0-2/debug-3.png)


在2.0.3版本中,收到开发者反馈希望能在Controller上增加作者的注解

所代表的意思是该Controller模块下所有的接口都是该作者负责开发,当然用@ApiOperationSupport的注解也能覆盖

因此,在2.0.3版本中新增加了`@ApiSupport`注解,该注解目前有两个属性,分别是author(作者)和order(排序)

使用代码示例：
```java
@Api(tags = "2.0.3版本-20200312")
@ApiSupport(author = "xiaoymin@foxmail.com",order = 284)
@RestController
@RequestMapping("/api/nxew203")
public class Api203Constroller {
    
    
}
```
![](/knife4j/images/knife4j/plus/author.png)

在文档中显示效果如下：

![](/knife4j/images/2-0-2/debug-3.png)

 开发者如果遇到排序不生效的问题，可以通过检查接口返回的OpenAPI规范中，分组`path`节点下是否包含`x-author`的扩展属性
 
