let icon = document.querySelector(".icon");
let navUl = document.querySelector("nav ul"); 

icon.addEventListener("click", () => {
    navUl.classList.toggle("showData"); 
    
    if (navUl.classList.contains("showData")) {
        document.getElementById("barIcon").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("barIcon").className = "fa-solid fa-bars";
    }
});
