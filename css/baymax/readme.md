# 相对单位，为了自适应 vh
 不同的移动设备
 750px
 iphone xr 小手机
 小米，华为 
 iPhone max 大手机
 小米，华为
 vw，vh 解决按比例分配宽/高 20%=20vh 主要容器

 em 移动端少用px（像素）  一般用em  rem 这俩用于细致的每个盒子或盒子模型的大小等比例定义。
 em 相对于自身的字体大小来比例
 10em 10*14px=140px
 rem 相对于html的根元素的fontSize 
 :before :after 叫做伪元素
 没有标签，但却可以像真正的元素一样 来在页面上占位子。 
 dom 文档流里不需要写这个元素，副作用，不会影响到内容的显示
 使用css来声明，content属性是必需的，
 html 默认的字体大小是16px
 如果没有设置，会用父级，或body font-size