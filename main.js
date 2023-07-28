let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click", function () {
    let txt = document.querySelector("input").value
    if (txt.trim() !== "") {
        let texto = txt
        let li = document.createElement("li")
        li.textContent = texto
        li.appendChild(addDeleBtn())
        ul.appendChild(li)
    }


})

function addDeleBtn() {
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent ="X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul.removeChild (item)
    })
    return deleteBtn
}