let products = [
 {productId:501,title:"Leather Wallet",price:45,category:"Fashion",rating:4.2,isFeatured:false},
 {productId:502,title:"Smart Watch",price:220,category:"Electronics",rating:4.8,isFeatured:true},
 {productId:503,title:"Gaming Mouse",price:60,category:"Electronics",rating:4.1,isFeatured:false},
 {productId:504,title:"Wireless Earbuds",price:150,category:"Electronics",rating:4.9,isFeatured:true},
 {productId:505,title:"Coffee Maker",price:120,category:"Home & Kitchen",rating:4.4,isFeatured:true},
 {productId:506,title:"Charging Cable",price:15,category:"Electronics",rating:3.2,isFeatured:false},
 {productId:507,title:"Blender",price:80,category:"Home & Kitchen",rating:3.8,isFeatured:true},
 {productId:508,title:"Desk Lamp",price:35,category:"Home & Kitchen",rating:4.0,isFeatured:false},
 {productId:509,title:"Backpack",price:70,category:"Fashion",rating:4.5,isFeatured:true},
 {productId:510,title:"Shoes",price:95,category:"Fashion",rating:4.3,isFeatured:false},
 {productId:511,title:"T-Shirt",price:25,category:"Fashion",rating:3.7,isFeatured:false},
 {productId:512,title:"Microwave",price:180,category:"Home & Kitchen",rating:4.6,isFeatured:true},
 {productId:513,title:"Keyboard",price:110,category:"Electronics",rating:4.4,isFeatured:false},
 {productId:514,title:"Monitor",price:250,category:"Electronics",rating:4.7,isFeatured:true},
 {productId:515,title:"Water Bottle",price:20,category:"Home & Kitchen",rating:3.4,isFeatured:true}
];

//TASK1
function display_products() {
let container = document.createElement("div");
container.classList="h-100 overflow-y-scroll text-center"
let len = products.length;
for(let i = 0; i < len; i++) {
let productDiv = document.createElement("div");
productDiv.innerHTML = `<p><b>Product-ID:</b> ${products[i].productId}</p>
<p><b>Title:</b> ${products[i].title}</p>
<p><b>Price:</b> $${products[i].price}</p>
<p><b>Category:</b> ${products[i].category}</p>
<p><b>Rating:</b> ${products[i].rating} Stars</p>
<p><b>Featured:</b> ${products[i].isFeatured}</p>
<hr>
`;
container.appendChild(productDiv);
    }
return container;
}



//TASK2
function total_price(){
let container = document.createElement("div");
container.classList="h-12 text-center"
  let sum=0;
  let len=products.length;
  for(let i=0;i<len;i++){
    sum = sum + products[i].price;
  }
  container.innerHTML = `<p><b>Total Catalog Value: $</b> ${sum};</p> <hr>`;
  return container;
}


//TASK3
function premium_products(){
let container = document.createElement("div");
container.classList="h-30 overflow-y-scroll text-center"
  let len=products.length;
  for(let i=0;i<len;i++){
    if(products[i].price>100){
    let productDiv = document.createElement("div");
productDiv.innerHTML = `<p>${products[i].title}  - ${products[i].price}</p><hr>`;
container.appendChild(productDiv);
    }
}
return container;
  }


//TASK4
function discount_price(){
  let container = document.createElement("div");
container.classList="h-90 overflow-y-scroll text-center"
   let len=products.length;
  for(let i=0;i<len;i++){
    let discount=products[i].price*0.90;
    let productDiv = document.createElement("div");
productDiv.innerHTML = `<p>${products[i].title} - Original: $${products[i].price} | Promo Price : ${discount}</p><hr>`;
container.appendChild(productDiv);
  }
return container;
}


//TASK5
function category_count_featured(){
let len= products.length;
let cat={};
let container = document.createElement("div");
container.classList="h-20 text-center overflow-y-scroll";
    for(let i=0;i<len;i++){
      if(products[i].isFeatured == true){
            if(cat[products[i].category]){
                cat[products[i].category]++;
            }else{
                cat[products[i].category]=1;
            }
          }
        }
        let keys= Object.keys(cat);
    let objlen = keys.length;
    for(let i=0;i<objlen;i++){
      let productDiv = document.createElement("div");
productDiv.innerHTML = `<p>${keys[i]} : ${cat[keys[i]]}</p><hr>`;
container.appendChild(productDiv);
  }
return container;
}


//TASK6
function highest_rated_product(){
  let container = document.createElement("div");
container.classList="h-10 text-center";
  let len=products.length;
  let max = products[0];
  for(let i=0;i<len;i++){
    if(products[i].rating>max.rating){
      max = products[i];
    }
  }
  container.innerHTML=`<p>Top Rated Product : <b>${max.title}</b> - <b>${max.rating}</b>Stars<p>`;
  return container;
}


