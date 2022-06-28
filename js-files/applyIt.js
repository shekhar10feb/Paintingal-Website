function applyIt(){
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const username = document.querySelector('#username').value;
    const telephone = document.querySelector('#telephone').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const arr1 = [firstname, lastname, username, telephone, email, password];

    const arr = [];

    arr.push({
        firstname: arr1[0],
        lastname: arr1[1],
        username: arr1[2],
        telephone: arr1[3],
        email: arr1[4],
        password: arr1[5],
    });

    const [first, last, user, tele, e, pass] = arr;
}