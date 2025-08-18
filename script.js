const scriptURL ="https://script.google.com/macros/s/AKfycbwV_bCSFICxFK0XCfQVi4G6EnlZvtbyVb7-LtSca8dR0r1GuuD9kYq6IhQTDwZAbrQqZg/exec"

const form = document.forms["email-form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var formData = new FormData(form);

    fetch(scriptURL, {method: "POST", body: formData})
    .then((response) => {
        console.log("yaay");
        form.reset();
    })

    .catch((error) => {
        console.log("boooo");
    });
})
