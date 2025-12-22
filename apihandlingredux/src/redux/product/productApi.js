import axios from "axios";

let baseUrl = "http://localhost:3000/products";
export let fetchProductsData = () => axios.get(baseUrl);
export let addProducts = (product) => axios.post(baseUrl, product);
