
window.onload = function(){
var xhr = new XMLHttpRequest();
document.getElementById("test").innerHTML = "Hello World";

xhr.onreadystatechange = function(){
  console.log(xhr);
}


xhr.open("GET", "https://freetrial1566893.beekeeper.io/api/2/conversations/2758033", true);
xhr.setRequestHeader("authorization", "Token 47e6a7a2-a0d0-468f-92c1-7f45f0f0bdff");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-type", "application/json");

xhr.send();



}
