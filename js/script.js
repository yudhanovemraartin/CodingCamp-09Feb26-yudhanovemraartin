
wellcomemessage();
function wellcomemessage() {
    let name = prompt("Masukkan nama Anda?");
    if (name == null || name.trim() === "") {
        name = "Guest";
    }
    document.getElementById('welcome-speech').innerText = `Hello ${name}!, Welcome to My Website.`;
}

