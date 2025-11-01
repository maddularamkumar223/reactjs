// let myPromise = new Promise((res, rej) => {
//   let study = false;
//   if (study) {
//     res("Promise Fulfilled");
//   } else {
//     rej("Promise Rejected");
//   }
// });

// console.log(myPromise);

// console.log("Promise Started")
// let data = async () => {
//     try {
//         let response = await myPromise;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };
// data();
// console.log("Promise ended")

let products = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  console.log(data);
  data.map((value) => {
    let title = document.createElement("p");
    let image = document.createElement("img");
    image.src = value.image;
    title.innerHTML = value.title;
    document.body.append  (title, image);
  });
};
products();
