const formEl= document.querySelector(".form");
const inputEl= document.querySelector(".input");
const ulEl= document.querySelector(".list");
let list= JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    toDoList(task)
})

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    toDoList();
})

function toDoList(task){
    let newTask= inputEl.value;
    if(task){
        newTask=task.name;
    }
    if(task && checked){
        liEl.classListList.add("checked");
    }
    const liEl = document.createElement("li");
    liEl.innertext= newTask;
    ulEl.appendChild(liEl);
    inputEl.value= "";
    const checkBtnEl= document.createElement("div");
    checkBtnEl.innerHTML= `<i class= "fas fa check square"> `;
    liEl.appendChild(checkBtnEl);
    const trashBtnEl= document.createElement("div");
    trashBtnEl.innerHTML= `<i class= "fas fa trash"></i>`;
    liEl.appendChild(trashBtnEl);
    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });
    trashBtnEl.addEventListener("click",()=>{
            liEl.remove();
            updateLocalStorage();
    });
}

function updateLocalStorage(){
    const liEls= document.querySelectorAll("li")
    let list= []
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.
            contains("checked")

        })
    })
    localStorage.setItem("list", JSON.stringify(list));
}