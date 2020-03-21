//箭头函数
// let fn = ()=>(a,b)=>b=>5+b;

// function fn(){
//     return function(a,b){
//         return function(b){
//             return 5+b;
//         }
//     }
// }




// function sum(a){
//     return function a(a){
//         return function c(a){
//             a++;
//             return 5;
//         }
//     }
// }

// let sum = a=>a=>a=>{
//     a++;
//     return 5;
// }


// function sum(){
//     console.log(this)
// }


// let obj = {
//     fn(){
//         console.log(this)
//         let sum=()=>{
//             console.log(this)
//         }
//         sum()
//     }
// }
// obj.fn()
// sum()
// sum.call(1)
// console.log(window)
// console.log(global)


// var name = 'window';
// let sayname = ()=>{
//     console.log(this.name);
// }
// let obj = {
//     name:'zs',
//     show1:()=>{
//         console.log(this);
//     },
//     show(){
//         (()=>{
//             console.log(this.name);
//         })();
//     }
// };
// obj.show();


function sum() {
    // console.log(arguments)
    // console.log([...arguments])
    // console.log(Array.from(arguments))
    return eval([...arguments].join("+"))
}

function sum(...arg) {
    // console.log(arg)
    return eval(arg.join("+"))
}
console.log(sum(1, 2, 3, 4, 5))
