let inputNote = document.querySelector('#inputNote');
let list = document.querySelector('#list');

inputNote.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputNote) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputNote}<i></i>`; 

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    list.appendChild(listItem);
}
