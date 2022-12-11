/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.github.xiaoymin.knife4j.core;

import com.github.xiaoymin.knife4j.aggre.core.pojo.BasicAuth;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/12/05 13:09
 * @since:knife4j-aggregation-desktop 1.0
 */
public class AggregationDesktopConf {
    
    /**
     * 数据目录DIR文件
     */
    public static final String DATA_DIR = "/knife4j/data";
    /**
     * 默认端口号
     */
    private Integer port = 18006;
    /**
     * MetaDataMonitor组件刷新频率,单位:毫秒(data文件夹变更时触发Knife4jAggregationDesktop将从硬盘properties配置文件加载文档),默认是5000毫秒
     */
    private long duration = 5000L;
    
    /**
     * 静态资源
     */
    private String statics = "gif,png,bmp,jpeg,jpg,html,htm,shtml,mp3,wma,flv,mp4,wmv,ogg,avi,doc,docx,xls,xlsx,ppt,txt,pdf,zip,exe,tat,ico,css,js,swf,apk,ts,m3u8,json";
    /**
     * 基础文档Basic
     */
    private BasicAuth basic;
    
    public String getStatics() {
        return statics;
    }
    
    public void setStatics(String statics) {
        this.statics = statics;
    }
    
    public Integer getPort() {
        return port;
    }
    
    public void setPort(Integer port) {
        this.port = port;
    }
    
    public BasicAuth getBasic() {
        return basic;
    }
    
    public void setBasic(BasicAuth basic) {
        this.basic = basic;
    }
    
    public long getDuration() {
        return duration;
    }
    
    public void setDuration(long duration) {
        this.duration = duration;
    }
}
