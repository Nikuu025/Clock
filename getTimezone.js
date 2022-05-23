window.addEventListener("DOMContentLoaded", () => checkStorage());

var firstPage = document.getElementsByClassName("first-page")[0];
var clockPage = document.getElementsByClassName("clock-page")[0];
var topBar = document.getElementsByClassName("top-bar")[0];

var select = document.getElementById("timezone");

var timezone;

const checkStorage = () => {
    if("Timezone" in localStorage)
    {
        var storage = 1;

        firstPage.classList.remove("visible");
        firstPage.classList.add("invisible");

        clockPage.classList.remove("invisible");
        clockPage.classList.add("visible");

        topBar.classList.remove("invisible");
        topBar.classList.add("visible");
    }
    else 
    {
        var storage = 0;

        select.addEventListener("change", () => addStorage());
    }

    console.log("storage: " + storage);
}

const addStorage = () => {
    timezone = select.value;
    
    localStorage['Timezone'] = timezone;
    console.log(localStorage['Timezone']);

    checkStorage();
}