//

// ! Object destructuring

// let details = {
//     name:"Ravi Chandra",
//     age :30
// }

// console.log(details.name)
// console.log(details["age"])

// let {age} = details;

// console.log(age)
// console.log(name)

// ! Nested array destructuring

// let bags = [["food"],["clothes"],[["shoes",["sandals"]]]]

// let [bag1,bag2,bag3] = bags

// let [food] = bag1
// console.log(food)

// let [[food1],[clothes]] = bags
// console.log(food1)
// console.log(clothes)

// let [,,[footware]] = bags;

// console.log(footware)

// let [,,[[,[sandals]]]] = bags
// console.log(sandals)

// ! Nested level destructuring

// let details = {
//   name: "Ravi Chandra",
//   age: 30,
//   place: {
//     village: "Sattenapalle",
//     city: "New york",
//     pinCode: 11111,
//   },
//   skills: [
//     {
//       frontend: ["React js", "Angular Js"]
//     },
//     {
//       backend: ["node js", "express js"]
//     },
//     {
//       database: ["oracle", "mongo db"]
//     },
//   ],
// };

// let {
//   name,
//   age,
//   place: { village, city, pinCode },
//   skills: [, , angular],
// } = details;

// // let {village,city,pinCode} = place
// console.log(name);
// console.log(age);
// console.log(village);
// console.log(city);
// console.log(pinCode);
// console.log(angular);

// let {
//   skills: [, , js],
// } = details;
// console.log(js);

let details = {
  name: "Ravi Chandra",
  age: 30,
  place: {
    village: "Sattenapalle",
    city: "New york",
    pinCode: 11111,
  },
  skills: [
    {
      frontend: ["React js", "Angular Js"],
    },
    {
      backend: ["node js", "express js"],
    },
    {
      database: ["oracle", "mongo db"],
    },
  ],
};

let {
  skills: [
    ,
    ,
    {
      database: [, mongo_db],
    },
  ],
} = details;
console.log(mongo_db);
