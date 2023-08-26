// const h2El = document.getElementById("h2");
// const bodyEl = document.getElementById("main")
// const btnEl = document.querySelector(".btn")
// const colorName = document.querySelector(`#colorText`)
// const submit = document.getElementById("#color");


// colorArr= ["red", "blue","green","orange","pink","violet"] 


// btnEl.addEventListener('click', function(){

//     let colorChange = colorArr[getRandom()]
//     bodyEl.style.backgroundColor = colorChange;
//     colorName.style.color = colorChange
//     colorName.innerHTML = colorChange;

// })

const input = document.querySelector("input")
const modal = document.getElementById("modal");
const err = document.getElementById("err")
const closeModal = document.querySelector("span")
let color1 = "blue"
let color2= "red"

document.body.style.background = `linea-gradient(to right, ${color1}, ${color2})`

input.addEventListener("change", (e)=>{
    if (e.target.value === ""){
        modal.style.display = "flex"
        err.textContent = "Please enter a valid color name";
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = e.target.value;
    }
 })




