//  const baseURL = "http://localhost:3000/api/users" // api y user 

//   export async function getAll(){
//      //nada en vez de page
//         let endpoint =`$(baseURL)`

//      let response = await fetch (endpoint)

//     let data = await response.json()

//      return data

//  }

//  export async function getOne(id){
//      try{
//      let endpoint = `${baseURL}/${id}`
//      let query = await fetch (endpoint)
//      let data = await query.json()
//      return data.results
//  } catch (error){
//      console.log(error)
//      return []
//  }
//  } 