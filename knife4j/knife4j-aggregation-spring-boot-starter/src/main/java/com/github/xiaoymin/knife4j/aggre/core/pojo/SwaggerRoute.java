/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.core.pojo;

import cn.hutool.core.util.ReUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.digest.MD5;
import com.github.xiaoymin.knife4j.aggre.core.RouteDispatcher;
import com.github.xiaoymin.knife4j.aggre.eureka.EurekaInstance;
import com.github.xiaoymin.knife4j.aggre.eureka.EurekaRoute;

import java.util.Objects;

/***
 * 最终返回前端Swagger的数据结构
 * @since:knife4j-aggregation-spring-boot-starter 2.0.8
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2020/10/31 9:34
 */
public class SwaggerRoute {

    private String name;
    private String uri;
    private String header;
    private String location;
    private String swaggerVersion;
    private String servicePath;
    private boolean debug=true;
    /**
     * 是否本地请求,本地请求在前端无需添加Header,否则会走代理
     */
    private boolean local=false;

    public SwaggerRoute() {
    }
    public SwaggerRoute(CloudRoute cloudRoute){
        if (cloudRoute!=null){
            this.header= MD5.create().digestHex(cloudRoute.toString());
            this.name=cloudRoute.getName();
            if (StrUtil.isNotBlank(cloudRoute.getUri())){
                //判断
                if (!ReUtil.isMatch("(http|https)://.*?$",cloudRoute.getUri())){
                    this.uri="http://"+cloudRoute.getUri();
                }else{
                    this.uri=cloudRoute.getUri();
                }
            }
            if (StrUtil.isNotBlank(cloudRoute.getServicePath())&&!StrUtil.equals(cloudRoute.getServicePath(), RouteDispatcher.ROUTE_BASE_PATH)){
                //判断是否是/开头
                if (!StrUtil.startWith(cloudRoute.getServicePath(),RouteDispatcher.ROUTE_BASE_PATH)){
                    this.servicePath= RouteDispatcher.ROUTE_BASE_PATH+cloudRoute.getServicePath();
                }else{
                    this.servicePath=cloudRoute.getServicePath();
                }
            }
            this.location=cloudRoute.getLocation();
            this.swaggerVersion=cloudRoute.getSwaggerVersion();
        }
    }

    public SwaggerRoute(EurekaRoute eurekaRoute, EurekaInstance eurekaInstance){
        if (eurekaRoute!=null&&eurekaInstance!=null){
            this.header= eurekaRoute.pkId();
            this.name=eurekaRoute.getServiceName();
            if (StrUtil.isNotBlank(eurekaRoute.getName())){
                this.name=eurekaRoute.getName();
            }
            //如果端口获取不到，给一个默认值80
            this.uri="http://"+eurekaInstance.getIpAddr()+":"+ Objects.toString(eurekaInstance.getPort().get("$"),"80");
            if (StrUtil.isNotBlank(eurekaRoute.getServicePath())&&!StrUtil.equals(eurekaRoute.getServicePath(), RouteDispatcher.ROUTE_BASE_PATH)){
                //判断是否是/开头
                if (!StrUtil.startWith(eurekaRoute.getServicePath(),RouteDispatcher.ROUTE_BASE_PATH)){
                    this.servicePath= RouteDispatcher.ROUTE_BASE_PATH+eurekaRoute.getServicePath();
                }else{
                    this.servicePath=eurekaRoute.getServicePath();
                }
            }
            this.location=eurekaRoute.getLocation();
            this.swaggerVersion=eurekaRoute.getSwaggerVersion();
        }
    }
    public boolean isLocal() {
        return local;
    }

    public void setLocal(boolean local) {
        this.local = local;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSwaggerVersion() {
        return swaggerVersion;
    }

    public void setSwaggerVersion(String swaggerVersion) {
        this.swaggerVersion = swaggerVersion;
    }

    public boolean isDebug() {
        return debug;
    }

    public void setDebug(boolean debug) {
        this.debug = debug;
    }

    public String getServicePath() {
        return servicePath;
    }

    public void setServicePath(String servicePath) {
        this.servicePath = servicePath;
    }
}