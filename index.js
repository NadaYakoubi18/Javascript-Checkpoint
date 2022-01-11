console.log("test if they are linked")
const btnsPlus = document.querySelectorAll(".btn-plus");
const btnsMinus = document.querySelectorAll (".btn-moins");
const btnsRemove = document.getElementsByClassName("btn-delete");
const like = document.getElementsByClassName("like");
///// 
const qtes = document.querySelectorAll(".quantity");
const btnsLike = document.querySelectorAll("button.btn-like");
const svgLikes = document.querySelectorAll(".like");

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
  
 qtes[i].innerHTML ++;
    
  });
}
for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
   btnsMinus[i] >0
    qtes[i].innerHTML --;
   
  });
}
for (let i = 0; i < btnsRemove.length; i++) {
  btnsRemove[i].addEventListener("click", function () {
    btnsRemove[i].parentElement.parentElement.remove();
    totale();
  });
}
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    
    like[i].classList.toggle("btn-like");
  });
}
for (let i = 0; i < btnsLike.length; i++) {
  btnsLike[i].addEventListener("click", function () {
    if (svgLikes[i].style.fill == "red") {
      svgLikes[i].style.fill = "black";
    } else {
      svgLikes[i].style.fill = "red";
    }
  });
}
function totale() {
  
  const totalPrice = document.getElementById("prix-total");
  const qtes = document.querySelectorAll(".quantity");
  const prix = document.querySelectorAll(".prx");
  let somme = 0;
  for (let i = 0; i < prix.length; i++) {
    somme = somme + prix[i].innerHTML * qtes[i].innerHTML;
  }
  totalPrice.innerHTML = somme;
}