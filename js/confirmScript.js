function showButton() {
    let email = document.getElementById("form_email").value;

    return confirm("Your email is: " + email + " is it true? ");
}