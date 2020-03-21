//数组去重
let arr = [1,2,1,2,3,4,5,NaN,NaN,undefined,undefined,null];
// console.log(new Set(arr))
console.log([...new Set(arr)])
function unique(arr){
    let obj = {};
    arr.forEach(item=>{
        obj[item] = item;
    })
    return Object.values(obj)
}
console.log(unique(arr))


// let set = new Set();
// console.log(set)
// set.add(1)
// set.add(2)
// set.add(3)
// console.log(set.has(3))
// set.delete(3)
// set.clear()
// console.log(set)


// let map = new Map();
// map.set("a",1)
// map.set("b",1)
// map.set("c",1)
// console.log(map.get("a"))
// console.log(map.has("c"))
// console.log(map.delete("c"))
// console.log(map.clear())

// console.log(map)


