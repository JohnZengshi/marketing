
西金微营销项目

### 安装（更新） wepy 命令行工具。
  npm install wepy-cli -g

### 安装依赖包
  npm install

### 开发实时编译。
  npm run dev

### 生产压缩
  npm run build //上传代码时，请先执行此命令，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 



### wepy开发文档地址
  https://tencent.github.io/wepy/

### 小程序开发文档
  http://mp.weixin.qq.com/debug/wxadoc/dev/
  
### 目录结构

    ├── api                     //接口
    │   └── api.js              
    ├── app.wpy                 //入口文件
    ├── components              //组件
    ├── images                  //图片文件夹
    ├── pages                   //页面
    ├── plugins                 //插件
    ├── styles                  //样式
    │   ├── base.less             //公共样式
    │
    └── utils                   //工具类
        ├── util.js                 //工具
        └── request.js              //请求


    components
      ├── common                //公共组件
      │    ├── popupBottom          // 从下往上的弹窗
      │    ├── productSwiper        // 商品轮播图--带视频切换的
      ├──   


    pages
      │
      ├─ tabBar
      │    ├── my                   //我的主页面
      │    ├── store                //商城主页面
      │    ├── integralStore        //积分商城主页
      │    └── 
      │
      │
      │
      ├── my                    //我的下的子路由
      │   ├── record                //积分记录
      │   ├── location              //门店地址
      │   ├── shopList              //店铺列表
      │   ├── activity              //我的活动页面
      │   ├── signIn                //注册
      │   ├── birthday              //修改生日
      │   ├── userName              //修改姓名
      │
      │ 
      ├── store                 //商城下的子路由
      │   ├── 
      │   ├── 
      │   ├── 
      │   ├── 
      │   ├── 
      │
      ├── integralStore         //积分商城下的子路由
      │   ├── integralDetails      // 积分详情-商城
      │   ├── discountCoupon        //优惠券
      │   ├── 
      │   ├── 
      │   ├── 
      │
      ├── common                //公共跳转
      │    ├── map              // 地图
      │    ├── 
      │



// 暂无商品
http://jzm-1252389350.cosgz.myqcloud.com/iconHeaded/no-product-data1536731185542.png

// 暂无电子信息
http://jzm-1252389350.cosgz.myqcloud.com/iconHeaded/no-bill-data1536731283409.png