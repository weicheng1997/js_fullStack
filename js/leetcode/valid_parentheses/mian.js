// 验证字符串号的正确性//      给代码注释/** */
/**
 * 功能是 决定字符串中的符号是正确的 isvalid
 * @params str 字符串，包含()[]{}
 */
const isValid = (str) =>{   //定义一个常量并赋值一个对象
    let sta = [], obj = {};
    obj["{"] = "}";   
    obj["["] = "]";
    obj["("] = ")";
    for(let i = 0; i < str.length;i++){
        // sta.push(str[i]);
        if(!sta.length){
            sta.push(str[i]);
        }
        else{
        // sta[str.length-1],str[i]
        if(str[i]===obj[sta[sta.length-1]]){
            sta.pop();
        }else{
            sta.push(str[i]);
        }
        }
        //1. 空栈先入栈 
        //2. 将栈顶元素匹配的消除规则元素与待入栈（循环到了，当前栈顶就是上一个元素）相比较，相同则pop 栈顶元素，否则入栈
        //3. 重复2 for循环
        //4. 判断数组的长度，返回bool值
        // 将符号字符入栈 stack 数组中下标为0的是栈底 str.length -1是顶部
    }
return !sta.length;

    console.log(sta);
}
console.log(isValid('()')); //true
console.log(isValid('()[]{}'))//true
console.log(isValid('{[]}'));//true
console.log(isValid('(])'));//false 无效的符号配对，

