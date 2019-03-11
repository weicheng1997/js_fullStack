数值 字符串 布尔值（bool） null undefined 这些都是js的基本数据类型，es6中还有一个 一共6钟基础数据类型，还有一组复杂数据类型
除了基本类型之外其他的都是object（对象） Array是可遍历的对象for（）
JSON Object 对象字面量 可枚举的对象
function 也是对象
document.querySelectorAll('a')    document是类数组
arr.push() arr是对象 调用对象上的方法.push
- 字符串是字符的数组 
 具有.length属性 有str[0]访问的权力
 - 运算符匹配的问题，选择数组做为数据结构
 只在顶部做操作时 (push pop) 实现 栈 也叫做Stack
 算法+数据结构
1. ( sta = []表示这个栈现在是 空 的
 ( sta.push("(") 入栈 sta.length = 1
 sta[0] = "("
2. ) 栈不为空 跟顶部元素进行比较，如果是一对
 就把顶部元素pop()
 或者 push 为新的顶部
3. sta 为空 true | false 