const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

window.addEventListener('load', event => {
    var btn = document.getElementById("btn-submit")
    btn.addEventListener('click', event => {
        event.preventDefault()
        fetch("https://bitsflip.io/hijack", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",

            }
        })
            .then((response) => console.log(response.json()))
    })
})
