var details = {"Dhinesh" : ["dhineshb678@gmail.com" , "Dhinesh"] , "Arun" : ["Arun678@gmail.com" , "Arun"]}

var cname = document.getElementById("c_name")
var age = document.getElementById("c_age")
var email = document.getElementById("c_email")
var password = document.getElementById("c_password")
var valbut = document.getElementById("valbutton")
var a = document.getElementById("anchor")

valbut.addEventListener("click" , function(event){
    event.preventDefault();
   for(let key in details){
        if(key == cname.value && details[key][0] == email.value && details[key][1] == password.value && age.value > 18){
            a.setAttribute("href" , "two.html")
            break
        }

    }
    }
)
