// fetch("https://crudcrud.com/api/14df41df9d6a4c4181a5e57db482edd2/mahasiswa", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
        
//         name: "Luffy",
//         city: "Surabaya",
//         hobies: ["Badminton", "Slepping"],
//     })
// })


//     .then((response) => response.json())
//     .then((data) => console.log(data));
let dataPost = {
    name: "fizi",
    city: "Brebes",
    hobies:["Sport", "Slepping"],
};

let fetchOptions ={
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dataPost)
};

fetch("https://crudcrud.com/api/14df41df9d6a4c4181a5e57db482edd2/mahasiswa",
fetchOptions)

.then((response) => response.json())
.then((data) => console.log(data));

fetch("https://crudcrud.com/api/14df41df9d6a4c4181a5e57db482edd2/mahasiswa")

.then((response) => response.json())
.then((data) => console.log(data));