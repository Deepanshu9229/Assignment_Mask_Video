

function validatePassword() {
    const password = "gym123";
    const userpassword = document.getElementById("password").value;
    if (userpassword === password) {
        window.location.href = "video.html";
    } else {
        alert("Incorrect Password! Try Again.")
    }
}