const message = "Merci pour votre idée !";

document.getElementById("myForm").addEventListener("submit", function () {
  alert(message);
});

document.getElementsByClassName(".buttonSub").addEventListener("submit", redirectFunction);
function redirectFunction() {
  location.href("")
}