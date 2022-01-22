function onit(){
}
    
function hamburger() {
    if(dropdown.style.display=="block"){
        console.log("hello1");
        dropdown.style.display = "none";
        return
    }
    dropdown.style.display = "block";
}
window.addEventListener('resize', function(event) {
    dropdown.style.display = "none";
}, true);