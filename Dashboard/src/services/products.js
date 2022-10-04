const baseURL = "http://localhost:3000/api/products";
const baseURLCategories = "http://localhost:3000/api/products/summary";

export async function getProducts() {
  try {
    let endPoint = `${baseURL}`;
    let query = await fetch(endPoint);
    let data = await query.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function getProductsByCategory() {
  try {
    let endPoint = `${baseURLCategories}`;
    let query = await fetch(endPoint);
    let data = await query.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}