async function products() {
  let response = await fetch("https://fakestoreapi.com/products");
  let productData = await response.json()
  console.log(productData);

  productData.map(value => {
    let title = document.createElement('p')
    title.innerHTML = value.title
    document.body.appendChild(title)
  })
}
products();


