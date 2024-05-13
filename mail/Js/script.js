const usersMails = ["lorenzo.picchi@gmail.com", "marco.bianchi@gmail.com", "paolo.rossi@gmail.com", "martina.rossi@gmail.com" , "giulia.bianchi@gmail.com"];

const login = document.getElementById("inputEmail");

document.getElementById("btn").addEventListener("click", function(){
    if (usersMails.includes(login.value)){
        alert("Benvenuto, sei uno dei prescelti.");
    }else{
        alert("Non sei autorizzato");
    }
    
});

