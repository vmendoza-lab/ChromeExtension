const inputBtn = document.getElementById("input-btn");
let myLeads = ["www.google.com","www.microsoft.com"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //console.log(myLeads)
})

myLeads.forEach(el => {
    ulEl.innerHTML += "<li>" + el + "</li>"
});
