let mainframe = document.getElementById("main-frame");

let display = document.createElement("div");
display.classList = "bg-blue-100 w-200 h-20 text-center font-bold text-3xl p-5 m-5";

let display2 = document.createElement("div");
display2.classList = "bg-yellow-100 w-200 h-20 text-center font-bold text-2xl italic p-5 m-5";

let display3 = document.createElement("div");
display3.classList = "bg-yellow-100 w-200 h-20 text-center font-bold text-2xl italic p-5 m-5";

let display4 = document.createElement("div");
display4.classList = "bg-red-100 w-200 h-40 text-center font-bold text-xl italic p-5 m-5";
display4.innerText = "Hello";

let display5 = document.createElement("div");
display5.classList = "bg-blue-100 w-200 h-50 p-5 m-5";
let str = "Gvj Wvsjsbmok. Ejdndod ptg pwsn mnLbvxncb lkjhgf xz poiuyt Cxnnsmb nbvcxz qwerty Okloi zmxncb qwerty poiuyt nbvcxz Mznxka rfvtgb yhnujmE ikolpq wsxedc qazwsx plmoki bnhTygt vfrdes. Pwowie nbvcxz zmxncb qwerty hjkloiO asdfgh Eqplsa rfvtgb qazw rfvtgb yhnujm ikolpq plmoki b wsxedc rfdd qwerty zmxncb nbC wsxedc pQlmokn bnhygt vfrdes xswzaq.";
let s=0;
let interval5 = setInterval(()=>{
    if(s<str.length){
        if(str[s] == "W" || str[s] == "E" || str[s] == "L" || str[s] == "C" || str[s] == "O" || str[s] == "M" || str[s] == "T" || str[s] == "Q"){
       display5.innerHTML = display5.innerHTML +`<span class="animate-ping text-red-500 font-bold text-3xl">${str[s++]}</span>`;
        }else{
         display5.innerHTML = display5.innerHTML +`<span>${str[s++]}</span>`;   
        }
    }else{
        clearInterval(interval5);
    }
},300);


let words = "WELCOME TO CODE QUOTIENT";
let i=0;
let interval = setInterval(()=>{
    if(i<words.length){
        display.innerHTML = display.innerHTML + words[i++];
    }else{
        clearInterval(interval);
    }
},1000);

let j=0;
let color = ["text-red-500", "text-blue-500"];
let k=0;
let interval2 = setInterval(()=>{
    if(j<words.length){
        if(words[j] == " "){
        display2.innerHTML = display2.innerHTML +`<span>${words[j++]}</span>`;
        }else{
            if(k){
                display2.innerHTML = display2.innerHTML +`<span class="${color[k--]}">${words[j++]}</span>`;
            }else{
                display2.innerHTML = display2.innerHTML +`<span class="${color[k++]}">${words[j++]}</span>`;
            }
        }
    }else{
        clearInterval(interval2);
    }
},500);

let j3=0;
let color3 = ["text-red-500", "text-blue-500"];
let k3=0;
let interval3 = setInterval(()=>{
    if(j3<words.length){
        if(words[j3] == " "){
        display3.innerHTML = display3.innerHTML +`<span>${words[j3++]}</span>`;
        }else{
            if(k3){
                display3.innerHTML = display3.innerHTML +`<span class="${color3[k3--]} animate-ping">${words[j3++]}</span>`;
            }else{
                display3.innerHTML = display3.innerHTML +`<span class="${color3[k3++]} animate-ping">${words[j3++]}</span>`;
            }
        }
    }else{
        clearInterval(interval3);
    }
},500);

let input = document.createElement("input");
input.classList = "border-2 p-2 m-5";
input.addEventListener("input",()=>{
    display4.innerText = "";
    display4.innerText=input.value;
})



mainframe.appendChild(display);
mainframe.appendChild(display2);
mainframe.appendChild(display3);
mainframe.appendChild(display4);
mainframe.appendChild(input);
mainframe.appendChild(display5);