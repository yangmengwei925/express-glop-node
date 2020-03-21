// 对象  class
// 构造函数几重角色
// - 普通函数调用 Person()
// - 构造函数调用  new Person();
// - 普通对象使用  Person.sy()

// function Person(){
//     console.log(1)
//     this.eat = function(){
//         console.log("eat")
//     }
// }
// Person.sy = function(){
//     console.log(22)
// }
// Person()
// Person.sy()

// Person.prototype.study = function(){
//     console.log("study")
// }
// let person = new Person();
// let person1 = new Person();
// person.eat()
// person.study()
// person1.study()

// es6  用 class定义一个类
// class Person {//只有方法 没有属性  自动都在原型对象上面绑定
//     constructor(name, age) {  //构造器 接收参数  new的时候自动指向
//         this.name = name;
//         this.age =age;
//         // this.init()
//     }
//     init() {
//         console.log(this.name, this.age)
//         console.log("eat")
//     }

// }
// // let p = new Person("zs", 18);
// // p.eat()
// class Zs extends Person{
//     constructor(x,y){//属性  自动调用
//         super(x,y);  //接收父类的  通过super传递给父类所需要的参数
//         this.x = x;
//         this.sleep()
//     }
//     sleep(){  //原型上面的方法  this.sleep()
//         console.log("sleep")
//     }
//     static sleep(){ //静态方法  Zs.sleep()
//         console.log("sleep-static")
//     }
// }

// // let p = new Zs("11", 18);
// // p.sleep()
// // p.init()

// Zs.sleep()



let iterable = {
    a: 'a',
    b: 'b',
    c: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
 