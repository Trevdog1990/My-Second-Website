function iconChange() {
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav1.gif";}, 333);
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav2.gif";}, 667);
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav3.gif";}, 1000);
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav4.gif";}, 1333);
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav5.gif";}, 1667);
setTimeout(function(){ document.getElementById("icon").href = "favicon/fav6.gif";}, 2000);
}

window.onload = function() {
setInterval(function() {
iconChange();
}, 2010);
};
