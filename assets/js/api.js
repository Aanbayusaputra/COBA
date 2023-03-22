// fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa", {
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


    // .then((response) => response.json())
    // .then((data) => console.log(data));
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

fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa",
fetchOptions)

.then((response) => response.json())
.then((data) => console.log(data));

fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa")

.then((response) => response.json())
.then((data) => console.log(data));