let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let url = "http://universities.hipolabs.com/search?country=india";
btn.addEventListener("click",async ()=>{
    
    let ip = await inp();
    
})
async function inp(){
    
    let datas = await axios.get(url);
    let state = input.value;
    console.log(state);
    return datas.data.state-province;
    
}
