/*const baseURL = "http://localhost:3000/api/products"
export async function getAll(page){
    try{
    let endpoint = `${baseURL}?page=${page}`
    let query = await fetch (endpoint)
    let data = await query.json()
    return data.results
} catch (error){
    console.log(error)
    return []
}
}

export async function getOne(id){
    try{
    let endpoint = `${baseURL}/${id}`
    let query = await fetch (endpoint)
    let data = await query.json()
    return data.results
} catch (error){
    console.log(error)
    return []
}
} */