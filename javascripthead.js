//New list item when pressing "add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addtext").value; 
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("lista").appendChild(li);
      }
      document.getElementById("addtext").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = none;
    }
}
}
