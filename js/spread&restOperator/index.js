// let arr = [1,2,3,4,5]

// let [a,b,...c]= arr
// console.log(a)
// console.log(b)
// console.log(c)

// let add = (a,b,...c) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// add(10,20,30,40)

let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];

let arr3 = [...arr, ...arr1];
console.log(arr3);

let obj1 = {
    name:"Dinga"
}
let obj2 = {
    age:23
}

let obj3 = {
    ...obj1,...obj2
}
console.log(obj3)

let {...data} = obj3
console.log(data)
let {name,age} = data
console.log(name)