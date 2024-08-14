window.addEventListener('load', event => {
    var form = document.getElementById("profile")
    form.addEventListener('submit', event => {
        event.preventDefault()
        fetch("http://localhost/test", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",

            }
        })
            .then(response => console.log(response))
    })
})
