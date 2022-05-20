window.addEventListener("DOMContentLoaded", () => checkCache());

const checkCache = () => {
    if(caches.has('Timezone') == true)
    {
        console.log("true")
    }
    else 
    {
        console.log("false")
    }
}