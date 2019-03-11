// let arr = [];//数据集合
// arr.push("{");
// console.log(arr,arr.length);//打印数组和数组长度
// console.log(typeof arr);
// arr.push("}")//数组类型是object
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("]");//shift将[插入到数组的最前面
// console.log(arr);
// arr.shift("[");//shift移除第一个元素
// console.log("---",arr);
// arr.forEach(item =>{
//     console.log(item);
// })

// 如何来做匹配规则 if else (){}[]
//对象的第二种类型JSON Object
let obj = {};
obj["{"] = "}";   //.或[]都可以添加或读取属性
obj["["] = "]";
obj["("] = ")";
// "()";sta[0] = "(" ")"
let sta = ["( "];
let s = ")";
if(obj[sta[sta.length-1]] ===s){
    sta.pop();
}
console.log(!sta.length);