const inputUser = document.getElementById("input-user");
const listGroup = document.getElementById("list-group");
const form = document.querySelector("form");
let list_item = [];
const switchDarkMode = document.getElementById('dark-mode');

function renderTodo(item) {
  return listGroup.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <h4>${item}</h4>
    <span class="fs-4 text-danger"><i class="bi bi-x-square-fill" id="remove"></i></span>
  </li>`;
}

// Local Storage
if (localStorage.getItem("TO DO ITEMS")) {
  const itemLocalStorage = JSON.parse(localStorage.getItem("TO DO ITEMS"));
  itemLocalStorage.forEach(function (itemTodo) {
    renderTodo(itemTodo);
    list_item.push(itemTodo);
  });
}


function manageLocalStorage(action, item) {
  switch (action) {
    case 'TAMBAH':
      list_item.push(item);
      break;
    case 'HAPUS':
      list_item = list_item.filter(function (todoItem) {
        return todoItem != item
      });
      break;
  }

  localStorage.setItem("TO DO ITEMS", JSON.stringify(list_item));
}

// Todo List
form.addEventListener("submit", function (event) {

  renderTodo(inputUser.value);

  

  // Menambahkan item baru ke local storage
  manageLocalStorage("TAMBAH", inputUser.value);

  inputUser.value = "";
  event.preventDefault();

});

listGroup.addEventListener("click", function (event) {
  if (event.target.id == "remove") {
    event.target.parentElement.parentElement.remove();
    manageLocalStorage("HAPUS", event.target.parentElement.parentElement.textContent.trim());
  }
  
});





// dark mode
switchDarkMode.addEventListener('change', function () {

  document.body.classList.toggle('darkMode');
  document.querySelector('.card').classList.toggle('darkMode');
  document.querySelector('.btn').classList.toggle('darkMode');
  switchDarkMode.classList.toggle('darkMode');

});

// Rest API
// fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa")
// .then((res) => console.log(res.json()));

// .then((data) => console.log(data));

// let dataPOST ={
//   name: "Aan",
//   city: "Brebes",
//   hobies:["sport", "sleeping"],
// };

// let fetchOptions = {
//   method : "POST",
//   header :{
//   "Content-Type" : "application/json",
// },
// "body": JSON.stringify(dataPOST),
// };

// fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa", fetchOptions),
// .then((response) => response.json())
// .then((data) =>{ 
//   console.log(data);
// })
// .catch((error)=> {
//   console.log(error);
// });

// const baseUrl = "https://crudcrud.com/api/";
// const apiKey = "fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa";
// const url = baseUrl + apiKey;
// const endpointMahasiswa = `${url}/mahasiswa`;
// const endpointDosen = `${url}/dosen`;

// const handleError = (error) => console.log(error);
// const handleSuccess = (result) => console.log(result);

// let dataPost ={
//   Name: "Aan",
//   city: "Brebes",
//   hobbies: ["sport", "Playing Game"],
// };

// let fetchOptions = {
//  " method": "Post",

//   "headers": {
//       "Content-Type": "application/json",
//   },
//   "body": JSON.stringify(dataPost)
// };
// fetch("https://crudcrud.com/api/fa9ad1bf7f014d1ab1679941634d46f5/mahasiswa",fetchOptions)
// .then((res) => res.json())
// .then((data) => console.log(data));