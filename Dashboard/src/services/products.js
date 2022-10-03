const baseURL = "http://localhost:3000/api/products";
export async function getProducts() {
  try {
    const response = await fetch(baseURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.productCount;
  } catch (error) {
    console.log(error);
    return [];
  }
} /* 

export async function getOne(id) {
  try {
    let endpoint = `${baseURL}/${id}`;
    let query = await fetch(endpoint);
    let data = await query.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const getProducts = async () => {
  let url = "http://localhost:3000/api/products";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
 */
