async function fetchAllUsers(){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/message/')
    const json = await response.json()
    return json
}

// async function addNewUser(data){
//     const response = await fetch('http://localhost:3000/message/',
//     {
//      method: 'POST',
//      headers: {
//          'Content-Type':'application/json'
//      },
//      body: JSON.stringify(data)
//     }
//     )
    
//     if(!response.ok){
//      console.log('error al hacer la inserción')
//     }
//     const addNewUser = await response.json()
//     return addNewUser
// }
// async function login(){

//     const response = await fetch('http://localhost:3000/signIn/',
// {
//   method:'POST',
//   headers: {
//     'Content-Type':'application/json',
//   },
//   body: JSON.stringify( {email,  password } )  
// })

// .then(response => response.json())
//   .then(data => {
//     if(data.token){
//       // muestra el token por consola
//       console.log(data.token);
//       // guarda el token en localstorage
//       localStorage.setItem("authToken", data.token);
//     }
//   })
// }

    
   
    
   





export {fetchAllUsers, addNewUser}