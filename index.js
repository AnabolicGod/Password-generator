const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


 let password1El = document.getElementById("password1-el");
 let password2El = document.getElementById("password2-el");
 


 function box1(n) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
     newArray.push(characters[Math.floor(Math.random() * characters.length)])   
    }
    return newArray
 }
 
 function box2(n) {
    let newArray2 = [];
    for (let i = 0; i < n; i++) {
     newArray2.push(characters[Math.floor(Math.random() * characters.length)])   
    }
    return newArray2
 }

function passwordBtn() {
    document.getElementById("password1-el").value = box1(15).join("");
    document.getElementById("password2-el").value = box2(15).join("");
    
}

function copyBtnOne() {
   let copyText = password1El
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(copyText.value);
}

function copyBtnTwo() {
   let copyText = password2El
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(copyText.value);
}