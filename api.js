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


// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function loaddata(){
//     fetch(url)
//     .then (response =>response.json())
//     .then(json=>console.log(json))
// }

// function loaddynamic(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displaydata(data))

// }
// function displaydata(data){
//     const ul = document.getElementById('list');
//     for(const user of data){
//         console.log(user.name);
//         const li =document.createElement('li');
//         li.innerText=user.name;
//         ul.appendChild(li);

//     }
// }



function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data => displaypost(data) )
}

function displaypost(posts){
    const Postcoinatiner=document.getElementById('hudai')
    for(const post of posts){
    const postdiv=document.createElement('div');
    console.log(post);
    postdiv.innerHTML =`
        <h4> user-${post.userId}</h4>
        <h5> post-${post.title}</h5>
        <p> tirtel-</p>
    `;
    Postcoinatiner.appendChild(postdiv);
    
    }
}
a
loadpost()