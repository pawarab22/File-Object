console.log(__filename);
console.log(__dirname);

callme=()=>{
console.log(" You called me...!  :)");
}

// let timer = setTimeout(()=>{
//     console.log("Helooo");
// },2000);

// clearTimeout(timer);
counter=0;
let a = setInterval(()=>{
    console.log("Call Again...!",+ counter);
    counter++;
    if (counter == 5) {
        clearInterval(a);
    }
},1000);