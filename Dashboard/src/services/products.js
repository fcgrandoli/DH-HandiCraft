const baseURL = "http://localhost:3000/api/products";

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
