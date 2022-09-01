function passValues() {
    let fname = document.querySelector('#fname').value;
    let email = document.querySelector('#email').value;  

    localStorage.setItem('fname', fname);
    localStorage.setItem('email', email);

    return false;
}
