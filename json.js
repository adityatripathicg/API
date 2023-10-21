// let jsonres = '{"fact":"Cats lap liquid from the underside of their tongue, not from the top.","length":69}'
// let parsed = JSON.parse(jsonres);
 let url = "https://catfact.ninja/fact";
 let url2 = "https://dog.ceo/api/breeds/image/random"
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// //fetch with async and await
// async function getfacts(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }
// getfacts();

// //axios library
// async function gf(){
//     let res = await axios.get(url);
//     console.log(res.data.fact);
// }
//gf();

//Cat Facts
async function facts(){
    let facts = await axios.get(url);
    return facts.data.fact;
}
let btn = document.querySelector("button");
let p = document.querySelector("#fact");
btn.addEventListener("click", async()=>{
    let fact = await facts();
    console.log(fact);
    p.innerText = fact;
})

//dog Image
async function dog(){
    let dog = await axios.get(url2);
    return dog.data.message;
}
let btn2 = document.querySelector("#dogbtn");
let img = document.querySelector("#dogimg");
btn2.addEventListener("click",async ()=>{
    let link = await dog();
    img.src = link;
})


