const form = document.forms["email-form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    window.location.href = "https://forms.hackclub.com/story?email=" + encodeURIComponent(email);
});