//TASK7
function satisfaction_status(){
let container = document.createElement("div");
container.classList="h-30 text-center overflow-y-scroll";
  let len=products.length;
  for(let i=0;i<len;i++){
    let productDiv = document.createElement("div");
    if(products[i].rating>=4.5){
     productDiv.innerHTML = `<p>${products[i].title} - Highly Recommended</p>`;
     container.appendChild(productDiv);
    }
    else if(products[i].rating>=3.5 && products[i].rating<=4.4){
      productDiv.innerHTML = `<p>${products[i].title} - Satisfactory</p>`;
     container.appendChild(productDiv);
     }
    else{
      productDiv.innerHTML = `<p>${products[i].title} - Needs Review</p>`;
     container.appendChild(productDiv);
    }
  }
  return container;
}


//TASK8
function status_count(){
let h=0;
let s=0;
let n=0;
let len=products.length;
let container = document.createElement("div");
container.classList="h-20 text-center";
  for(let i=0;i<len;i++){
    if(products[i].rating>=4.5){
      h++;
    }
    else if(products[i].rating>=3.5 && products[i].rating<=4.4){
      s++;
    }
    else{
      n++;
    }
  }
  container.innerHTML = `<p>Highly Recommended Items : ${h}<p>
  <p>Satisfactory Items : ${s}</p>
  <p>Needs Review Items : ${n}</p>`;
return container;
}


//TASK9
function display_featured_items(){
  let container = document.createElement("div");
container.classList="h-20 text-center overflow-y-scroll";
  let len=products.length;
  let productDiv = document.createElement("div");
  productDiv.innerHTML=`<p><b>----Featured Items----</b></p>`;
  container.appendChild(productDiv);
  for(let i=0;i<len;i++){
    if(products[i].isFeatured==true){
      let productDiv = document.createElement("div");
      productDiv.innerHTML=`<p>${products[i].title}</p><hr>`;
      container.appendChild(productDiv);
    }
  }
   return container;
}


//TASK10
function store_report(){
  let container = document.createElement("div");
  container.classList="h-50 text-center";
  let product1 = document.createElement("div");
  let product2 = document.createElement("div");
  let product3 = document.createElement("div");
let product4 = document.createElement("div");
  product1.innerHTML=`<p>--------------<b>STORE-REPORT</b>------------</p>
  <p>Total Catalog Items : ${products.length}</p>`;
  product2.appendChild(status_count());
  product3.appendChild(highest_rated_product());
  product4.innerHTML=`<p>--------------***--------------</p>`;
  container.appendChild(product1);
  container.appendChild(product2);
  container.appendChild(product3);
  container.appendChild(product4);
  return container;
}

// UI------------------------------------
let mainframe = document.getElementById("main-frame");

let searchbar1 = document.createElement("button");
searchbar1.innerText="TASK-1";
searchbar1.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar2 = document.createElement("button");
searchbar2.innerText="TASK-2";
searchbar2.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar3 = document.createElement("button");
searchbar3.innerText="TASK-3";
searchbar3.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar4 = document.createElement("button");
searchbar4.innerText="TASK-4";
searchbar4.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar5 = document.createElement("button");
searchbar5.innerText="TASK-5";
searchbar5.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar6 = document.createElement("button");
searchbar6.innerText="TASK-6";
searchbar6.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar7 = document.createElement("button");
searchbar7.innerText="TASK-7";
searchbar7.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar8 = document.createElement("button");
searchbar8.innerText="TASK-8";
searchbar8.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar9 = document.createElement("button");
searchbar9.innerText="TASK-9";
searchbar9.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let searchbar10 = document.createElement("button");
searchbar10.innerText="TASK-10";
searchbar10.classList="bg-blue-100 h-10 m-4 p-3 italic font-bold text-blue-800 rounded";

let displaybox = document.createElement("div");
displaybox.classList = "h-auto w-100 border-4 border-blue-800 bg-blue-200 justify-items-center content-center";
displaybox.innerHTML= `Click on TASK to get Output`;

mainframe.appendChild(searchbar1);
mainframe.appendChild(searchbar2);
mainframe.appendChild(searchbar3);
mainframe.appendChild(searchbar4);
mainframe.appendChild(searchbar5);
mainframe.appendChild(searchbar6);
mainframe.appendChild(searchbar7);
mainframe.appendChild(searchbar8);
mainframe.appendChild(searchbar9);
mainframe.appendChild(searchbar10);
mainframe.appendChild(displaybox);

searchbar1.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(display_products());
})

searchbar2.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(total_price());
})

searchbar3.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(premium_products());
})

searchbar4.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(discount_price());
})

searchbar5.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(category_count_featured());
})

searchbar6.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(highest_rated_product());
})

searchbar7.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(satisfaction_status());
})

searchbar8.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(status_count());
})

searchbar9.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(display_featured_items());
})

searchbar10.addEventListener("click", ()=>{
  displaybox.innerHTML="";
  displaybox.appendChild(store_report());
})