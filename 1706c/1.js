// console.log(NaN==NaN)
// console.log(Object.is(NaN,NaN))

// let arr1 = [1,2,3];  
// let arr2 = [11,12,13];
// console.log(arr1.concat(arr2))
// // 合并数组
// console.log([...arr1,...arr2])


// 合并对象  ...浅拷贝  
// let obj1 = {a:1,b:2,c:{aa:11,bb:22}}

// let obj2 = {...obj1,aa:1,bb:2};
// // let obj3 = {...obj1,...obj2};
// obj1.a=123;
// obj1.c.bb=55;
// console.log(obj2)

// console.log(Object.assign({},obj1,obj2))
// console.log(Object.assign(obj1,obj2))

// console.log(obj1)


// let obj1 = {a:1,b:2,c:{aa:11,bb:22}}
let obj1 = {a:1,b:2,c:33} //序列化字符串  a=1&b=2&c=33
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
console.log(Object.entries(obj1).map(item=>item.join("=")).join("&"))
