var middle = document.querySelector(".middle")
var content = document.querySelector(".contentform")
var order = document.querySelector(".orderform")
var wish = document.querySelector(".labelwish")

function unhide(){
    middle.style.display = "block";
    content.style.display = "block";
}

function unhideone(){
    middle.style.display = "block";
    order.style.display = "block";
}

function unhidetwo(event){
    event.preventDefault()
    var add = document.getElementById("address")
    var pin = document.getElementById("pincode")
    if(add.value != "" && pin.value != ""){
        event.target.parentElement.style.display = "none";
        middle.style.display = "block";
        wish.style.display = "block";
    }
}

var addtosale = document.querySelector("#addtosale")

addtosale.addEventListener("click" , function(event){
    event.preventDefault()
    middle.style.display = "none";
    content.style.display = "none";

    var name = document.querySelector("#name").value
    var brand = document.querySelector("#brand").value
    var price = document.querySelector("#price").value
    var phone = document.querySelector("#phone").value

    var res = document.createElement("div")
    res.setAttribute("class" , "product")
    res.innerHTML = `<h2>${name}</h2>
                     <h3>${brand}</h3>
                     <h4>${price}</h4>
                     <h5>${phone}</h5>
                     <button class = "buynow" onclick="unhideone()">Buy now</button>
                     <button onclick="remove(event)">Remove</button>`

    document.querySelector(".productgallery").append(res)
})

function back(event){
    wish.style.display = "none"
    middle.style.display = "none";   
}

function remove(event){
    event.target.parentElement.remove();
}