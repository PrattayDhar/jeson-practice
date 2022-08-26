// Jeson

const user ={id:12,Name:'Hasan',Job:'sleep'}
const stringifyid = JSON.stringify(user);


const shop={
    owner:'hasan',
    Adress:{
        street:'uganada',
        city:'Dhaka',
        country:'Bangladesh'
    },
    product:['laptop','mobile','monitor',
],
revenue:300000,
isopen:true,
isnew:false
}
// console.log(shop);
const shopjson=JSON.stringify(shop);
// console.log(shopjson);

// JSON placeholder, GET data, display data on UI

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));


const url = 'https://jsonplaceholder.typicode.com/todos/1'

function loaddata(){
    fetch(url)
    .then (response =>response.json())
    .then(json=>console.log(json))
}