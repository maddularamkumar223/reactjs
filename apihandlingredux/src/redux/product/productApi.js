import axios from "axios";

let baseUrl = "http://localhost:3000/products";
export let fetchProductsData = () => axios.get(baseUrl);
export let addProducts = (product) => axios.post(baseUrl, product);
export let editProduct = (id, product) =>
  axios.put(`${baseUrl}/${id}`, product);

export let deleteProduct = (id) => axios.delete(`${baseUrl}/${id}`);
