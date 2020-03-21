
// let faltten = (arr)=>{
//     let index=0;
//     arr = arr.flat(Infinity)  //[1,2,3,4,5]
//     return {
//       next(){
//         return {
//           value:arr[index++],
//           done:index>arr.length?false:true
//         }
//       }
//     }

//   }
//   const numbs = faltten([1,[2,[3,[4,[5]]]]]);
//   console.log(numbs.next().value)//1
//   console.log(numbs.next().value)//2
//   console.log(numbs.next().value)
//   console.log(numbs.next().value)
//   console.log(numbs.next().value)



// let arr = [1, 2, 3, 4]

// let newArr = arr.reduce((p, n, i) => {
//     console.log(p, n, i)
// })

// // 题目2：
// // 使用es5实现数组的reduce方法
// let arr = [1, 2, 3];
// Array.prototype.myReduce = function (cb, initVal) {
//     let nextIndex = initVal ? 0 : 1;
//     initVal = initVal ? initVal : this[0];
//     for (; nextIndex < this.length; nextIndex++) {
//         initVal = cb(initVal, this[nextIndex])
//     }
//     return initVal;
// }

// let sum = arr.myReduce((prev, next) => {
//     return prev + next
// }, 10)
// console.log(sum)

// // 题目1：
// // 使用es5实现Array.from方法，并且支持二个参数
// let divs = document.querySelectorAll("div");
// let myArrayfrom = (likeArr, cb) => {
//     // 1\类数组 转换为 数组
//     let arr = [].slice.call(likeArr);
//     // 2\判断有没有cb  cb map   没有 return arr
//     if (cb) {
//         return arr.map((item, index, arr) => {
//             return cb(item, index, arr)
//         })
//     } else {
//         return arr
//     }
// }
// let arr = myArrayfrom(divs, (item) => {
//     return 1;
// })

// console.log(arr)







//
// Array.myIsArray = function (val) {
//     return Object.prototype.toString.call(val) === "[object Array]"
// }

// Array.prototype.myKeys = function () {
//     let newArr = [];
 
//     this.forEach((item, index) => {
//         newArr.push(index)
//     })
//     return newArr;
// }
// //
// Array.prototype.myEntries = function () {
//     let newArr = [];
//     this.forEach((item, index) => {
//         let arr1=[];
//         arr1.push(index)
//         arr1.push(item)
//         newArr.push(arr1)
//     })
//     return newArr;
// }
// console.log([1, 2, 3].myEntries())


const arr = ['a', 'b', 'c', 'd'];

// obj = {
//     "a":0,"b":1
// }

let obj={};
arr.reduce((p,n,i)=>{
    console.log(p,n,i)
    return 5;
    // obj[n] = i;
    // console.log(obj)
},0)