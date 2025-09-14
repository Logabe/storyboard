const form = document.forms["email-form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    window.location.href = "https://forms.hackclub.com/story?email=" + (email);
});
const sheet = document.getElementById("sticker_sheet");

const click = document.getElementById("click_me");

click.addEventListener("click", (e) => {
    // e.preventDefault();
    e.stopPropagation();
    sheet.style.display = "flex";

      sheet.scrollIntoView({ behavior: 'smooth', block: 'center' });
})
document.addEventListener("click", (e) => {
    if(getComputedStyle(sheet).display === "flex") {

    sheet.style.display = "none";
    }
})

